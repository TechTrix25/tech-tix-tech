import { chromium } from "playwright";

const BASE = "http://localhost:3000";
const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const page = await ctx.newPage();

const errors = [];
page.on("console", (m) => { if (m.type() === "error") errors.push("CONSOLE: " + m.text()); });
page.on("pageerror", (e) => errors.push("PAGEERROR: " + e.message));

await page.goto(BASE + "/", { waitUntil: "networkidle", timeout: 60000 });
await page.waitForTimeout(2000);

const snap = async (label) => {
  const info = await page.evaluate(() => ({
    url: location.href,
    sheets: document.styleSheets.length,
    bodyBg: getComputedStyle(document.body).backgroundColor,
    bodyFont: getComputedStyle(document.body).fontFamily,
    scrollY: window.scrollY,
    docH: document.documentElement.scrollHeight,
  }));
  console.log(label, JSON.stringify(info));
};

await snap("top");

// jump to bottom via JS
await page.evaluate(() => window.scrollTo(0, document.documentElement.scrollHeight));
await page.waitForTimeout(2500);
await snap("after-scrollTo-bottom");

// natural wheel to bottom
for (let i = 0; i < 24; i++) { await page.mouse.wheel(0, 800); await page.waitForTimeout(250); }
await page.waitForTimeout(2500);
await snap("after-wheel-bottom");

console.log("ERRORS:", errors.length ? errors.join("\n") : "none");
await browser.close();
