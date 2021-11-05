import { Browser, chromium } from 'playwright';

describe('test themes', () => {
    let browser: Browser;

    beforeAll(async () => {
      browser = await chromium.launch();
    });

    afterAll(async () => {
      await browser.close();
    });

    test("theme default", async () => {
        const page = await browser.newPage();
        await page.goto('http://localhost:3000/test/titlebars/default');
        const image = await page.screenshot();
        expect(image).toMatchImageSnapshot();
    })

    test("theme light", async () => {
        const page = await browser.newPage();
        await page.goto('http://localhost:3000/test/titlebars/light');
        const image = await page.screenshot();
        expect(image).toMatchImageSnapshot();
    })

    test("theme dark", async () => {
        const page = await browser.newPage();
        await page.goto('http://localhost:3000/test/titlebars/dark');
        const image = await page.screenshot();
        expect(image).toMatchImageSnapshot();
    })

    test("theme dark and light", async () => {
        const page = await browser.newPage();
        await page.goto('http://localhost:3000/test/titlebars/dark-light');
        const image = await page.screenshot();
        expect(image).toMatchImageSnapshot();
    })

    test("colors", async () => {
        const page = await browser.newPage();
        await page.goto('http://localhost:3000/test/titlebars/colors');
        const image = await page.screenshot();
        expect(image).toMatchImageSnapshot();
    })
})
