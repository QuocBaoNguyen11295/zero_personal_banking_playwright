import { expect } from "@playwright/test"

export async function addNewPayeeSuccessfully(page,payee_name:string,payee_address:string,payee_account:string,payee_details:string) {
    await page.type('#np_new_payee_name',payee_name)
    await page.type('#np_new_payee_address',payee_address)
    await page.type('#np_new_payee_account',payee_account)
    await page.type('#np_new_payee_details',payee_details)
    await page.click('#add_new_payee')
    await expect(page.locator('#alert_content')).toBeVisible()
    await expect(page.locator('#alert_content')).toContainText('The new payee '+payee_name+' was successfully created.')
}