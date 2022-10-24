import test, { expect } from "@playwright/test"

export async function clickOnShowTransaction(page) {
    await page.click('#tabs > ul > li:nth-child(1)')
}

export async function verifyDataInTransaction(page) {
    await page.selectOption('#aa_accountId','2')
    await page.waitForSelector('#all_transactions_for_account > table > tbody > tr')
    const list_element = await page.$$('#all_transactions_for_account > table > tbody > tr')
    expect(list_element.length).toEqual(3)
}