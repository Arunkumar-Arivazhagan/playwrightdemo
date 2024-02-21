import { test, expect } from "@playwright/test";

test("Hidden dropdown", async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );

  await page.locator("[name='username]").fill("admin");
  await page.locator("[name='password]").fill("admin123");
  await page.locator("[type='submit]").click();

  await page.locator("//span[normalize-space()='PIM']").click();

  await page.locator("");

  const options = await page.$$("//div[@role='listbox']//span");

  for (let option of options) {
    const jobTitle = await option.textContent();
    if (jobTitle.includes("QA Engineer")) {
      await option.click();
      break;
    }
  }
});
