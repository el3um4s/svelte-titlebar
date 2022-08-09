import { chromium, type Browser } from 'playwright';

const base = 'https://el3um4s.github.io/svelte-titlebar';

describe('test themes', () => {
	let browser: Browser;

	beforeAll(async () => {
		browser = await chromium.launch();
	});

	afterAll(async () => {
		await browser.close();
	});

	test('theme default', async () => {
		const page = await browser.newPage();
		await page.goto(`${base}/test/titlebars/default`);
		const image = await page.screenshot();
		expect(image).toMatchImageSnapshot();
	});

	test('theme light', async () => {
		const page = await browser.newPage();
		await page.goto(`${base}/test/titlebars/light`);
		const image = await page.screenshot();
		expect(image).toMatchImageSnapshot();
	});

	test('theme dark', async () => {
		const page = await browser.newPage();
		await page.goto(`${base}/test/titlebars/dark`);
		const image = await page.screenshot();
		expect(image).toMatchImageSnapshot();
	});

	test('theme dark and light', async () => {
		const page = await browser.newPage();
		await page.goto(`${base}/test/titlebars/dark-light`);
		const image = await page.screenshot();
		expect(image).toMatchImageSnapshot();
	});

	test('colors', async () => {
		const page = await browser.newPage();
		await page.goto(`${base}/test/titlebars/colors`);
		const image = await page.screenshot();
		expect(image).toMatchImageSnapshot();
	});
});
