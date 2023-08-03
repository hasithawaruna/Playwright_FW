import { expect, test } from '../Fixtures/base-page'

// Below code will run before each test
test.beforeEach(async ({ playgroundPage }) => {
    await playgroundPage.goToBasePage()
})

test('verify use can see a validation message if proceed without filling the fields', async ({ playgroundPage, inpotBoxPage }) => {
    await expect(playgroundPage.basePageTitle).toContainText(playgroundPage.expectedBasePageTitile)
    await playgroundPage.goToInputFormPage()
    await expect(inpotBoxPage.subPageTitle).toContainText(inpotBoxPage.expectedTitleText)
    await inpotBoxPage.clickSubmit()

    //We cannot validate the message content(since it's handled by the browser defaults). But we can validate the required property of each element.
    expect(inpotBoxPage.nameRequired).toBeTruthy()
    expect(inpotBoxPage.emailRequired).toBeTruthy()
    expect(inpotBoxPage.passwordRequired).toBeTruthy()
    expect(inpotBoxPage.companyRequired).toBeTruthy()
    expect(inpotBoxPage.websiteRequired).toBeTruthy()
    expect(inpotBoxPage.cityRequired).toBeTruthy()
    expect(inpotBoxPage.address1Required).toBeTruthy()
    expect(inpotBoxPage.address2Required).toBeTruthy()
    expect(inpotBoxPage.stateRequired).toBeTruthy()
    expect(inpotBoxPage.zipRequired).toBeTruthy()
})

test('verify use can submit forum by filling all the fields', async ({ playgroundPage, inpotBoxPage }) => {
    await expect(playgroundPage.basePageTitle).toContainText(playgroundPage.expectedBasePageTitile)
    await playgroundPage.goToInputFormPage()
    await expect(inpotBoxPage.subPageTitle).toContainText(inpotBoxPage.expectedTitleText)
    await inpotBoxPage.name.type("Hasitha")
    await inpotBoxPage.email.type("hasitha@xyz.com")
    await inpotBoxPage.password.type("Pa$$word")
    await inpotBoxPage.company.type("LamdaTest")
    await inpotBoxPage.website.type("https://www.lambdatest.com/")
    await inpotBoxPage.country.selectOption("United States")
    await inpotBoxPage.city.type("Colombo")
    await inpotBoxPage.address1.type("366, 2nd Lane")
    await inpotBoxPage.address2.type("Colombo 03")
    await inpotBoxPage.state.type("South-01")
    await inpotBoxPage.zip.type("12800")
    await inpotBoxPage.clickSubmit()
    expect(await inpotBoxPage.successMessage1.textContent()).toEqual(inpotBoxPage.expectedSuccessMessageText)

})