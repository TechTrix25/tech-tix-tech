import { chromium } from "playwright";
import { mkdirSync } from "fs";

const BASE = "http://localhost:3000";
const OUT = "screenshots/scroll";
mkdirSync(OUT, { recursive: true });

const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const page = await ctx.newPage();

await page.goto(BASE + "/", { waitUntil: "networkidle", timeout: 60000 });
await page.waitForTimeout(2500);

const total = await page.evaluate(() => document.body.scrollHeight);
const step = 850;
let i = 0;
for (let y = 0; y < total; y += step) {
  await page.evaluate((yy) => window.scrollTo(0, yy), y);
  await page.waitForTimeout(1100);
  await page.screenshot({ path: `${OUT}/home-${String(i).padStart(2, "0")}.png` });
  console.log(`scroll ${i} @ ${y}`);
  i++;
  if (i > 16) break;
}

await browser.close();
console.log("done");
