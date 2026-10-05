
const { test , expect }=require("@playwright/test")

 test(" dynamic execution",async ({browser})=>
{
  const context = await browser.newContext()
  const page = await context.newPage()

  const link= await page.locator("[href*='job-ready']")
  const list =  page.locator(".card-body")
  const listname ="iphone 13 pro"

  await page.goto("https://rahulshettyacademy.com/client/#/auth/login")
  await page.locator("#userEmail").fill("shrestisingh456@gmail.com")
  await page.locator("[ type ='password']").fill("Letmein1!")
  await page.locator("#login").click()
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


    const orderno=page.locator("tbody tr")
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

     const [newPage]= await Promise.all([
     context.waitForEvent("page"),
      link.click()
     ])

    const newtitle=await newPage.locator("h1").textContent()
    console.log(newtitle)

      




      })
    


    
