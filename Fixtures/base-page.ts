import playgroundPage from '../pages/lamdatest-playground-page'
import simpleDemoPage from '../pages/simple-demo-page'
import progressBarPage from '../pages/progress-bar-page'
import inpotBoxPage from '../pages/input-box-page'
import { chromium, test as baseTest } from "@playwright/test";


import path from "path"

type pages = {
    playgroundPage: playgroundPage
    simpleDemoPage: simpleDemoPage
    progressBarPage: progressBarPage
    inpotBoxPage: inpotBoxPage
}

// LambdaTest capabilities
const capabilities = {
    browserName: "Chrome", // Browsers allowed: `Chrome`, `MicrosoftEdge`, `pw-chromium`, `pw-firefox` and `pw-webkit`
    browserVersion: "latest",
    "LT:Options": {
        platform: "Windows 10",
        build: "Playwright Test Build 4",
        name: "Playwright Test",
        user: 'hasithawaruna',
        accessKey: 'cQ8fwP8EJZ7fQBp2P3P2HelSQ7bkP6Ce9AQInTl08rmpNwy3h2',
        network: true,
        video: true,
        console: true,
        tunnel: false, // Add tunnel configuration if testing locally hosted webpage
        tunnelName: "", // Optional
        geoLocation: '', // country code can be fetched from https://www.lambdatest.com/capabilities-generator/
    },
};

// Patching the capabilities dynamically according to the project name.
const modifyCapabilities = (configName, testName) => {
    const config = configName.split("@lambdatest")[0];
    const [browserName, browserVersion, platform] = config.split(":");
    capabilities.browserName = browserName
        ? browserName
        : capabilities.browserName;
    capabilities.browserVersion = browserVersion
        ? browserVersion
        : capabilities.browserVersion;
    capabilities["LT:Options"]["platform"] = platform
        ? platform
        : capabilities["LT:Options"]["platform"];
    capabilities["LT:Options"]["name"] = testName;
};

const getErrorMessage = (obj, keys) =>
    keys.reduce(
        (obj, key) => (typeof obj == "object" ? obj[key] : undefined),
        obj
    );

const testPages = baseTest.extend<pages>({
    page: async ({ }, use, testInfo) => {
        const fileName = testInfo.file.split(path.sep).pop();
        if (testInfo.project.name.match(/lambdatest/)) {
            modifyCapabilities(
                testInfo.project.name,
                `${testInfo.title} - ${fileName}`
            );
            const browser = await chromium.connect(`wss://cdp.lambdatest.com/playwright?capabilities=
        ${encodeURIComponent(JSON.stringify(capabilities))}`);
            const context = await browser.newContext(testInfo.project.use);
            const ltPage = await context.newPage()
            await use(ltPage);
            const testStatus = {
                action: "setTestStatus",
                arguments: {
                    status: testInfo.status,
                    remark: getErrorMessage(testInfo, ["error", "message"]),
                },
            };
            await ltPage.evaluate(() => { },
                `lambdatest_action: ${JSON.stringify(testStatus)}`);
            await ltPage.close();
            await context.close();
            await browser.close();
        } else {
            const browser = await chromium.launch();
            const context = await browser.newContext();
            const page = await context.newPage()
            await use(page);
        }
    },


    playgroundPage: async ({ page }, use) => {
        await use(new playgroundPage(page));
    },
    simpleDemoPage: async ({ page }, use) => {
        await use(new simpleDemoPage(page));
    },
    progressBarPage: async ({ page }, use) => {
        await use(new progressBarPage(page));
    },
    inpotBoxPage: async ({ page }, use) => {
        await use(new inpotBoxPage(page));
    },

})

export const test = testPages;
export const expect = testPages.expect;

