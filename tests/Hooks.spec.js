//const {test, expect} = require('@playwright/test')
import { test, expect } from "@playwright/test";

let page;

test.beforeEach(async ({ browser }) => {
  page = await browser.newPage(); //initializing page to use everywhere
  //login
  await page.goto("https://www.demoblaze.com/index.html");
  await page.click("id=login2");
  await page.fill("#loginusername", "arun0410");
  await page.fill("input[id='loginpassword']", "test@123");
  await page.click("//button[normalize-space()='Log in']");
});

test.afterEach(async () => {
  //no need to parametrize page since its already been declared in beforeEach
  await page.click("#logout2").click();
});

test.describe("group1", async () => {
  test("Home Page Test", async () => {
    //logout
    await expect(page).toHaveTitle("STORE");
    await expect(page).toHaveURL("https://www.demoblaze.com/index.html");

    const logoutlink = await page.locator("//a[normalize-space()='Log out']");
    await expect(logoutlink).toBeVisible();
  });
});

test.describe("group2", async () => {
  test("Home Page Test2", async () => {
    //logout
    await expect(page).toHaveTitle("STORE");
    await expect(page).toHaveURL("https://www.demoblaze.com/index.html");

    const logoutlink = await page.locator("//a[normalize-space()='Log out']");
    await expect(logoutlink).toBeVisible();
  });
});
