import { Page } from '@playwright/test';
import { allure } from 'allure-playwright';

/**
 * Capture a screenshot and attach it to the Allure report.
 * @param page The Playwright page object.
 * @param description Description for the Allure report.
 */
export async function captureScreenshot(page: Page, description: string, fullscreen: boolean): Promise<void> {
    //await page.waitForLoadState('load');
    await page.waitForLoadState('networkidle');
    const screenshotPath = `./screenshots/${description}-${Date.now()}-screenshot.png`;
    //const screenshotPath = `./screenshots/${Date.now()}-screenshot.png`;
    await page.screenshot({ path: screenshotPath, fullPage: fullscreen });
    allure.attachment(description, Buffer.from(await page.screenshot()), 'image/png');
}