const {test ,expect,request}=require("@playwright/test")

const payloads = {userEmail:"shrestisingh456@gmail.com",userPassword:"Letmein1!"}
let tokenvalue

test.beforeAll("apilogin",async({})=>
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
await page.locator(".card-body").first().waitFor()
  const totalcount=await (list).count()
      for (let i=0;i<totalcount;i++)
      {
        if(await list.nth(i).locator("b").textContent()===listname)
        {
           await list.nth(i).getByText(" Add To Cart").click()
           break
        }
      }

      await page.locator (".btn.btn-custom").nth(2).click()

      await expect (page.locator ("[href*='job']")).toHaveAttribute("class","blinkingText")
      const print =await page.locator ("a").nth(1).textContent()
      console.log (print)
      await page.getByText("Checkout").click()
      
     await page.locator (".field input").nth(2).fill("shresti singh")
     await page.locator (".field input").nth(1).fill("123")
     //await page.locator("[name='coupon']").fill("rahulshettyacademy")
    await page.locator ("[type='submit']").click()

     await page.locator('[placeholder="Select Country"]').pressSequentially("ind")
      //await page.waitForTimeout (5000)

    const dropdown = page.locator(".ta-results")
     await dropdown.waitFor()
     const values= await dropdown.locator(".ta-item").count()
        
      for ( let i=0;i< values;i++)
      {
        const result= await dropdown.locator(".ta-item").nth(i).textContent()
        if(result===" India")
        {
            await dropdown.locator(".ta-item").nth(i).click()
            break
        }
      }
    await page.locator(".btnn.action__submit.ng-star-inserted").click()
    const line=  await page.locator(".hero-primary").textContent()
    console.log(line)
   const text=await line.split("for")
   console.log(text[0])
   const orderid=await page.locator(".em-spacer-1 .ng-star-inserted").textContent()
    console.log(orderid)
    await expect (orderid).toBeTruthy()
    await page.locator(".btn.btn-custom").nth(1).click()
    await page.waitForTimeout(5000)


    const orderno=page.locator("tbody tr");
     const row= await orderno.count()

     for (let i=0;i<row;i++)
     {
      const details= await orderno.nth(i).locator("th").textContent()
      if (orderid.includes(details))
      {
        await orderno.nth(i).locator("button").first().click()
        break;
      }
     }
       await page.waitForTimeout(5000)
        await page.locator(".email-wrapper").waitFor()

     const summary=await page.locator(".tagline").textContent()
     console.log(summary)
     const ordercard=await  page.locator(".col-text.-main").textContent()

      await expect(orderid.includes(ordercard)).toBeTruthy()

    //  const [newPage]= await Promise.all([
    //  context.waitForEvent("page"),
    //   link.click()
    //  ])

    // const newtitle=await newPage.locator("h1").textContent()
    // console.log(newtitle)

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












