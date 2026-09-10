import { Page, Locator } from '@playwright/test';
import { BasePage } from './base.page';

export class SignInPage extends BasePage{

    readonly continueAsGuestTab:Locator;
    readonly email:Locator;
    readonly name:Locator;
    readonly password:Locator;
    readonly submitButton:Locator;
    


    constructor(page:Page){
        super(page);
        this.continueAsGuestTab = page.getByRole('tab',{name:'Continue as Guest'});
        this.email = page.getByTestId('guest-email');
        this.name =  page.getByTestId('guest-first-name');
        this.password = page.getByTestId('password');
        this.submitButton = page.getByTestId('login-submit');
    }

    async clickOnContinueAsGuestTab():Promise<void>{
        await this.continueAsGuestTab.click();
    }

}