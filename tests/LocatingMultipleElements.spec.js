import { test, expect } from "@playwright/test";

test("Locators", async ({ page }) => {
  //name of the test and ananymous function
  await page.goto("https://www.demoblaze.com/index.html");

  //   const links = await page.$$("a");

  //   for (const link of links) {
  //     const linktext = await link.textContent(); //to get the text value of the link
  //     console.log(linktext);
  //   }

  //to loacte multiple elements use the xpath

  await page.waitForSelector("//div[@id='tbodyid']//h4//a");
  const products = await page.$$("//div[@id='tbodyid']//h4//a");

  for (const product of products) {
    const productName = await product.textContent(); //to get the text value of the link
    console.log(productName);
  }
});
