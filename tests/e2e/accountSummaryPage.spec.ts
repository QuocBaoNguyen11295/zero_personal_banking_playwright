import test from "@playwright/test";
import { clickOnOnlineBanking, closePage, loadPage, loginPage } from "../../helpers/helper";
import { clickOnAccountSummary } from "../../helpers/onlineBankingHelper";
import { verifySummaryPageShouldBeDisplayed } from "../../helpers/onlineBankingHelpers/accountSummaryHelper";

test.describe('Account summary',()=>{
    test.beforeEach(async({page})=>{
        await loadPage(page)
        await loginPage(page)
        await clickOnOnlineBanking(page)
        await clickOnAccountSummary(page)
    })

    test('Verify account summary page is displayed',async({page})=>{
        await verifySummaryPageShouldBeDisplayed(page)
    })

    test.afterEach(async({page})=>{
        await closePage(page)
    })
})