import { test, expect } from "@playwright/test";

test.skip("frames", async ({ page }) => {
  await page.goto("https://ui.vision/demo/webtest/frames/");

  //total frames
  const allFrames = await page.frames();
  console.log("Number of frames:", allFrames.length);

  //appraoch 1 using name of url of the page
  //await page.frame('name if provided')
  const frame1 = await page.frame({ url: "" });
  await frame1.fill("[name='mytext1']", "Hello"); //fill(locator,value);

  //approach 2 using frame locator
  const inputbox = await page
    .frameLocator("frame[src='frame_1.html']")
    .locator("[name='mytext1']"); //name and url is not acceptable, accepts only CSS

  inputbox.fill("Hello");
});
