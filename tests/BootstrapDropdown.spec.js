import { test, expect } from "@playwright/test";

test("Bootstrap dropdown", async ({ page }) => {
  await page.goto("https://www.jquery-az.com/boots/demo.php?ex=63.0_2");

  await page.locator(".multiselect").click();

  //1
  const options = await page.locator("ul>li label input");
  await expect(options).toHaveCount(11);

  //approach 2
  //const options = await page.$$("ul>li label input");
  //to print the number of options
  //console.log(options.length);
  //await expect(options.length).toBe(10);

  //Select multiple options from the drop down
  //const options = await page.$$("ul>li label input");
  //   for (const option of options) {
  //     //console.log(await option.textContent());
  //     let value = await option.textContent();
  //     if (value.includes("Angular") || value.includes("Java")) {
  //       await option.click();
  //       break;
  //     }
  //   }
});
