// https://github.com/americanexpress/jest-image-snapshot
// https://github.com/puppeteer/puppeteer
// https://www.npmjs.com/package/concurrently

import puppeteer from 'puppeteer';

describe('jest-image-snapshot usage with an image received from puppeteer', () => {
  let browser;

  beforeAll(async () => {
    browser = await puppeteer.launch();
  });

  it('works', async () => {
    const page = await browser.newPage();
    await page.goto('http://localhost:3000');
    const image = await page.screenshot();

    expect(image).toMatchImageSnapshot();
  });

  afterAll(async () => {
    await browser.close();
  });
});