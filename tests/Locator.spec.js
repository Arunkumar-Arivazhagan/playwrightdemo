//const {test, expect} = require('@playwright/test')
import { test, expect } from "@playwright/test";

test("Locators", async ({ page }) => {
  //name of the test and ananymous function
  await page.goto("https://www.demoblaze.com/index.html");

  await page.click("id=login2");

  await page.fill("#loginusername", "arun0410");

  await page.fill("input[id='loginpassword']", "test@123");

  await page.click("//button[normalize-space()='Log in']");

  const logoutlink = await page.locator("//a[normalize-space()='Log out']");

  await expect(logoutlink).toBeVisible();

  await page.close();
});
