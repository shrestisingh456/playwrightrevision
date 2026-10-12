const { test, expect } = require("@playwright/test")

test("Framesscenario", async ({ page }) => {

    await page.goto("https://rahulshettyacademy.com/AutomationPractice/")
    await page.goto("https://www.google.com/")
    await page.goBack()
    await expect(page.locator("[name='show-hide']")).toBeVisible()
    await page.locator("#hide-textbox").click()
    await expect(page.locator("[name='show-hide']")).toBeHidden()
    await page.locator("#hide-textbox").hover()

    await page.locator("#alertbtn").click()
    page.on("dialog", dialog => dialog.accept())


    const results = page.frameLocator("#courses-iframe")
    await results.locator(" a[href*='lifetime-access']:visible").click()

    const frames = await results.locator(" .text h2").textContent()
    console.log(frames.split("")[1])

})

