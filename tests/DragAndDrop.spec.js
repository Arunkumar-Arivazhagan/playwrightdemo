import { test, expect } from "@playwright/test";

test("Drag and drop", async ({ page }) => {
  await page.goto(
    "https://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop"
  );
  const rome = await page.locator("#box6");
  const italy = await page.locator("#box106");

  //Approach 1
  await rome.hover();
  await page.mouse.down();

  await italy.hover();
  await page.mouse.up();

  //approach 2
  await rome.dragTo(italy);

  const washington = await page.locator("#box3");
  const usa = await page.locator("#box103");
  await washington.dragTo(usa);
});
