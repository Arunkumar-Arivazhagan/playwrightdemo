import { expect, test } from "@playwright/test";

test("Page Screenshot", async ({ page }) => {
  await page.goto("https://www.demoblaze.com/");
  await page.screenshot({
    path: "tests/screenshots/" + Date.now() + "HomePage.png",
  });
});

test("Full page", async ({ page }) => {
  await page.goto("https://www.demoblaze.com/");
  await page.screenshot({
    path: "tests/screenshots/" + Date.now() + "FullPage.png",
    fullPage: true,
  });
});

test("Just element", async ({ page }) => {
  await page.goto("https://www.demoblaze.com/");
  await page.locator('//*[@id="tbodyid"]/div[1]').screenshot({
    path: "tests/screenshots/" + Date.now() + "Element.png",
  });
});
