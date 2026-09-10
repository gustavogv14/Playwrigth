import { Page,Locator } from '@playwright/test'

export class BrowserActions {

    static async scrollToElement(locator:Locator):Promise<void>{
          await locator.waitFor({ state: 'attached', timeout: 90000 });
          await locator.scrollIntoViewIfNeeded();
    }
}