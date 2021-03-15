import { launch, Page } from 'puppeteer-core';
import { getOptions } from './options';
import { FileType } from './types';
let _page: Page | null;

async function getPage(isDev: boolean) {
    if (_page) {
        return _page;
    }
    const options = await getOptions(isDev);
    const browser = await launch(options);
    _page = await browser.newPage();
    return _page;
}

export async function getCorgiScreenshot(id: string, type: FileType, width: number = 2048, isDev: boolean) {
    const page = await getPage(isDev);
    await page.setViewport({ width, height: width });
    await page.goto(`https://cryptocorgis.co/render/${id}?width=${width}`);
    const file = await page.screenshot({ type, });
    return file;
}