export async function loadPage(page) {
    await page.goto('http://zero.webappsecurity.com/index.html')
}

export async function closePage(page) {
    await page.close()
}

export async function clickOnFeedbackPage(page) {
    await page.click('#feedback')
}

export async function clickOnOnlineBanking(page) {
    await page.click('#onlineBankingMenu')
}

export async function loginPage(page) {
    await page.click('#signin_button')
    await page.type('#user_login','username')
    await page.type('#user_password','password')
    await page.check('#user_remember_me')
    await page.click('input[type="submit"]')
    await page.goto('http://zero.webappsecurity.com/online-banking.html')
}