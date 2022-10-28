export async function submitTransferFund(page,from_account:string,to_account:string,amount:string,description:string) {
    await page.selectOption('#tf_fromAccountId',{label: from_account})
    await page.selectOption('#tf_toAccountId',{label: to_account})
    await page.type('#tf_amount',amount)
    await page.type('#tf_description',description)
    await page.click('#btn_submit')
}