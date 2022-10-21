import { loadPage,closePage,loginSuccessfully, loginUnsuccesfully } from "../../helpers/helper";
import {test} from '@playwright/test'

test.describe('Login feature',()=>{
    test.beforeEach(async({page})=>{
        await loadPage(page)
    })

    test('Login successfully',async({page})=>{
        await loginSuccessfully(page)
    })

    test('login unsuccessfully',async({page})=>{
        await loginUnsuccesfully(page)
    })

    test.afterEach(async({page})=>{
        await closePage(page)
    })
})