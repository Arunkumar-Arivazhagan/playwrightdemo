// page.getByAltText() - to locate an element, usually image, by its text alternative.
// page.getByPlaceholder() - to locate an input by placeholder.
// page.getByRole() to locate by explicit and implicit accessibility attributes.
// page.getByText() to locate by text content.

// page.getByLabel() to locate a form control by associated label's text.
// page.getByTitle() to locate an element by its title attribute.
// page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).

import { test, expect } from "@playwright/test";

test("Locators", async ({ page }) => {
  //name of the test and ananymous function
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );

  const logo = await page.getByAltText("company-branding");
  await expect(logo).toBeVisible();

  await page.getByPlaceholder("username").fill("admin");
  await page.getByPlaceholder("password").fill("admin123");
});
