import { test, expect, Page } from '@playwright/test'
import { playgroundPage } from '../pages/lamdatest-playground-page'
import { simpleDemoPage } from '../pages/simple-demo-page'
import { captureScreenshot } from '../Utils/Utils'; // Import the function
import { allure } from "allure-playwright";
import { Severity } from "allure-js-commons";



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

test('TC001 - verify user can submit values', async () => {
    await allure.description("TC001 - verify user can submit values");
    await allure.owner("Hasitha Waruna");
    await allure.tags("Functional", "UI");
    await allure.severity(Severity.NORMAL);
    await allure.feature("Home Page");
    await allure.suite("Smoke Test Suite");
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


