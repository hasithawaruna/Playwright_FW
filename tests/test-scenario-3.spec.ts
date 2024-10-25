import { test, expect, Page } from '@playwright/test'
import { captureScreenshot } from '../Utils/Utils'; // Import the function
import { playgroundPage } from '../pages/lamdatest-playground-page'
import { inpotBoxPage } from '../pages/input-box-page';

let page: Page

// Below code will run before each test
test.beforeEach(async ({ browser }) => {
    page = await browser.newPage()
    const playgroundPageObj = new playgroundPage(page)
    await playgroundPageObj.goToBasePage()
})

test('verify use can see a validation message if proceed without filling the fields', async () => {
    const playgroundPageObj = new playgroundPage(page)
    const inpotBoxPageObj = new inpotBoxPage(page)

    await expect(playgroundPageObj.basePageTitle).toContainText(playgroundPageObj.expectedBasePageTitile)
    await playgroundPageObj.goToInputFormPage()
    await expect(inpotBoxPageObj.subPageTitle).toContainText(inpotBoxPageObj.expectedTitleText)
    await inpotBoxPageObj.clickSubmit()

    //We cannot validate the message content(since it's handled by the browser defaults). But we can validate the required property of each element.
    expect(inpotBoxPageObj.nameRequired).toBeTruthy()
    expect(inpotBoxPageObj.emailRequired).toBeTruthy()
    expect(inpotBoxPageObj.passwordRequired).toBeTruthy()
    expect(inpotBoxPageObj.companyRequired).toBeTruthy()
    expect(inpotBoxPageObj.websiteRequired).toBeTruthy()
    expect(inpotBoxPageObj.cityRequired).toBeTruthy()
    expect(inpotBoxPageObj.address1Required).toBeTruthy()
    expect(inpotBoxPageObj.address2Required).toBeTruthy()
    expect(inpotBoxPageObj.stateRequired).toBeTruthy()
    expect(inpotBoxPageObj.zipRequired).toBeTruthy()
    await captureScreenshot(page, 'verify use can see a validation message if proceed without filling the fields', false)
})

test('verify use can submit forum by filling all the fields', async () => {
    const playgroundPageObj = new playgroundPage(page)
    const inpotBoxPageObj = new inpotBoxPage(page)

    await expect(playgroundPageObj.basePageTitle).toContainText(playgroundPageObj.expectedBasePageTitile)
    await playgroundPageObj.goToInputFormPage()
    await expect(inpotBoxPageObj.subPageTitle).toContainText(inpotBoxPageObj.expectedTitleText)
    await inpotBoxPageObj.name.type("Hasitha")
    await inpotBoxPageObj.email.type("hasitha@xyz.com")
    await inpotBoxPageObj.password.type("Pa$$word")
    await inpotBoxPageObj.company.type("LamdaTest")
    await inpotBoxPageObj.website.type("https://www.lambdatest.com/")
    await inpotBoxPageObj.country.selectOption("United States")
    await inpotBoxPageObj.city.type("Colombo")
    await inpotBoxPageObj.address1.type("366, 2nd Lane")
    await inpotBoxPageObj.address2.type("Colombo 03")
    await inpotBoxPageObj.state.type("South-01")
    await inpotBoxPageObj.zip.type("12800")
    await inpotBoxPageObj.clickSubmit()
    expect(await inpotBoxPageObj.successMessage1.textContent()).toEqual(inpotBoxPageObj.expectedSuccessMessageText)
    await captureScreenshot(page, 'verify use can submit forum by filling all the fields', false)


})