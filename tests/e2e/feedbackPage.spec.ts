import { test } from '@playwright/test'
import { loadPage,closePage,clickOnFeedbackPage } from '../../helpers/helper'
import { submitFeedback,verifyTheMessage } from '../../helpers/feedbackHelper' 
var feedbackData = require('../../data/feedback.json')

test.describe('Send the feedback',()=>{
    test.beforeEach(async({page})=>{
        await loadPage(page)
        await clickOnFeedbackPage(page)
    })

    test('Submit the feedback',async({page})=>{
        await submitFeedback(page,feedbackData.name,feedbackData.email,feedbackData.subject,feedbackData.comment)
        await verifyTheMessage(page,feedbackData.name)
    })

    test.afterEach(async({page})=>{
        await closePage(page)
    })
})