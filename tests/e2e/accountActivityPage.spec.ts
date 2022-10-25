import test from "@playwright/test";
import {loadPage,closePage,clickOnOnlineBanking,loginPage} from '../../helpers/helper'
import {clickOnShowTransaction,verifyDataInTransaction,clickOnFindTransaction,verifyDataInFindTransaction} from '../../helpers/onlineBankingHelpers/accountActivityHelper'
import {clickOnAccountActivity} from '../../helpers/onlineBankingHelper'
test.describe.parallel('Account Activity',()=>{
    test.beforeEach(async({page})=>{
        await loadPage(page)
        await loginPage(page)
        await clickOnOnlineBanking(page)
        await clickOnAccountActivity(page)
    })
    
    test('Verify data on Show Transaction',async({page})=>{
        await clickOnShowTransaction(page)
        await verifyDataInTransaction(page)
    })

    test('Verify data on Find Transaction',async({page})=>{
        await clickOnFindTransaction(page)
        await verifyDataInFindTransaction(page)
    })

    test.afterEach(async({page})=>{
        await closePage(page)
    })
})