import test from '@playwright/test'
import {loadPage,loginPage,closePage,clickOnOnlineBanking} from '../../helpers/helper'
import {clickOnPayBills} from '../../helpers/onlineBankingHelper'
import {clickOnAddNewPayee} from '../../helpers/payBillsHelpers/payBillsHelper'
import {addNewPayeeSuccessfully} from '../../helpers/payBillsHelpers/addNewPayeeHelper'
var addNewPayeeData = require('../../data/addNewPayee.json')
test.describe.parallel('Add new payee',()=>{
    test.beforeEach(async({page})=>{
        await loadPage(page)
        await loginPage(page)
        await clickOnOnlineBanking(page)
    })

    test('Add new payee successfully',async({page})=>{
        await clickOnPayBills(page)
        await clickOnAddNewPayee(page)
        await addNewPayeeSuccessfully(page,addNewPayeeData.payee_name,addNewPayeeData.payee_address,addNewPayeeData.payee_account,addNewPayeeData.payee_details)
    })

    test.afterEach(async({page})=>{
        await closePage(page)
    })
})