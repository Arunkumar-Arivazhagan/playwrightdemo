import { test, expect } from "@playwright/test";

test("Radio actions", async ({ page }) => {
  //name of the test and ananymous function
  await page.goto("https://itera-qa.azurewebsites.net/home/automation");

  await expect
    .soft(page)
    .toHaveURL("https://itera-qa.azurewebsites.net/home/automation");

  await expect(await page.locator("//input[@value='option2']")).check();

  await expect(await page.locator("//input[@value='option2']")).toBeChecked();
  await expect(
    await page.locator("//input[@value='option2']").isChecked()
  ).toBeTruthy();

  await expect(
    await page.locator("//input[@value='option1']").isChecked()
  ).toBeFalsy();
});
