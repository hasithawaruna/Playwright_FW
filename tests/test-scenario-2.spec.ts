import { expect, test } from '../Fixtures/base-page'

// Below code will run before each test
test.beforeEach(async ({ playgroundPage }) => {
    await playgroundPage.goToBasePage()
})

test("verify user can change slider value", async ({ playgroundPage, progressBarPage }) => {

    await expect(playgroundPage.basePageTitle).toContainText(playgroundPage.expectedBasePageTitile)
    await playgroundPage.goToSliderPage()
    await expect(progressBarPage.subPageTitle).toContainText(progressBarPage.expectedTitleText)
    await progressBarPage.progressbar.click()
    await progressBarPage.setValue()
    expect(await progressBarPage.progressbarValue.innerText()).toEqual('95')
});





