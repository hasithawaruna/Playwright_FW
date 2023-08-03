import { expect, test } from '../Fixtures/base-page'

// Below code will run before each test
test.beforeEach(async ({ playgroundPage }) => {
    await playgroundPage.goToBasePage()
})
// Below code will run after each test
test.afterEach(async ({page}) => {
    await page.close()
});

test('verify user can submit values', async ({ playgroundPage, simpleDemoPage, page}) => {

    
    await expect(playgroundPage.basePageTitle).toContainText(playgroundPage.expectedBasePageTitile)
    await playgroundPage.goToSimpleFormDemoPage()
    await expect(page).toHaveURL(/simple-form-demo/)
    await expect(simpleDemoPage.subPageTitle).toContainText(simpleDemoPage.expectedTitleText)
    await simpleDemoPage.enterValue()
    await simpleDemoPage.checkSubmit()
    await expect(simpleDemoPage.message).toContainText(simpleDemoPage.expectedElementText)
})


