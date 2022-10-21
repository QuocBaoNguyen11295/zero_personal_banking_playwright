import { expect } from "@playwright/test";

export async function loadPage(page) {
    await page.goto('http://zero.webappsecurity.com/index.html')
}

export async function loginSuccessfully(page) {
    await page.click('#signin_button')
    await page.type('#user_login','username')
    await page.type('#user_password','password')
    await page.check('#user_remember_me')
    await page.click('input[type="submit"]')
    await page.goto('http://zero.webappsecurity.com/index.html')
    await expect(page.locator('#settingsBox > ul > li:nth-child(3) > a')).toContainText('username')
}

export async function loginUnsuccesfully(page) {
    await page.click('#signin_button')
    await page.type('#user_login','username1')
    await page.type('#user_password','password1')
    await page.check('#user_remember_me')
    await page.click('input[type="submit"]')
    await expect(page.locator('.alert-error')).toBeVisible()
    await expect(page.locator('.alert-error')).toContainText('Login and/or password are wrong.')
}

export async function closePage(page) {
    await page.close()
}