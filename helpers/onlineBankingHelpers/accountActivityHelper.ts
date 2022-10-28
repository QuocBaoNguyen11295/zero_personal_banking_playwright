import { expect } from "@playwright/test"

export async function clickOnShowTransaction(page) {
    await page.click('#tabs > ul > li:nth-child(1)')
}

export async function verifyDataInTransaction(page) {
    await page.selectOption('#aa_accountId','2')
    await page.waitForSelector('#all_transactions_for_account > table > tbody > tr')
    const list_element = await page.$$('#all_transactions_for_account > table > tbody > tr')
    expect(list_element.length).toEqual(3)
}

export async function clickOnFindTransaction(page) {
    await page.click('#tabs > ul > li:nth-child(2)')
}

export async function verifyDataInFindTransaction(page) {
    await page.type('#aa_description','ONLINE TRANSFER REF #UKKSDRQG6L')
    await page.type('#aa_fromDate','2012-09-01')
    await page.type('#aa_toDate','2012-09-10')
    await page.type('#aa_fromAmount','1')
    await page.type('#aa_toAmount','1000')
    await page.selectOption('#aa_type','DEPOSIT')
    await page.click('button[type="submit"]')
    await page.locator('#filtered_transactions_for_account > table').isVisible()
    const elements = await page.$$('#filtered_transactions_for_account > table > tbody > tr')
    for(var i=1;i <= elements.length;i++){
        await expect(page.locator('#filtered_transactions_for_account > table > tbody > tr:nth-child('+i+') > td:nth-child(2)')).toContainText('ONLINE TRANSFER REF #UKKSDRQG6L')
    }
}