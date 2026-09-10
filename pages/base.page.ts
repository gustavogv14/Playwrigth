import { Page, Locator } from "@playwright/test";

export class BasePage {

    readonly page: Page;
    readonly navMenu: Locator;
    readonly navMenuHome: Locator;
    readonly navMenuCategories: Locator;
    readonly navCategoryList: Locator;
    readonly navMenuContact: Locator;
    readonly navMenuSignIn: Locator;
    readonly navMenuLanguageSelect: Locator;
    readonly navCart: Locator;
    readonly navCartQuantity: Locator;

    constructor(page: Page){
       this.page = page;
       this.navMenu = page.getByTestId("nav-menu");
       this.navMenuHome = page.getByTestId("nav-home");
       this.navMenuCategories = page.getByTestId("nav-categories");
       this.navCategoryList = page.getByLabel("nav-categories");
       this.navMenuContact = page.getByTestId("nav-contact");
       this.navMenuSignIn = page.getByTestId("nav-sign-in");
       this.navMenuLanguageSelect = page.getByTestId("language-select");
       this.navCart = page.getByTestId("nav-cart");
       this.navCartQuantity = page.getByTestId("cart-quantity");
    }

    async goHome(): Promise<void> {
        this.page.goto("/", { waitUntil: 'domcontentloaded' });
    }

    

}