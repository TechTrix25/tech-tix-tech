import { chromium } from "playwright";

const BASE = "http://localhost:3000";
const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const page = await ctx.newPage();

await page.goto(BASE + "/", { waitUntil: "networkidle", timeout: 60000 });
await page.waitForTimeout(2000);

// Drive Lenis naturally with the wheel, in small steps, to the bottom.
for (let i = 0; i < 26; i++) {
  await page.mouse.wheel(0, 700);
  await page.waitForTimeout(450);
}
await page.waitForTimeout(2500);

// Capture the last two viewports (testimonials + CTA/footer).
await page.screenshot({ path: "screenshots/bottom-cta.png" });

// Scroll up one viewport for testimonials
await page.mouse.wheel(0, -900);
await page.waitForTimeout(1800);
await page.screenshot({ path: "screenshots/bottom-testimonials.png" });

await browser.close();
console.log("done");
