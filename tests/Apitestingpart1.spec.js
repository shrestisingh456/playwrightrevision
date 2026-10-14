const {test ,expect,request}=require("@playwright/test")

const payloads = {userEmail:"shrestisingh456@gmail.com",userPassword:"Letmein1!"}
const details = {_id: "6960eac0c941646b7a8b3e68", productName: "ZARA COAT 3", productCategory: "electronics",productAddedBy :"admin",productCategory:"electronics",productDescription:"Apple phone",productFor:"women",productImage: "https://rahulshettyacademy.com/api/ecom/uploads/productImage_1767959232316.jpeg",productName: "ZARA COAT 3",productPrice:11500,productRating:"0",productStatus: true,productSubCategory: "mobiles",productTotalOrders: "0",__v: 0,_id: "6960eac0c941646b7a8b3e68",message: "Product Details fetched Successfully"}
const message = "Product Details fetched Successfully"
const orderlist = {orders:[{country:"India",productOrderedId:"6960eac0c941646b7a8b3e68"}]}
let orderid
let tokenvalue
test("apilogin",async({})=>
{
 
   const browser = await request.newContext()
     const response=await browser.post("https://rahulshettyacademy.com/api/ecom/auth/login",
       {
        data:payloads
       } 
     )

     expect (response.ok()).toBeTruthy()
     const Jsonresponse = await response.json()
     tokenvalue= Jsonresponse.token
     console.log(tokenvalue)

     const viewdetails=await browser.get("https://rahulshettyacademy.com/api/ecom/product/get-product-detail/6960eac0c941646b7a8b3e68",
      {
        data:details,
        headers :
        {
          'authorization' : tokenvalue

        }
     })

   console.log(viewdetails.status())
    const Jsons = await viewdetails.json()
     const toast =Jsons.message
     console.log(toast)
     
     await expect (toast).toEqual(message)


     const orderdetails =await browser.post("https://rahulshettyacademy.com/api/ecom/order/create-order",
      {
        data: orderlist,
        headers:
        {
          'authorization':tokenvalue,
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

     const deletecart=await browser.delete("https://rahulshettyacademy.com/api/ecom/user/remove-from-cart/6a1d617c17ee3e78baaef95f/6960eae1c941646b7a8b3ed3",
      {
        headers:
        {'authorization': tokenvalue ,
        'content-type': 'application/json; charset=utf-8'
}
        
    }
     )

  console.log(await deletecart.status())
  const deletecartjson = await deletecart.json()
  console.log(deletecartjson.message)
  await expect (deletecartjson.message).toEqual("Product Removed from cart")
})


 test(" dynamic execution",async ({page})=>
{
  await page.addInitScript(value=>
  {
    window.localStorage.setItem('token',value)
  },tokenvalue)
    
 const link= await page.locator("[href*='job-ready']")
  const list =  page.locator(".card-body")
  const listname ="iphone 13 pro"
  
await page.goto("https://rahulshettyacademy.com/client/")
await page.locator (".btn.btn-custom").nth(2).click()

await page.locator(".btn.btn-custom").nth(1).click()
await page.waitForTimeout(5000)
await page.locator("tbody").waitFor()

const orderno=page.locator("tbody tr");
     const row= await orderno.count()

     for (let i=0;i<row;i++)
     {
      const details= await orderno.nth(i).locator("th").textContent()
      if (details && orderid && details.includes(orderid))
      {
        await orderno.nth(i).locator("button").first().click()
        break;
      }
     }

    await expect(page.locator(".tagline")).toBeVisible({ timeout: 30000 });
    const summary=await page.locator(".tagline").textContent()
     console.log(summary)
     
    

})





// const{test,expect,request}=require("@playwright/test")
// const payload = {email:"shrestisingh456@gmail.com",password:"Letmein1!"}
// let tokens

// test.beforeAll("apitesting",async({})=>

// {

//   const newcontext =await request.newContext()
//      const apiresponse= await newcontext.post("https://api.eventhub.rahulshettyacademy.com/api/auth/login",
//         {
//           data:payload
//         }
//       )
    
//      await expect ( apiresponse.ok()).toBeTruthy()
//     const jsonbody= await apiresponse.json()
//       const result=jsonbody.success
//       console.log(result)
//        tokens=jsonbody.token
//       console.log(tokens)

// }

// )

// test("event",async({page})=>
// {

//   await page.addInitScript(value=>
//   {
//   window.localStorage.setItem("eventhub_token",value)
//   },tokens)

// await page.goto("https://eventhub.rahulshettyacademy.com/")

// await page.getByText("Book Now").nth(0).click()
// await page.getByPlaceholder("Your full name").fill("shresti")
// await page.getByPlaceholder("you@email.com").fill("shrestisingh456@gmail.com")
// await page.getByPlaceholder("+91 98765 43210").fill("8685704641")
// await page.getByRole("button",{name :'Confirm Booking'}).click()
// await page.getByRole("button" ,{name: 'View My Bookings'}).click()
// await expect (page).toHaveURL("https://eventhub.rahulshettyacademy.com/bookings")
// await page.getByRole("button",{name: "View Details"}).nth(0).click()
// })












