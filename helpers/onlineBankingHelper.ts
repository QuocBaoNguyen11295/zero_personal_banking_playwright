export async function clickOnAccountSummary(page) {
    await page.click('#account_summary_link')
}

export async function clickOnAccountActivity(page) {
    await page.click('#account_activity_link')
}

export async function clickOnTransferFund(page) {
    await page.click('#transfer_funds_link')
}

export async function clickOnPayBills(page) {
    await page.click('#pay_bills_link')
}