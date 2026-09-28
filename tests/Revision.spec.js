
const {test,expect} =require("@playwright/test")

test ("scenario 1",async({browser})=>
{

    const context =  await browser.newContext()
   const page =await context.newPage()

   await page.goto("https://rahulshettyacademy.com/loginpagePractise/") 
   console.log (await page.title())

   await expect(page).toHaveTitle(/LoginPage Practise/)

   await page.locator("input#username").fill("rahulshettyyyacademy")
   await page.locator("[name='password']").fill("Learning@830$3mK2")
   await page.locator(".checkmark").nth(1).click()
   await page.locator("#okayBtn").click()
   await page.locator ("[ data-style*='info']").selectOption("Teacher")
   await page.locator("[name='terms']").click()
   console.log (await page.locator("[name='terms']").isChecked())
   await expect (page.locator("[name='terms']")).toBeChecked()
   await page.locator("[name='terms']").uncheck()
   //await expect (page.locator("[name='terms']")).toBeChecked()
   await expect (page.locator("[href*='documents-request']")).toHaveAttribute("class","blinkingText")
   console.log(await page.locator ("[href*='documents-request']").textContent())
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
   await expect ( page.locator(".jumbotron h1")).toContainText(/Tutorial/)
   console.log ("test completed")

})