import {expect, test} from '@playwright/test'

export async function verifyTransferFundSuccessfully(page,from_account:string,to_account:string,amount:string) {
    await expect(page.locator('.alert-success')).toContainText('You successfully submitted your transaction.')
    await expect(page.locator('.row:nth-child(1) > .span3')).toContainText(from_account)
    await expect(page.locator('.row:nth-child(2) > .span3')).toContainText(to_account)
    await expect(page.locator('.row:nth-child(3) > .span3')).toContainText('$ '+amount)
}