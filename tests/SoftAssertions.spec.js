import { test, expect } from "@playwright/test";

test("SoftAssertionsTest", async ({ page }) => {
  //name of the test and ananymous function
  await page.goto("https://demo.nopcommerce.com/register");

  await expect.soft(page).toHaveURL("https://demo.nopcommerce.com/register");
});
