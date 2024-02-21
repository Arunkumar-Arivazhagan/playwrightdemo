import { test, expect } from "@playwright/test";

test.skip("Handling ok Alert", async ({ page }) => {
  //to skip the test
  await page.goto("https://testautomationpractice.blogspot.com/");

  //enabling dialog window handler
  page.on("dialog", async (dialog) => {
    expect(dialog.type()).toContain("alert");
    expect(dialog.message()).toContain("I am an alert box");
    await dialog.accept();
  });

  await page.click('//button[normalize-space()="Alert"]');
  await page.waitForTimeout(5000);
});

test.skip("With confirmation Alert", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  //enabling dialog window handler
  page.on("dialog", async (dialog) => {
    expect(dialog.type()).toContain("confirm");
    expect(dialog.message()).toContain("Press a button!");
    await dialog.accept(); //close by tapping on ok button
    // await dialog.dismiss(); // close by tapping on cancel
  });

  await page.click('//button[normalize-space()="Confirm Box"]');
  await page.waitForTimeout(5000);
});

test("Prompt dialog", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  //enabling dialog window handler
  page.on("dialog", async (dialog) => {
    expect(dialog.type()).toContain("propmpt");
    expect(dialog.message()).toContain("Please enter your name:");
    expect(dialog.defaultValue()).toContain("Harry Potter"); //default value

    await dialog.accept("John"); //close by tapping on ok button after entering the value
    // await dialog.dismiss(); // close by tapping on cancel
  });

  await page.click('//button[normalize-space()="Prompt"]');
  await expect(page.locator('//p[@id="demo"]')).toHaveText(
    "Hello John! How are you?"
  );
  await page.waitForTimeout(5000);
});
