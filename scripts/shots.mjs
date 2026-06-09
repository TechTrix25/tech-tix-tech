import { chromium } from "playwright";
import { mkdirSync } from "fs";

const BASE = "http://localhost:3000";
const OUT = "screenshots";
mkdirSync(OUT, { recursive: true });

const pages = [
  { path: "/", name: "home" },
  { path: "/about", name: "about" },
  { path: "/services", name: "services" },
  { path: "/portfolio", name: "portfolio" },
  { path: "/contact", name: "contact" },
];

const browser = await chromium.launch();

async function shoot(viewport, label, reducedMotion = "no-preference") {
  const ctx = await browser.newContext({
    viewport,
    deviceScaleFactor: 1,
    reducedMotion,
  });
  const page = await ctx.newPage();
  for (const p of pages) {
    await page.goto(BASE + p.path, { waitUntil: "networkidle", timeout: 60000 });
    // let entrance animations settle + lazy content/3D mount
    await page.waitForTimeout(2600);
    await page.screenshot({ path: `${OUT}/${p.name}-${label}.png` });
    // full page for home only
    if (p.path === "/") {
      await page.screenshot({ path: `${OUT}/${p.name}-${label}-full.png`, fullPage: true });
    }
    console.log(`shot ${p.name}-${label}`);
  }
  await ctx.close();
}

await shoot({ width: 1440, height: 900 }, "desktop");
await shoot({ width: 390, height: 844 }, "mobile");
await shoot({ width: 1440, height: 900 }, "reduced", "reduce");

await browser.close();
console.log("done");
