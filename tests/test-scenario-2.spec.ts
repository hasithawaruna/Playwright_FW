import { expect, test, Page } from '@playwright/test'
import { playgroundPage } from '../pages/lamdatest-playground-page'
import { progressPage } from '../pages/progress-bar-page'
import { captureScreenshot } from '../Utils/Utils'; // Import the function


let page: Page;

// Below code will run before each test
test.beforeEach(async ({ browser }) => {
    page = await browser.newPage()

    const playgroundPageObj = new playgroundPage(page)
    await playgroundPageObj.goToBasePage()

})

test("verify user can change slider value", async () => {

    const playgroundPageObj = new playgroundPage(page)
    const progressPageObj = new progressPage(page)

    await expect(playgroundPageObj.basePageTitle).toContainText(playgroundPageObj.expectedBasePageTitile)
    await playgroundPageObj.goToSliderPage()
    await expect(progressPageObj.subPageTitle).toContainText(progressPageObj.expectedTitleText)
    await progressPageObj.progressbar.click()
    await progressPageObj.setValue()
    expect(await progressPageObj.progressbarValue.innerText()).toEqual('95')
    await captureScreenshot(page, 'verify user can change slider value', false)
});





