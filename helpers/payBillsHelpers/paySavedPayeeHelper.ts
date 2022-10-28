import { expect } from "@playwright/test"

export async function paySuccessfullyForPaySavedPayee(page,payee:string,account:string,amount:number,date:string,description:string) {
    await page.selectOption('#sp_payee',{label: payee})
    await page.selectOption('#sp_account',{label: account})
    await page.type('#sp_amount',amount.toString())
    await page.type('#sp_date','2012-01-01')
    await page.keyboard.press('Tab')
    await page.type('#sp_description','Text')
    await page.click('#pay_saved_payees')
    await page.waitForSelector('#alert_content')
    await expect(page.locator('#alert_content > span')).toContainText('The payment was successfully submitted.')
}