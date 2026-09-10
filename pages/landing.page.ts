import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './base.page';

export class LandingPage extends BasePage{

    readonly productCards: Locator;
    readonly productName: Locator;

    constructor( page: Page ){
         super(page);
         this.productCards = page.locator('.card-body');
         this.productName =  page.getByTestId('product-name');
    }

    productImg(altText:string): Locator {
      return this.page.getByAltText(`${altText}`, { exact:true });
    }

    async selectProduct(name: string): Promise<void> {
        await this.productImg(name).click();
    }
}