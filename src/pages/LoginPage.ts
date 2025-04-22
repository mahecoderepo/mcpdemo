import { type Page, type Locator, expect } from '@playwright/test';
import { CONFIG } from '../utils/config';

export class LoginPage {
    readonly page: Page;
    readonly emailInput: Locator;
    readonly nextButton: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.emailInput = page.locator("//input[contains(@placeholder,'Email ID / Mobile Number')]");
        this.nextButton = page.locator('button:has-text("Next")');
        this.passwordInput = page.locator('input[type="password"]');
        this.loginButton = page.locator("//button[normalize-space()='Login']");
    }

    async goto() {
        await this.page.goto(CONFIG.url);
        await this.page.waitForLoadState('networkidle');
    }

    async enterEmail(email: string) {
        await expect(this.emailInput).toBeVisible({ timeout: 10000 });
        await expect(this.emailInput).toBeEnabled();
        await this.emailInput.fill(email);
    }

    async clickNext() {
        await expect(this.nextButton).toBeVisible({ timeout: 5000 });
        await expect(this.nextButton).toBeEnabled();
        await this.nextButton.click();
    }

    async enterPassword(password: string) {
        await expect(this.passwordInput).toBeVisible({ timeout: 5000 });
        await this.passwordInput.fill(password);
    }

    async clickLogin() {
        await expect(this.loginButton).toBeVisible({ timeout: 5000 });
        await expect(this.loginButton).toBeEnabled();
        await this.loginButton.click();
    }

    async login(email: string, password: string) {
        await this.enterEmail(email);
        await this.clickNext();
        await this.enterPassword(password);
        await this.clickLogin();
    }
}
