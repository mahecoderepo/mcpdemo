import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage'
import { HomePage } from '../pages/HomePage';

test.describe('Login Test Suite', () => {
  test('should login successfully and verify home page', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const homePage = new HomePage(page);

    // Navigate and login
    await loginPage.goto();
    await loginPage.login('sravs123@gmail.com', 'Test@123');

    // Verify successful login
    await homePage.verifyHomePageLoaded();
  });
});
