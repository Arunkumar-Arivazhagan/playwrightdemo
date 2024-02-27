import { LoginPage } from "../Pages/LoginPage";
import { HomePage } from "../Pages/HomePage";
import { test, expect } from "@playwright/test";
import { CartPage } from "../Pages/CartPage";

test("test", async ({ page }) => {
  //login
  const login = new LoginPage(page);
  await login.gotoLoginPage();
  await login.login("arun", "test@123");

  //home
  const home = new HomePage(page);
  await home.addProductToCart("Nexus 6");
  await home.gotoCart();

  //cart
  const cart = new CartPage(page);
  await cart.checkProductInCart("Nexus 6");
});
