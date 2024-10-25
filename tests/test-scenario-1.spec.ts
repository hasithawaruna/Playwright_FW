import { test, expect, Page } from '@playwright/test'
import { playgroundPage } from '../pages/lamdatest-playground-page'
import { simpleDemoPage } from '../pages/simple-demo-page'
import { captureScreenshot } from '../Utils/Utils'; // Import the function



let page: Page


// Below code will run before each test
test.beforeEach(async ({ browser }) => {
    page = await browser.newPage()

    const playgroundPageObj = new playgroundPage(page)
    await playgroundPageObj.goToBasePage()
})

// Below code will run after each test
test.afterEach(async ({ browser }) => {
    page = await browser.newPage()
    await page.close()
});

test('verify user can submit values', async () => {
    const playgroundPageObj = new playgroundPage(page)
    const simpleDemoPageObj = new simpleDemoPage(page)
    await expect(playgroundPageObj.basePageTitle).toContainText(playgroundPageObj.expectedBasePageTitile)
    await playgroundPageObj.goToSimpleFormDemoPage()
    await expect(page).toHaveURL(/simple-form-demo/)
    await expect(simpleDemoPageObj.subPageTitle).toContainText(simpleDemoPageObj.expectedTitleText)
    await simpleDemoPageObj.enterValue()
    await page.waitForTimeout(1000)
    await simpleDemoPageObj.checkSubmit()
    await expect(simpleDemoPageObj.message).toContainText(simpleDemoPageObj.expectedElementText)
    await captureScreenshot(page, 'verify user can submit values', false)
})


