
import React from 'react';
import { motion } from 'framer-motion';

interface FloatingDot {
  id: number;
  color: string;
  size: number;
  initialX: number;
  initialY: number;
}

export const FloatingDots = () => {
  const dots: FloatingDot[] = [
    { id: 1, color: '#F87171', size: 3, initialX: 10, initialY: 10 },
    { id: 2, color: '#60A5FA', size: 8, initialX: 90, initialY: 40 },
    { id: 3, color: '#34D399', size: 10, initialX: 50, initialY: 80 },
    { id: 4, color: '#A78BFA', size: 10, initialX: 80, initialY: 60 },
    { id: 5, color: '#F59E0B', size: 7, initialX: 30, initialY: 30 },
    { id: 6, color: '#EC4899', size: 6, initialX: 70, initialY: 20 },
  ];

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {dots.map((dot) => (
        <motion.div
          key={dot.id}
          className="absolute rounded-full"
          style={{
            backgroundColor: dot.color,
            width: dot.size,
            height: dot.size,
            left: `${dot.initialX}%`,
            top: `${dot.initialY}%`,
          }}
          animate={{
            x: [0, 30, -30, 0],
            y: [0, 20, -20, 0],
            scale: [1, 1.2, 0.8, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: dot.id * 0.8,
          }}
          whileInView={{
            opacity: [0, 1],
            transition: { duration: 0.5 }
          }}
          viewport={{ once: false, margin: "-20px" }}
        />
      ))}
    </div>
  );
};
