import { test, expect } from "@playwright/test";

test("Handle dropdown", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  //multiple ways to check options from dropdown
  //await page.locator("#country").selectOption({ label: "India" });
  //await page.locator("#country").selectOption("India");
  //await page.locator("#country").selectOption({value: uk});
  //await page.locator("#country").selectOption({index: 1});
  //await page.selectOption("#country","India");

  //assertions
  //check number of options present in the dropdown - approach 1
  //   const options = await page.locator("#country option");
  //   await expect(options).toHaveCount(10);

  //approach 2
  //const options = await page.$$("#country option");
  //to print the number of options
  //console.log(options.length);
  //await expect(options.length).toBe(10);

  //check presence of an option
  //   const content = await page.locator("#country").textContent();
  //   await expect(content.includes("india")).toBeTruthy();

  //   //check presence of a value in the dropdown using looping statement
  //   const options = await page.$$("#country option");
  //   let status = false;

  //   for (const option of options) {
  //     //console.log(await option.textContent());
  //     let value = await option.textContent();
  //     if (value.includes("France")) {
  //       status = true;
  //       break;
  //     }
  //     expect(status).toBeTruthy();
  //   }

  //selete option from drop down using looping statement
  const options = await page.$$("#country option");

  for (const option of options) {
    //console.log(await option.textContent());
    let value = await option.textContent();
    if (value.includes("France")) {
      await page.selectOption("#country", value);
      break;
    }
  }
});
