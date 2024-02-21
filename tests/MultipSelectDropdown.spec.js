import { test, expect } from "@playwright/test";

test("Handle multi slect checkboxes", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  //select multiple options from a drop down
  //   await page.selectOption("#colors", ["Blue", "Red", "Yellow"]);

  //assertions
  //const options = await page.locator("#color option");
  //   await expect(options).toHaveCount(5);

  //approach 2
  //const options = await page.$$("#color option");
  //to print the number of options
  //console.log(options.length);
  //await expect(options.length).toBe(5);

  //check presence of an option
  //   const content = await page.locator("#color").textContent();
  //   await expect(content.includes("Blue")).toBeTruthy();
});
