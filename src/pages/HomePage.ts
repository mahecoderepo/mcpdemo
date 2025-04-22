import { type Page, type Locator, expect } from '@playwright/test';

export class HomePage {    readonly page: Page;
    readonly homeTitle: Locator;

    constructor(page: Page) {
        this.page = page;
        this.homeTitle = page.locator("//h3[normalize-space()='Home']");
    }

    async verifyHomePageLoaded() {
        await expect(this.homeTitle).toBeVisible({ timeout: 10000 });
        await expect(this.page).toHaveURL(/.*\/home/);
    }
}
