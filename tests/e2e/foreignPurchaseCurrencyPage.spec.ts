import test from '@playwright/test'
import {loadPage,loginPage,closePage,clickOnOnlineBanking} from '../../helpers/helper'
import {clickOnPayBills} from '../../helpers/onlineBankingHelper'
import {clickOnPurchaseForeignCurrency} from '../../helpers/payBillsHelpers/payBillsHelper'
import {purchaseForeignCurrency} from '../../helpers/payBillsHelpers/foreignPurchaseCurrencyHelper'
var purchaseForeignCurrencyData = require('../../data/foreignPurchaseCurrency.json')
test.describe.parallel('Purchase foreign currency',()=>{
    test.beforeEach(async({page})=>{
        await loadPage(page)
        await loginPage(page)
        await clickOnOnlineBanking(page)
        await clickOnPayBills(page)
    })

    test('Purchase foreign currency successfully',async({page})=>{
        await clickOnPurchaseForeignCurrency(page)
        await purchaseForeignCurrency(page,purchaseForeignCurrencyData.currency,purchaseForeignCurrencyData.amount,purchaseForeignCurrencyData.currency_convert,purchaseForeignCurrencyData.amount_convert)
    })

    test.afterEach(async({page})=>{
        await closePage(page)
    })
})