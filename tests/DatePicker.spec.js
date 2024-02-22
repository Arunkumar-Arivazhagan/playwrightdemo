import { test, expect } from "@playwright/test";

test("Date Picker", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  await page.fill("#datepicker", "03/15/2024"); //direct method

  //date picker element handling
  const year = "2024";
  const month = "March";
  const date = "20";

  await page.click("#datepicker"); //open the date picker

  while (true) {
    const currentYear = await page.locator(".ui-datepicker-year").textContent();
    const currentMonth = await page
      .locator(".ui-datepicker-month")
      .textContent();

    if (currentMonth == month && currentYear == year) {
      break;
    }

    await page.locator('[title="Next"]').click(); // click on next button until the desired month and year is selected
    //await page.locator('[title="Prev"]').click(); //to click on previous year
  }

  /*
  const dates = await page.$$("//a[@class='ui-state-default']");

  for (const dt of dates) {
    if ((await dt.textContent()) == date) {
      await dt.click();
      break;
    }
  }
  */

  await page.click(`//a[@class='ui-state-default'] [text()='${date}']`);
});
