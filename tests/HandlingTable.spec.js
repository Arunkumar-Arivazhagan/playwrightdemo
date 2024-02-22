import { test, expect } from "@playwright/test";

test("Handle Tables", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  const table = await page.locator("#productTable");

  //total number of rows and columns
  const columns = await table.locator("thead tr th");
  console.log("Number of columns:", await columns.count());

  const rows = await table.locator("tbody tr");
  console.log("Number of rows:", await rows.count());

  //assertions
  expect(await columns.count()).toBe(4);
  expect(await rows.count()).toBe(5);

  //   //select checkbox for product 4
  //   const matchedRow = rows.filter({
  //     has: page.locator("td"), //filter all the locators with td tag
  //     hasText: "Product 4",
  //   });

  //   await matchedRow.locator("input").check(); //check the checkbox of product 4
  //select multiple products from table
  await selectProduct(rows, page, "Product 1");
  await selectProduct(rows, page, "Product 3");
  await selectProduct(rows, page, "Product 5");

  //print all product details using loop
  //   for (i = 0; i < (await rows.count()); i++) {
  //     const row = rows.nth(i);
  //     const tds = row.locator("td");
  //     for (j = 0; j < (await tds.count()) - 1; j++) {
  //       //-1 to lose the last td which is checkbox
  //       console.log(await tds.nth(j).textContent());
  //     }
  //   }

  //to print multiple pages of table

  const pages = await page.locator(".pagenation li a");
  console.log("Number of pages in the table: ", await pages.count);

  for (let p = 0; p < (await pages.count()); p++) {
    if (p > 0) {
      await pages.nth(p).click();
    }
    //print all product details using loop
    for (i = 0; i < (await rows.count()); i++) {
      const row = rows.nth(i);
      const tds = row.locator("td");
      for (j = 0; j < (await tds.count()) - 1; j++) {
        //-1 to lose the last td which is checkbox
        console.log(await tds.nth(j).textContent());
      }
    }
    await page.waitForTimeout(3000);
  }
});

async function selectProduct(rows, page, name) {
  //select checkbox for product 4
  const matchedRow = rows.filter({
    has: page.locator("td"), //filter all the locators with td tag
    hasText: name,
  });

  await matchedRow.locator("input").check(); //check the checkbox of product 4
}
