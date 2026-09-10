import { Page, Locator } from '@playwright/test'
import { BasePage } from './base.page'
import { BrowserActions as actions } from '../tests/utils/BrowserActions';

export class ProductPage extends BasePage{

    readonly addToCartButton: Locator;
    readonly productName: Locator;
    readonly shoppingCartIcon: Locator;
    readonly specificationTile: Locator;

    constructor( page: Page ){
         super(page);
         this.addToCartButton = page.getByTestId('add-to-cart');
         this.productName = page.getByText('Combination Pliers ');
         this.shoppingCartIcon = page.getByRole('img');
         this.specificationTile = page.getByTestId('specs-title');
    }

    async scrollToElement(locator:Locator):Promise<void> {
        await actions.scrollToElement(locator);
  }
   
    get specificationTitle():Locator{
        return this.specificationTile;
    }

     async addToCartProduct():Promise<void>{
         await this.addToCartButton.click();
     }

     async goToShoppingCartSection():Promise<void>{
         await this.navCart.click();
     }
}