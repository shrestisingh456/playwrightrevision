
const { test, expect } = require("@playwright/test")

test("scenario 1", async ({ browser }) => {

    const context = await browser.newContext()
    const page = await context.newPage()

    const newlink = page.locator("[href*='documents-request']")

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
    console.log(await page.title())

    await expect(page).toHaveTitle(/LoginPage Practise/)

    await page.locator("input#username").fill("rahulshettyyyacademy")
    await page.locator("[name='password']").fill("Learning@830$3mK2")
    await page.locator(".checkmark").nth(1).click()
    await page.locator("#okayBtn").click()
    await page.locator("[ data-style*='info']").selectOption("Teacher")
    await page.locator("[name='terms']").click()
    console.log(await page.locator("[name='terms']").isChecked())
    await expect(page.locator("[name='terms']")).toBeChecked()
    await page.locator("[name='terms']").uncheck()
    //await expect (page.locator("[name='terms']")).toBeChecked()
    await expect(newlink).toHaveAttribute("class", "blinkingText")
    //console.log(await page.locator ("[href*='documents-request']").textContent())
    console.log(await newlink.textContent())
    const [newPage] = await Promise.all(
        [
            context.waitForEvent("page"),
            newlink.click()

        ]
    )
    const newpage2 = await newPage.locator("h1").textContent()
    const array = await newpage2.split(" ")
    console.log(array[1])
    await page.locator(".btn.btn-info.btn-md").click()
    console.log(await page.locator("[ style*='block']").textContent())
    await expect(page.locator("[ style*='block']")).toContainText(/Incorrect/)
    await page.locator("input#username").fill("")
    await page.locator("input#username").fill("rahulshettyacademy")
    await page.locator(".btn.btn-info.btn-md").click()
    await page.locator("h4 a").first().waitFor();
    console.log(await page.locator("h4 a").allTextContents())
    console.log(await page.locator("h4 a").nth(3).textContent())
    await page.locator("h4 a").nth(3).click()
    console.log(await page.locator(".jumbotron h1").textContent())
    await expect(page.locator(".jumbotron h1")).toContainText(/Tutorial/)
    console.log("test completed")

})