import { type Locator, type Page } from '@playwright/test'
import dotenv from 'dotenv'

dotenv.config({
  path: '.env.test'
})

export class inpotBoxPage {

  //Locators
  page: Page
  subPageTitle: Locator
  name: Locator
  email: Locator
  password: Locator
  company: Locator
  website: Locator
  country: Locator
  city: Locator
  address1: Locator
  address2: Locator
  state: Locator
  zip: Locator
  submit: Locator
  successMessage1: Locator
  nameRequired: Locator
  emailRequired: Locator
  passwordRequired: Locator
  companyRequired: Locator
  websiteRequired: Locator
  countryRequired: Locator
  cityRequired: Locator
  address1Required: Locator
  address2Required: Locator
  stateRequired: Locator
  zipRequired: Locator

  //Expected values
  expectedTitleText = 'Form Demo'
  expectedSuccessMessageText = 'Thanks for contacting us, we will get back to you shortly.'

  constructor(page: Page) {
    this.page = page
    this.subPageTitle = page.locator("h1")
    this.name = page.locator('#name')
    this.email = page.locator('#inputEmail4')
    this.password = page.locator('#inputPassword4')
    this.company = page.locator('#company')
    this.website = page.locator('#websitename')
    this.country = page.locator("select[name='country']")
    this.city = page.locator('#inputCity')
    this.address1 = page.locator('#inputAddress1')
    this.address2 = page.locator('#inputAddress2')
    this.state = page.locator('#inputState')
    this.zip = page.locator('#inputZip')
    this.submit = page.getByRole('button', { name: 'Submit', exact: true })
    this.nameRequired = page.locator('input#name[required]')
    this.emailRequired = page.locator('input#inputEmail4[required]')
    this.passwordRequired = page.locator('input#inputPassword4[required]')
    this.companyRequired = page.locator('input#company[required]')
    this.websiteRequired = page.locator('input#websitename[required]')
    this.cityRequired = page.locator('input#inputCity[required]')
    this.address1Required = page.locator('input#inputAddress1[required]')
    this.address2Required = page.locator('input#inputAddress2[required]')
    this.stateRequired = page.locator('input#inputState[required]')
    this.zipRequired = page.locator('input#inputZip[required]')
    this.successMessage1 = page.locator('//*[@class="success-msg hidden"]')
  }

  async clickSubmit() {
    await this.submit.click()
  }
}