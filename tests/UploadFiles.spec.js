const { test, expect } = require("@playwright/test");

test("Single File", async ({ page }) => {
  await page.goto("https://www.foundit.in/");

  await page.waitForSelector(".mqfihd-upload");
  await page.locator(".mqfihd-upload").click();
  await page
    .locator("#file-upload")
    .setInputFiles("tests/uploadFiles/testfile1.pdf");
});

test.only("Multiple Files", async ({ page }) => {
  await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php");

  await page.waitForSelector("#filesToUpload");
  await page
    .locator("#filesToUpload")
    .setInputFiles([
      "tests/uploadFiles/testfile1.pdf",
      "tests/uploadFiles/testfile2.pdf",
    ]);

  expect(await page.locator("#fileList li:nth-child(1)")).toHaveText(
    "testfile1.pdf"
  );
  expect(await page.locator("#fileList li:nth-child(2)")).toHaveText(
    "testfile2.pdf"
  );

  //removing files
  await page.locator("#filesToUpload").setInputFiles([]);

  expect(await page.locator("#fileList li:nth-child(1)")).toHaveText(
    "No Files Selected"
  );
});
