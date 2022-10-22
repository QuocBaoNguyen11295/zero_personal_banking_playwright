import {expect} from '@playwright/test'

export async function submitFeedback(page,name,email,subject,comment) {
    await page.type('#name',name)
    await page.type('#email',email)
    await page.type('#subject',subject)
    await page.type('#comment',comment)
    await page.click('input[type="submit"]')
}

export async function verifyTheMessage(page,name) {
    await expect(page.locator('.container > .top_offset > div > .offset3')).toContainText('\n        \n            Feedback\n        \n\n            Thank you for your comments, '+name+'.\n            They will be reviewed by our Customer Service staff and given the full attention that they deserve.\n    ')
}