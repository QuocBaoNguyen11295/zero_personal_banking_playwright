import { expect } from "@playwright/test"

export async function purchaseForeignCurrency(page,currency:string,amount:number,currency_convert:string,amount_convert:string) {
    await page.selectOption('#pc_currency',{label: currency})
    await page.type('#pc_amount',amount.toString())
    await expect(page.locator('#sp_sell_rate')).toContainText(currency_convert)
    await page.click('#pc_inDollars_true')
    await page.click('#pc_calculate_costs')
    await page.waitForSelector('#pc_conversion_amount')
    await expect(page.locator('#pc_conversion_amount')).toContainText(amount_convert)
    await page.click('#purchase_cash')
    await page.waitForSelector('#alert_content')
    await expect(page.locator('#alert_content')).toContainText('Foreign currency cash was successfully purchased.')
}