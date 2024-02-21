// 1) expect(page).toHaveURL()   Page has URL
// 2) expect(page).toHaveTitle()   Page has title
// 3) expect(locator).toBeVisible()  Element is visible
// 4) expect(locator).toBeEnabled()  Control is enabled
// 5) expect(locator).toBeChecked()  Radio/Checkbox is checked
// 6) expect(locator).toHaveAttribute() Element has attribute
// 7) expect(locator).toHaveText()  Element matches text
// 8) expect(locator).toContainText()  Element contains text
// 9) expect(locator).toHaveValue(value) Input has a value
// 10) expect(locator).toHaveCount()  List of elements has given length

import { test, expect } from "@playwright/test";

test("AssertionsTest", async ({ page }) => {
  //name of the test and ananymous function
  await page.goto("https://demo.nopcommerce.com/register");

  await expect(page).toHaveURL("https://demo.nopcommerce.com/register");

  await expect(page).toHaveTitle("nopCommerce demo store. Register");

  const logoElement = await page.locator(".header-logo");
  await expect(logoElement).toBeVisible();

  const searchStoreBox = await page.locator("#small-searchterms");
  await expect(searchStoreBox).toBeEnabled();

  //radio button
  const maleRadioButton = await page.locator("#gender-male");
  await maleRadioButton.click();
  await expect(maleRadioButton).toBeChecked();

  //checkbox
  const newsletterCheckbox = await page.locator("#Newsletter");
  await expect(newsletterCheckbox).toBeChecked();

  //attribute
  const registerButton = await page.locator("#register-button");
  await expect(registerButton).toHaveAttribute("type", "submit");

  await expect(await page.locator(".page-title h1")).toHaveText("Register"); //full text

  const emailInput = await page.locator("#Email"); // to check the value of text box
  await emailInput.fill("test@demo.com");
  await expect(emailInput).toHaveValue("test@demo.com");

  const options = await page.locator('select[name="DateOfBirthMonth"] option');
  await expect(options).toHaveCount(13);
});
