import { type Locator, type Page } from '@playwright/test'
import dotenv from 'dotenv'

dotenv.config({
  path: '.env.test'
})


export class playgroundPage {

  //Locators
  page: Page
  basePageTitle: Locator
  SimpleFormDemoPage: Locator
  SliderPage: Locator
  InputFormPage: Locator

  //Expected values
  expectedBasePageTitile = 'Selenium Playground'

  constructor(page: Page) {
    this.page = page
    this.basePageTitle = page.locator("h1")
    this.SimpleFormDemoPage = page.getByRole('link', { name: 'Simple Form Demo', exact: true })
    this.SliderPage = page.getByRole('link', { name: 'Drag & Drop Sliders', exact: true })
    this.InputFormPage = page.getByRole('link', { name: 'Input Form Submit', exact: true })

  }

  async goToBasePage() {
    await this.page.goto(process.env.BASE_URL ?? '') //Getting base URL from .env file
  }

  async goToSimpleFormDemoPage() {
    await this.SimpleFormDemoPage.click()
  }
  async goToSliderPage() {
    await this.SliderPage.click()
  }
  async goToInputFormPage() {
    await this.InputFormPage.click()
  }
}