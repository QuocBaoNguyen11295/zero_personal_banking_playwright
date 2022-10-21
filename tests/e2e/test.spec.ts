import {test,expect} from '@playwright/test'

test.describe('test',()=>{
    test('test',async({page})=>{
        await page.goto('https://example.com/')
        await expect(page.locator('h1')).toContainText('Example Domain')
    })
})