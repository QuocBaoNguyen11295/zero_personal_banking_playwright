import { expect } from "@playwright/test";

export async function verifySummaryPageShouldBeDisplayed(page) {
    let listHeader2 = ['Cash Accounts','Investment Accounts','Credit Accounts','Loan Accounts']
    for(let i = 1;i < listHeader2.length + 1;i++)
    {
        await expect(page.locator('h2:nth-child('+(2*i-1)+')')).toContainText(listHeader2[i-1])
    }
}