import { test, expect } from "@playwright/test";

test("Handle checkboxes", async ({ page }) => {
  await page.goto("https://itera-qa.azurewebsites.net/home/automation");

  await expect(
    await page.locator("//input[@id='monday' and @type='checkbox']")
  ).check();

  await expect(
    await page.locator("//input[@id='monday' and @type='checkbox']")
  ).toBeChecked();
  await expect(
    await page.locator("//input[@id='monday' and @type='checkbox']").isChecked()
  ).toBeTruthy();

  //not checked
  await expect(
    await page.locator("//input[@id='sunday' and @type='checkbox']").isChecked()
  ).toBeFalsy();

  //multiple checkboxes
  const checkboxeLocators = [
    "//input[@id='sunday' and @type='checkbox']",
    "//input[@id='monday' and @type='checkbox']",
    "//input[@id='tuesday' and @type='checkbox']",
  ];

  //select multiple check boxes
  for (const locator of checkboxeLocators) {
    await page.locator(locator).check();
  }

  //unselect multiple check boxes that are selected
  for (const locator of checkboxeLocators) {
    if (await page.locator(locator).isChecked())
      await page.locator(locator).uncheck();
  }

  //await page.waitForTimeout(5000);
});
