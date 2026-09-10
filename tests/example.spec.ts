import { test, expect } from '@playwright/test';
import { LandingPage } from '../pages/landing.page';
import { ProductPage } from '../pages/product.page';
import { CartPage }  from '../pages/cart.page';
import { SignInPage }  from '../pages/signin.page';

test('This is my first Test',async ({page})=>{
    
    const landingPage = new LandingPage(page);
    const productPage = new ProductPage(page);
    const signinPage = new SignInPage(page);
    const cartPage = new CartPage(page);
    await landingPage.goHome();
    await landingPage.selectProduct('Pliers');
    //await productPage.scrollToElement(productPage.specificationTitle);
    //await expect(productPage.specificationTile).toHaveText('Specifications');
    await productPage.addToCartProduct();
    await productPage.scrollToElement(productPage.navCart);
    await productPage.goToShoppingCartSection();
    await cartPage.setProductQuantity(2);
    await cartPage.clickOnProceedButton();
    await signinPage.clickOnContinueAsGuestTab();
    await page.pause();
})