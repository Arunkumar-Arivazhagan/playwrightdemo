const { test, expect, chromium } = require("@playwright/test");

test("Handle pages/windows", async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();

  const page1 = await context.newPage();
  const page2 = await context.newPage();

  //display the number of pages created
  const allPages = context.pages();
  console.log("Number of pages created = ", allPages.length);

  await page1.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );
  await expect(page1).toHaveTitle("OrangeHRM");

  await page2.goto("https://www.orangehrm.com/");
  await expect(page2).toHaveTitle("OrangeHRM HR Software | OrangeHRM");
});

test("Handle pages/windows", async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();

  const page1 = await context.newPage();
  const page2 = await context.newPage();

  await page1.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );
  await expect(page1).toHaveTitle("OrangeHRM");

  //creating a new tab
  const pagePromise = context.waitForEvent("page");
  await page1.locator('//a[normalize-space()="OrangeHRM, Inc"]').click();

  const newPage = await pagePromise;
  await expect(newPage).toHaveTitle("OrangeHRM HR Software | OrangeHRM");

  //close the created browser in the end
  await browser.close();
});
