const { test, expect, request } = require("@playwright/test")
const { APITEST } = require("./Utils/APITEST")

const payloads = { userEmail: "shrestisingh456@gmail.com", userPassword: "Letmein1!" }
const cartdetails = { _id: "6960eac0c941646b7a8b3e68", productName: "ZARA COAT 3", productCategory: "electronics", productAddedBy: "admin", productCategory: "electronics", productDescription: "Apple phone", productFor: "women", productImage: "https://rahulshettyacademy.com/api/ecom/uploads/productImage_1767959232316.jpeg", productName: "ZARA COAT 3", productPrice: 11500, productRating: "0", productStatus: true, productSubCategory: "mobiles", productTotalOrders: "0", __v: 0, _id: "6960eac0c941646b7a8b3e68", message: "Product Details fetched Successfully" }
const message = { "message": "Product Removed from cart" }
const ordercreate = { orders: [{ country: "India", productOrderedId: "6960eac0c941646b7a8b3e68" }] }
let response

test("apilogin", async ({ }) => {
  const browser = await request.newContext()
  let refractingapi = new APITEST(browser, payloads)

  const info = await refractingapi.details(cartdetails)
  response = await refractingapi.detailorder(ordercreate)

  const deletion = await refractingapi.cartdelete(response.tokenvalue)
  await expect(deletion).toEqual(message)
})

test(" dynamic execution", async ({ page }) => {
  await page.addInitScript(value => {
    window.localStorage.setItem('token', value)
  }, response.tokenvalue)

  await page.goto("https://rahulshettyacademy.com/client/")
  await page.locator(".btn.btn-custom").nth(2).click()
  await page.locator(".btn.btn-custom").nth(1).click()
  await page.waitForTimeout(5000)
  await page.locator("tbody").waitFor()
  
  const orderno = page.locator("tbody tr");
  const row = await orderno.count()

  for (let i = 0; i < row; i++) {
    const details = await orderno.nth(i).locator("th").textContent()
    if (details && response.orderid && details.includes(response.orderid)) {
      await orderno.nth(i).locator("button").first().click()
      break;
    }
  }

  await expect(page.locator(".tagline")).toBeVisible({ timeout: 30000 });
  const summary = await page.locator(".tagline").textContent()
  console.log(summary)
})