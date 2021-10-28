import { Browser, chromium } from 'playwright';



// test('example test', async ({ page }) => {
//   await page.goto('http://localhost:3000/test/titlebars');
//   expect(await page.screenshot()).toMatchSnapshot('titlebars-full.png');
// });

describe('jest-image-snapshot: test is working', () => {
    let browser: Browser;

    beforeAll(async () => {
      browser = await chromium.launch();
    });

    afterAll(async () => {
      await browser.close();
    });

    test("base", async () => {
        const page = await browser.newPage();
        await page.goto('http://localhost:3000/test/titlebars');
        const image = await page.screenshot();
        expect(image).toMatchImageSnapshot();
        // expect(await page.screenshot()).toMatchSnapshot('titlebars-full.png');
    })
})

