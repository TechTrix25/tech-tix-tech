"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import * as THREE from "three";

const AMBER = new THREE.Color("#FFB23E");
const IRIS = new THREE.Color("#7B6CF6");
const MINT = new THREE.Color("#4FD1B5");

/** Evenly distribute N points on a sphere (Fibonacci spiral). */
function fibonacciSphere(n: number, radius: number) {
  const pts: THREE.Vector3[] = [];
  const golden = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < n; i++) {
    const y = 1 - (i / (n - 1)) * 2;
    const r = Math.sqrt(1 - y * y);
    const theta = golden * i;
    pts.push(
      new THREE.Vector3(Math.cos(theta) * r, y, Math.sin(theta) * r).multiplyScalar(radius)
    );
  }
  return pts;
}

/** A rotating sphere of connected points — a tech "network globe". */
function Globe({ count }: { count: number }) {
  const group = useRef<THREE.Group>(null);

  const { pointsGeo, pointsMat, linesGeo } = useMemo(() => {
    const N = count;
    const R = 1.7;
    const pts = fibonacciSphere(N, R);

    // Points geometry with per-vertex colors (amber → mint → iris by height).
    const positions = new Float32Array(N * 3);
    const colors = new Float32Array(N * 3);
    const c = new THREE.Color();
    pts.forEach((p, i) => {
      positions[i * 3] = p.x;
      positions[i * 3 + 1] = p.y;
      positions[i * 3 + 2] = p.z;
      const t = (p.y / R + 1) / 2; // 0..1
      if (t < 0.5) c.copy(AMBER).lerp(MINT, t * 2);
      else c.copy(MINT).lerp(IRIS, (t - 0.5) * 2);
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    });
    const pointsGeo = new THREE.BufferGeometry();
    pointsGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    pointsGeo.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    // Soft round sprite so points are dots, not squares.
    const canvas = document.createElement("canvas");
    canvas.width = canvas.height = 64;
    const ctx = canvas.getContext("2d")!;
    const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    grad.addColorStop(0, "rgba(255,255,255,1)");
    grad.addColorStop(0.4, "rgba(255,255,255,0.8)");
    grad.addColorStop(1, "rgba(255,255,255,0)");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 64, 64);
    const sprite = new THREE.CanvasTexture(canvas);

    const pointsMat = new THREE.PointsMaterial({
      size: 0.07,
      map: sprite,
      vertexColors: true,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true,
    });

    // Connect each point to its 2 nearest neighbours for the network look.
    const linePos: number[] = [];
    const seen = new Set<string>();
    for (let i = 0; i < N; i++) {
      const dists: { j: number; d: number }[] = [];
      for (let j = 0; j < N; j++) {
        if (i === j) continue;
        dists.push({ j, d: pts[i].distanceToSquared(pts[j]) });
      }
      dists.sort((a, b) => a.d - b.d);
      for (let k = 0; k < 2; k++) {
        const j = dists[k].j;
        const key = i < j ? `${i}-${j}` : `${j}-${i}`;
        if (seen.has(key)) continue;
        seen.add(key);
        linePos.push(pts[i].x, pts[i].y, pts[i].z, pts[j].x, pts[j].y, pts[j].z);
      }
    }
    const linesGeo = new THREE.BufferGeometry();
    linesGeo.setAttribute(
      "position",
      new THREE.BufferAttribute(new Float32Array(linePos), 3)
    );

    return { pointsGeo, pointsMat, linesGeo };
  }, [count]);

  useFrame((state, delta) => {
    if (!group.current) return;
    group.current.rotation.y += delta * 0.12;
    // ease tilt toward the cursor
    const targetX = -state.pointer.y * 0.35;
    const targetZ = state.pointer.x * 0.15;
    group.current.rotation.x += (targetX - group.current.rotation.x) * 0.05;
    group.current.rotation.z += (targetZ - group.current.rotation.z) * 0.05;
  });

  return (
    <group ref={group}>
      <points geometry={pointsGeo} material={pointsMat} />
      <lineSegments geometry={linesGeo}>
        <lineBasicMaterial
          color={IRIS}
          transparent
          opacity={0.22}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </lineSegments>
      {/* faint inner core glow */}
      <mesh>
        <sphereGeometry args={[1.2, 32, 32]} />
        <meshBasicMaterial color={IRIS} transparent opacity={0.04} />
      </mesh>
    </group>
  );
}

export default function HeroObjectScene() {
  // Scale the work to the device. Mobile gets fewer points (the neighbour
  // computation is O(N²)), a lower pixel ratio, and skips the costly bloom
  // post-processing pass — keeping the effect cheap where it matters most.
  const isMobile =
    typeof window !== "undefined" && window.innerWidth < 768;
  const count = isMobile ? 300 : 460;

  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 38 }}
      dpr={isMobile ? [1, 1.25] : [1, 1.75]}
      gl={{ antialias: !isMobile, alpha: true, powerPreference: "high-performance" }}
      style={{ background: "transparent" }}
    >
      <Globe count={count} />
      {!isMobile && (
        <EffectComposer>
          <Bloom intensity={1.1} luminanceThreshold={0.1} luminanceSmoothing={0.5} mipmapBlur />
        </EffectComposer>
      )}
    </Canvas>
  );
}
