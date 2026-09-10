import { Page, Locator } from '@playwright/test';
import { BasePage } from './base.page';

export class CartPage extends BasePage{

    readonly productQuantity:Locator;
    readonly proceedButton:Locator;

    constructor(page:Page){
        super(page);
        this.productQuantity = page.getByTestId('product-quantity');
        this.proceedButton = page.getByRole('button',{name:'Proceed to checkout'});
    }

    async setProductQuantity( quantity:string | number ):Promise<void>{
        await this.productQuantity.clear();
        await this.productQuantity.fill(quantity.toString());
    }

    async clickOnProceedButton():Promise<void>{
        await this.proceedButton.click();
    }
}