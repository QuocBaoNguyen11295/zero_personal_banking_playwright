import test from "@playwright/test";
import {loadPage,loginPage,closePage,clickOnOnlineBanking} from '../../helpers/helper'
import {clickOnPayBills} from '../../helpers/onlineBankingHelper'
import {clickOnPaySavedPayee} from '../../helpers/payBillsHelpers/payBillsHelper' 
import {paySuccessfullyForPaySavedPayee} from '../../helpers/payBillsHelpers/paySavedPayeeHelper'
test.describe('Pay for Saved Payee',()=>{
    test.beforeEach(async({page})=>{
        await loadPage(page)
        await loginPage(page)
        await clickOnOnlineBanking(page)
        await clickOnPayBills(page)
        await clickOnPaySavedPayee(page)
    })

    test('Pay saved payee successfully',async({page})=>{
        await paySuccessfullyForPaySavedPayee(page,"Bank of America","Loan",200,"2013-01-01","test")
    })

    test.afterEach(async({page})=>{
        await closePage(page)
    })
})