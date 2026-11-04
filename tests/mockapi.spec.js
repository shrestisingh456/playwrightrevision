
// Request API intercept /mock


const { test, expect, request } = require("@playwright/test")

const payloads = { userEmail: "shrestisingh456@gmail.com", userPassword: "Letmein1!" }
const details = { _id: "6960eac0c941646b7a8b3e68", productName: "ZARA COAT 3", productCategory: "electronics", productAddedBy: "admin", productCategory: "electronics", productDescription: "Apple phone", productFor: "women", productImage: "https://rahulshettyacademy.com/api/ecom/uploads/productImage_1767959232316.jpeg", productName: "ZARA COAT 3", productPrice: 11500, productRating: "0", productStatus: true, productSubCategory: "mobiles", productTotalOrders: "0", __v: 0, _id: "6960eac0c941646b7a8b3e68", message: "Product Details fetched Successfully" }
const message = "Product Details fetched Successfully"
const orderlist = { orders: [{ country: "India", productOrderedId: "6960eac0c941646b7a8b3e68" }] }
const fakepayload = { data: [], message: "No Orders" }
let tokenvalue
let orderid


test("apilogin", async ({ }) => {
    const browser = await request.newContext()
    const response = await browser.post("https://rahulshettyacademy.com/api/ecom/auth/login",
        {
            data: payloads
        }
    )

    expect(response.ok()).toBeTruthy()
    const Jsonresponse = await response.json()
    tokenvalue = Jsonresponse.token
    console.log(tokenvalue)

    const viewdetails = await browser.get("https://rahulshettyacademy.com/api/ecom/product/get-product-detail/6960eac0c941646b7a8b3e68",
        {
            data: details,
            headers:
            {
                'authorization': tokenvalue
            }
        })

    console.log(viewdetails.status())
    const Jsons = await viewdetails.json()
    const toast = Jsons.message
    console.log(toast)
    await expect(toast).toEqual(message)

    const orderdetails = await browser.post("https://rahulshettyacademy.com/api/ecom/order/create-order",
        {
            data: orderlist,
            headers:
            {
                'authorization': tokenvalue,
                'content-type': 'application/json; charset=utf-8'

            }
        }
    )

    expect(orderdetails.ok()).toBeTruthy();
    console.log(await orderdetails.status())
    const createdOrder = await orderdetails.json();
    orderid = createdOrder.orders[0];
    console.log(createdOrder)
    console.log(createdOrder.orders)
    console.log(createdOrder.message)


})


test(" dynamic execution", async ({ page }) => {
    await page.addInitScript(value => {
        window.localStorage.setItem('token', value)
    }, tokenvalue)

    await page.goto("https://rahulshettyacademy.com/client/")
    await page.locator(".btn.btn-custom").nth(2).click()
    await page.route("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*",
        async route => {
            const response = await page.request.fetch(route.request())
            let body = JSON.stringify(fakepayload)

            route.fulfill(
                {
                    response,
                    body,
                }
            )

        }

    )
    await page.locator(".btn.btn-custom").nth(1).click()
    await page.waitForResponse("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*")
    console.log(await page.locator(".mt-4.ng-star-inserted").textContent())
})