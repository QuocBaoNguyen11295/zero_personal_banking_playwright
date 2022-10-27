import {expect, test} from '@playwright/test'

export async function clickOnSubmitTransferFund(page,from_account:string,to_account:string,amount:string,description:string) {
    await expect(page.locator('#tf_fromAccountId')).toBeDisabled()
    await expect(page.locator('#tf_fromAccountId')).toHaveValue(from_account)
    await expect(page.locator('#tf_toAccountId')).toBeDisabled()
    await expect(page.locator('#tf_toAccountId')).toHaveValue(to_account)
    await expect(page.locator('#tf_amount')).toBeDisabled()
    await expect(page.locator('#tf_amount')).toHaveValue(amount)
    await expect(page.locator('#tf_description')).toBeDisabled()
    await expect(page.locator('#tf_description')).toHaveValue(description)
    await page.click('#btn_submit')
}