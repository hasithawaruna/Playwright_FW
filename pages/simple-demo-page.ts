import { type Locator, type Page } from '@playwright/test'
import dotenv from 'dotenv'

dotenv.config({
  path: '.env.test'
})

export class simpleDemoPage {

  //Locators
  page: Page
  subPageTitle: Locator
  textbox: Locator
  submit: Locator
  message: Locator

  //Expected values
  expectedElementText = 'Welcome to LambdaTest'
  expectedTitleText = 'Simple Form Demo'

  constructor(page: Page) {
    this.page = page
    this.subPageTitle = page.locator("h1")
    this.textbox = page.locator('#user-message')
    this.submit = page.locator('#showInput')
    this.message = page.locator('#message')
  }

  async enterValue() {
    await this.textbox.nth(0).type(this.expectedElementText) //Getting first occurrence and interact
  }

  async checkSubmit() {
    this.page.waitForTimeout(1000)
    await this.submit.click()
  }
}