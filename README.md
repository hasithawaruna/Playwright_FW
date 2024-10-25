## Test Automation Framework using Playwright & Typescript

The goal is to showcase various user interactions on the "https://www.lambdatest.com/selenium-playground/" web application by creating automated tests that cover specific user flows. These tests will be implemented using Playwright and TypeScript. The tests will simulate how users navigate and interact with the web application, verifying that it functions correctly and meets the desired expectations.

## Table of contents
- [Prerequisits]
- [Run the Project with Gitpod]
- [Page Object Model(POM)]
- [Folder Structure]
- [Dotenv Module (.env)] 
- [Specs]
- [Pages] 
- [Test Execution Methods]
- [Reporting]


## Prerequisits

```bash

 NodeJs - version 18.12.0

 playwright - version 1.36

```

## Run the Project Locally

Clone the project

```bash
https://github.com/hasithawaruna/Playwright_FW.git
```

Open Terminal on your IDE and Run below command to install all dependancies

```bash
npm install
```

Run the below command to start test with default scope 
 
```bash
npm test
```

## Run the Project with Gitpod

Log in to your Gitpod account

```bash
https://gitpod.io/login/
```

Open the below URL with the browser

```bash
https://hasithawaru-playwrighte-n04p0blokrd.ws-us102.gitpod.io/
```

Once the VScode is opened with your browser, Run the below command with the terminal 
 
```bash
npm test
```


## Page Object Model(POM)


The Page Object Model (POM) in Playwright is a design pattern used to organize web automation code. It abstracts web pages into classes, encapsulating their elements and actions. This approach enhances code maintainability, reusability, and readability, enabling efficient interaction with web elements while creating automated tests.


## Folder Structure

 
    ├── ...
    │
    ├── pages/                                    # Generic functionality for tests  
    │
    ├── tests/                                    # Test cases     
    │  
    ├── Utils/                                    # Utility files
    | 
    ├── screenshots/                              # Screenshots
    │ 
    ├── Fixtures/                                 #  setting up and tearing down the test environments, providing shared context and resources across multiple tests
    │         integration.ts                      #  Device farm properties                    
    │
    ├── playwright-report/   
    │         ├──index.html                       #  Default Test report of the tests executed 
    │
    ├── allure-report/   
    │         ├──index.html                       #  Allure Test report of the tests executed 
    │
    ├── allure-results                            #  Data files used to build Allure HTML report
    │
    │── .env.test                                 # Confiugurations used in the test environment
    │
    ├── playwright.config.ts                      # Confiugurations of Playwright
    │  
    ├── node_modules/                             # Storing installed project dependencies
    │ 
    ├── package.json                              # Dependency and script management     
    │ 
    └── package-lock.json                         # Dependency version locking


## Dotenv Module (.env) 

 
The '.env.test' file in Playwright TypeScript web automation allows setting environment-specific variables (e.g., base URLs, credentials) for easier configuration and testing across different test environments.
More information about Dotenv can be found in official documentation [here](https://www.npmjs.com/package/dotenv).

## Specs


In Playwright's Page Object Model (POM), ".spec.ts" files are utilized for organizing automated test code separately from the application code. These files contain test specifications and scenarios written in TypeScript. Playwright recognizes ".spec.ts" files as test files and executes them using testing frameworks built on Playwright.

**Specs are written under the /tests folder. Check the above Folder structure for a better understanding**.

## Pages


In Playwright's Page Object Model (POM), "Pages" refer to the representation of web pages as classes. Each web page is abstracted into a separate class, encapsulating its elements, actions, and related methods. This approach allows testers to interact with the web elements and perform actions on the page without directly dealing with the underlying HTML or implementation details. It promotes code modularity and makes test code more organized and maintainable.

**Page files are written under the /pages folder. Check the above Folder structure for a better understanding**.


## Test Execution Methods


Tests can be executed either via the command line or from the Playwright test runner plugin in VS code. By following the below commands you can execute tests with different settings.

### Run all test cases : 

   To run all the test cases available under /test directory without visual (headless)
   ```
   npx playwright test
   ```

   To run all the test cases available under /test directory with visual (headed)
   ```
   npx playwright test --headed
   ```
   To run all the test cases available under /test directory with Trace Viewer UI
   ```
   npx playwright test --ui
   ```

    To run all the test cases available under /test directory with a specific browser
   
     Chrome :
       ```
       npx playwright test --project=chromium
       ```
    Firefox :
       ```
       npx playwright test --project=firefox
       ```
    Webkit :
       ```
       npx playwright test --project=webkit
       ```

### Run specific test cases : 

   To run specific test cases available under /test directory without visual (headless)
   ```
   npx playwright test <testcasename.spec.ts>
   ```
   To run specific test cases available under /test directory with visual (headed)
   ```
   npx playwright test <testcasename.spec.ts> --headed
   ```
   To run specific test cases available under /test directory with Trace Viewer UI
   ```
   npx playwright test <testcasename.spec.ts> --ui
   ```

    To run specific test cases available under /test directory with a specific browser
    
    Chrome :
       ```
       npx playwright test <testcasename.spec.ts> --project=chromium
       ```
    Firefox :
       ```
       npx playwright test <testcasename.spec.ts> --project=firefox
       ```
    Webkit :
       ```
       npx playwright test <testcasename.spec.ts> --project=webkit
       ```


## Reporting

#### Default Report
Once the execution is done the playwright report will automaticcally open with your browser.
```
  npx playwright show-report
```
#### Allure Report (https://www.npmjs.com/package/allure-playwright?activeTab=readme)

Once the execution is done the Run below command to generate allure HTML report (Use -- Clean for remove previous reports files).
```
  allure generate ./allure-results -o ./allure-report --clean
```

Open generated allure HTML report.
```
  allure open ./allure-report
```

#### To View HTML Report

```bash
├── playwright-report/   
│         ├──index.html - Right Click and Navigate to the directory to open the .HTML file via the browser    
```

## Fixes

#### Error : '/ps1 cannot be loaded because running scripts is disabled on this system'

Run below command to resolve undefined ExecutionPolicy.
```
  Set-ExecutionPolicy -ExecutionPolicy Bypass -Scope CurrentUser
```