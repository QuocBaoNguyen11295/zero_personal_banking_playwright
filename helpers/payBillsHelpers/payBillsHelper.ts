export async function clickOnPaySavedPayee(page) {
    await page.click('#tabs > ul > li:nth-child(1)')
}

export async function clickOnAddNewPayee(page) {
    await page.click('#tabs > ul > li:nth-child(2)')
}

export async function clickOnPurchaseForeignCurrency(page) {
    await page.click('#tabs > ul > li:nth-child(3)')
}