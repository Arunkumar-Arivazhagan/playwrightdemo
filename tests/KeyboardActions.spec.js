import { test, expect } from "@playwright/test";

test("Drag and drop", async ({ page }) => {
  await page.goto("https://gotranscript.com/text-compare");

  //await page.locator('name="text1"').fill("Welcome to automation");
  await page.type('name="text1"', "Welcome to automation");

  //ctl + A
  await page.keyboard.press("Meta+A");

  //ctl + C
  await page.keyboard.press("Meta+C");

  //TAB
  await page.keyboard.down("Tab");
  await page.keyboard.up("Tab");

  //ctl + V
  await page.keyboard.press("Meta+V");
});
