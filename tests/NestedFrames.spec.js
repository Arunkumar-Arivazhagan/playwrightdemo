import { test, expect } from "@playwright/test";

test.skip("Nested frames", async ({ page }) => {
  await page.goto("https://ui.vision/demo/webtest/frames/");

  //total frames
  const allFrames = await page.frames();
  console.log("Number of frames:", allFrames.length);

  //handling frame3
  //await page.frame('name if provided')
  const frame3 = await page.frame({
    url: "https://ui.vision/demo/webtest/frames/frame_3.html",
  });
  await frame3.fill("input[name='mytext3']", "Hello"); //fill(locator,value);

  //nested frame
  const childFrames = await frame3.childFrames(); //capture the child frames
  await childFrames[0].locator('//*[@id="i5"]/div[3]/div').check(); //access the child frames

  const inputbox = await page
    .frameLocator("frame[src='frame_1.html']")
    .locator("[name='mytext1']"); //name and url is not acceptable, accepts only CSS

  inputbox.fill("Hello");
});
