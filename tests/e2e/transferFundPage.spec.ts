import {test} from '@playwright/test'
import {loadPage,loginPage,closePage,clickOnOnlineBanking} from '../../helpers/helper'
import {clickOnTransferFund} from '../../helpers/onlineBankingHelper'
import {submitTransferFund} from '../../helpers/onlineBankingHelpers/transferFundHelpers/transferFundHelper'
import {clickOnSubmitTransferFund} from '../../helpers/onlineBankingHelpers/transferFundHelpers/verifyTransferFundHelper'
import {verifyTransferFundSuccessfully} from '../../helpers/onlineBankingHelpers/transferFundHelpers/transferFundSuccessfullyHelper'
var transferFundData = require('../../data/transferFund.json')

test.describe.parallel('Transfer fund',()=>{
    test.beforeEach(async({page})=>{
        await loadPage(page)
        await loginPage(page)
        await clickOnOnlineBanking(page)
        await clickOnTransferFund(page)
    })

    test('Transfer fund successfully',async({page})=>{
        await submitTransferFund(page,transferFundData.from_account,transferFundData.to_account,transferFundData.amount,transferFundData.description)
        await clickOnSubmitTransferFund(page,transferFundData.from_account_verify,transferFundData.to_account_verify,transferFundData.amount,transferFundData.description)
        await verifyTransferFundSuccessfully(page,transferFundData.from_account_verify,transferFundData.to_account_verify,transferFundData.amount)
    })

    test.afterEach(async({page})=>{
        await closePage(page)
    })
})