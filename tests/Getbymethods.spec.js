

const { test,expect}=require("@playwright/test")

test ("getmethod",async({browser})=>

{
   
 const context=await browser.newContext()

 const page=await context.newPage()

 

 await page.goto("https://rahulshettyacademy.com/angularpractice/")
 await page.locator(".form-control.ng-untouched.ng-pristine.ng-invalid").first().fill("shresti singh")
 await page.locator(".form-control.ng-untouched.ng-pristine.ng-invalid").last().fill("shrestisingh456@gmail.com")
 await page.getByPlaceholder("Password").fill("Letmein1!")
 await page.getByLabel("Check me out if you Love IceCreams!").click()
 await page.getByLabel("Gender").selectOption("Female")
 await page.locator(".form-check-label").nth(2).click()
 await page.getByRole("button",{ name : "Submit"}).click()
 console.log (await page.locator(".alert.alert-success.alert-dismissible").textContent())
 await page.locator(".alert.alert-success.alert-dismissible").first().waitFor()
  await expect (page.getByText("The Form has been submitted successfully!.")).toContainText(/submitted/)
  await expect (page.getByText("The Form has been submitted successfully!.")).toHaveText("× Success! The Form has been submitted successfully!.")
  await page.getByRole("link",{name : "Shop"}).click()

  await page.locator(".col-lg-3.col-md-6.mb-3").filter({hasText :"Blackberry"}).getByRole("button",{name : "Add"}).click()
  
  await page.locator(".nav-link.btn.btn-primary").click()
  await page.getByRole("button",{ name : "Checkout"}).click()
  await page.locator("#country").fill("12345")
   await page.getByRole("button","Purchase").click()
  const msg =await page.locator(".alert.alert-success.alert-dismissible").textContent()
  console.log(msg)
  await expect ( page.locator(".alert.alert-success.alert-dismissible")).toHaveText(msg)




})


