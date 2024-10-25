import { type Locator, type Page } from '@playwright/test'
import dotenv from 'dotenv'

dotenv.config({
  path: '.env.test'
})

export class progressPage {

  //Locators
  page: Page
  subPageTitle: Locator
  progressbar: Locator
  progressbarValue: Locator

  //Expected values
  expectedTitleText = 'Slider Demo'

  constructor(page: Page) {
    this.page = page
    this.subPageTitle = page.locator("h1")
    this.progressbar = page.locator("//input[@value='15']")
    this.progressbarValue = page.locator("#rangeSuccess")
  }

  async setValue() {
    // Get the position
    let position: any;

    // Check if `boundingBox()` returns null
    const boundingBox = await this.progressbar.boundingBox();

    if (boundingBox == null) {
      position = 0;
    }

    // Get target position for value 95
    const targetPositionX = position.x + position.width * 0.93;

    const mouse = this.page.mouse;
    await mouse.move(position.x, position.y);
    await mouse.down();
    await mouse.move(targetPositionX, position.y);
    await mouse.up();
  }

}