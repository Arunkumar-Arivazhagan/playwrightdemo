import { test, expect } from "@playwright/test";

test("Mouse hover", async ({ page }) => {
  await page.goto("https://demo.opencart.com/");

  const desktop = await page.locator('//a[normalize-space()="Desktops"]');
  const macbook = await page.locator('//a[normalize-space()="Mac (1)"]');

  //mouse hover
  await desktops.hover();
  await macbook.hover();
});

test("Right Click", async ({ page }) => {
  await page.goto("http://swisnl.github.io/jQuery-contextMenu/demo.html");
  const button = await page.locator(
    '//span[normalize-space()="right click me"]'
  );

  //right click action
  await button.click({ button: "right" });
});

test("Double Click", async ({ page }) => {
  await page.goto("http://swisnl.github.io/jQuery-contextMenu/demo.html");
  const button = await page.locator('//span[normalize-space()="Copy me"]');

  //right click action
  await button.dblclick();
});
