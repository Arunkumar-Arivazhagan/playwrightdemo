import { test, expect } from "@playwright/test";

test("Input actions", async ({ page }) => {
  //name of the test and ananymous function
  await page.goto("https://itera-qa.azurewebsites.net/home/automation");

  await expect
    .soft(page)
    .toHaveURL("https://itera-qa.azurewebsites.net/home/automation");

  await expect(await page.locator("//input[@id='name']")).toBeVisible();
  await expect(await page.locator("//input[@id='name']")).toBeEmpty();
  await expect(await page.locator("//input[@id='name']")).toBeEditable();
  await expect(await page.locator("//input[@id='name']")).toBeEnable();

  await page.locator("//input[@id='name']").fill("John");
});
