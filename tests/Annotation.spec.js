import { expect, test } from "@playwright/test";

test.only("test1", async ({ page }) => {
  console.log("This is test 1");
});
test.only("test2", async ({ page }) => {
  console.log("This is test 2");
});
test.skip("test3", async ({ page }) => {
  console.log("This is test 3");
});
test("test4", async ({ page, browserName }) => {
  if (browserName === "chromium") {
    test.skip(); //skip using condition
  }
});
test("test5", async ({ page }) => {
  test.fixme(); //unfinished testcases can be placed under fixme
  console.log("Test 5");
});
test("test6", async ({ page }) => {
  test.fail(); //expected to fail
  console.log("Test 6");
  expect(1).toBe(1); //actually passed
  //result will still be fail, becaused expected to fail and the test cases passed
});
//negative test
test("test7", async ({ page }) => {
  test.fail(); //expected to fail
  console.log("Test 6");
  expect(1).toBe(2); //failed
  //result will be pass, becaused expected to fail and the test cases failed
});
test("test8", async ({ page, browserName }) => {
  console.log("Test 8");
  if (browserName === "chromium") {
    //condition is pass
    test.fail(); //fail
  }
});
