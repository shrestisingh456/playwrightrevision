class APITEST 
{

    constructor(browser,payloads )
    {
      this.browser=browser
      this.payloads=payloads
    }
    
    async gettoken()
    {
        const response=await this.browser.post("https://rahulshettyacademy.com/api/ecom/auth/login",
           {
            data:this.payloads
           } 
         )
    
         //expect (response.ok()).toBeTruthy()
         const Jsonresponse = await response.json()
         const tokenvalue= Jsonresponse.token
         console.log(tokenvalue)
         return tokenvalue
    }

    async details (cartdetails)
    {
        const viewdetails=await this.browser.get("https://rahulshettyacademy.com/api/ecom/product/get-product-detail/6960eac0c941646b7a8b3e68",
      {
        data:cartdetails,
        headers :
        {
          'authorization' : await this.gettoken()

        }
     })

   console.log(viewdetails.status())
    const Jsons = await viewdetails.json()
     const toast =Jsons.message
     console.log(toast)
     return toast
    }

    async detailorder (ordercreate)
    {
        let response={}
        response.tokenvalue=await this.gettoken()
        const orderdetails =await this.browser.post("https://rahulshettyacademy.com/api/ecom/order/create-order",
              {
                data: ordercreate,
                headers:
                {
                  'authorization': response.tokenvalue,
                  'content-type': 'application/json; charset=utf-8'
        
                }
              }
             )
        
             //expect(orderdetails.ok()).toBeTruthy();
             console.log(await orderdetails.status())
             const createdOrder = await orderdetails.json();
            const  orderid = createdOrder.orders[0];
             
             console.log(createdOrder)
             console.log(createdOrder.orders)
             console.log(createdOrder.message)
             response.orderid=orderid
             return response
        
    }
    async cartdelete (tokenvalue)
    {
        const deletecart=await this.browser.delete("https://rahulshettyacademy.com/api/ecom/user/remove-from-cart/6a1d617c17ee3e78baaef95f/6960eae1c941646b7a8b3ed3",
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
          //await expect (deletecartjson.message).toEqual("Product Removed from cart")
          return deletecartjson
        }
    }

    module.exports={APITEST}
    
