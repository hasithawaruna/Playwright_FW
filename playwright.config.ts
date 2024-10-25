import { defineConfig, devices } from '@playwright/test';
import { testPlanFilter } from "allure-playwright/dist/testplan";


/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * See https://playwright.dev/docs/test-configuration.
 */



export default defineConfig({

  //testMatch: ["/tests/test-scenario-3.spec.ts"],

  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  // retries: process.env.CI ? 2 : 0,

  /* Retry 2 times */
  retries: 0,

  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  // reporter: [
  //   [
  //     'html', {
  //       open: 'always'
  //     }
  //   ],
  //   ["line"], 
  //   ["allure-playwright"]
  // ],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://127.0.0.1:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    // trace: 'on-first-retry',
    trace: 'off',
    screenshot: 'only-on-failure',
    video: 'on',
    headless: true //execution mode
    // launchOptions: {
    //   slowMo: 1000 //slowdown execution
    // }
  },

  //Maximum time that one test can run
  timeout: 6000 * 1000,

  expect: {
    //Maximum time expect()
    timeout: 6000000

  },

  /* Configure projects for major browsers */
  projects: [
 
    {
      name: "chrome:latest:MacOS Catalina@lambdatest",
      use: {
          viewport: { width: 1280, height: 720 },
      },
  },
  {
      name: "MicrosoftEdge:latest:Windows 10@lambdatest",
      use: {
          viewport: { width: 1280, height: 720 },
      },
  },
  // {
  //   name: 'chromium',
  //   use: { ...devices['Desktop Chrome'] },
  // },
    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },

  grep: testPlanFilter(),
  reporter: [["line"], ["allure-playwright"]],

});
