//  ================
// || Webstore Bot ||
//  ================
//
// Description:
// 
// Webstore bot captures screenshots of all the standard sitemap stickershop webpages in a easy to review PDF. 
// Webstore bot helps me quickly scan the whole site in the 3 most popular views. (Full, iPad, iPhone)
// 
// 
// How to Use:
// 
// Setup:
// 
// 1. Make sure store is running on localhost:3000 with stencil start
// 2. Open New Terminal and navigate to ./webstoreBot/ Directory
//
//
// How to Run Webstore Bot:
// 
// 4. npm start .\webstoreBot.js    (Captures screenshots and saves them as .pngs in media folder)
// 5. node .\createPdf.js           (Create PDFs from pngs with page name labels and saves in media folder) 
// 
// New PDFs are saved in './webstoreBot/media/PDF
// 
//
// How to Quickly Clear All Pdfs and Images from media folder:
//
// 6. node .\clearDirectory.js
//

const puppeteer = require('puppeteer');

describe ("Webstore Screenshot Bot", (done) =>{
    let browser
    
    before(async function(){
        browser = await puppeteer.launch({
            headless : false, 
            product: 'chrome'
        })
        page = await browser.newPage()
    })

    //  Full
    //  width: 1650
    //  height: 1050
    
    it("(Laptop) Home, Apparel, Hats", async ()=>{
        await page.goto('http://localhost:3000/')
        await page.setViewport({width:1650, height:1050})
        await page.screenshot({path: './media/img/Full/home.png', fullPage: true});
        await page.goto('http://localhost:3000/apparel/')
        await page.setViewport({width:1650, height:1050})
        await page.screenshot({path: './media/img/Full/apparel.png', fullPage: true});
        await page.goto('http://localhost:3000/hats/')
        await page.setViewport({width:1650, height:1050})
        await page.screenshot({path: './media/img/Full/hats.png', fullPage: true});
      })
      it("(Laptop) Tees, Goods, Buttons", async ()=>{
        await page.goto('http://localhost:3000/tees/')
        await page.setViewport({width:1650, height:1050})
        await page.screenshot({path: './media/img/Full/tees.png', fullPage: true});
        await page.goto('http://localhost:3000/goods/')
        await page.setViewport({width:1650, height:1050})
        await page.screenshot({path: './media/img/Full/goods.png', fullPage: true});
        await page.goto('http://localhost:3000/buttons/')
        await page.setViewport({width:1650, height:1050})
        await page.screenshot({path: './media/img/Full/buttons.png', fullPage: true});
      })
      it("(Laptop) Mugs, Stickers, YardSigns", async ()=>{
        await page.goto('http://localhost:3000/mugs/')
        await page.setViewport({width:1650, height:1050})
        await page.screenshot({path: './media/img/Full/mugs.png', fullPage: true});
        await page.goto('http://localhost:3000/stickers/')
        await page.setViewport({width:1650, height:1050})
        await page.screenshot({path: './media/img/Full/stickers.png', fullPage: true});
        await page.goto('http://localhost:3000/yard-signs/')
        await page.setViewport({width:1650, height:1050})
        await page.screenshot({path: './media/img/Full/yardsigns.png', fullPage: true});
      })
      it("(Laptop) About Us, FAQ, Shipping Returns", async ()=>{
        await page.goto('http://localhost:3000/about-us/')
        await page.setViewport({width:1650, height:1050})
        await page.screenshot({path: './media/img/Full/aboutus.png', fullPage: true});
        await page.goto('http://localhost:3000/faq/')
        // TODO : screenshot cuts off bottom of the page
        await page.setViewport({width:1650, height:1050})
        await page.screenshot({path: './media/img/Full/faq.png', fullPage: true});
        await page.goto('http://localhost:3000/shipping-returns/')
        await page.setViewport({width:1650, height:1050})
        await page.screenshot({path: './media/img/Full/shippingreturns.png', fullPage: true});
      })
      it("(Laptop) Contact Us, Login, Create Account", async ()=>{
        await page.goto('http://localhost:3000/contact-us/')
        await page.setViewport({width:1650, height:1050})
        await page.screenshot({path: './media/img/Full/contactus.png', fullPage: true});
        await page.goto('http://localhost:3000/login.php')
        await page.setViewport({width:1650, height:1050})
        await page.screenshot({path: './media/img/Full/login.png', fullPage: true});
        // TODO : add action to click on the create account button and then take screenshot
        await page.goto('http://localhost:3000/login.php?action=create_account/')
        await page.setViewport({width:1650, height:1050})
        await page.screenshot({path: './media/img/Full/createaccount.png', fullPage: true});
      })
      it("(Laptop) Sample Tee, Site Map, Cart, Checkout", async ()=>{
        await page.goto('http://localhost:3000/sample-unisex-tee-navy/')
        await page.setViewport({width:1650, height:1050})
        await page.screenshot({path: './media/img/Full/teedetail.png', fullPage: true});
        await page.goto('http://localhost:3000/sitemap.php')
        await page.setViewport({width:1650, height:1050})
        await page.screenshot({path: './media/img/Full/sitemap.png', fullPage: true});
        await page.goto('http://localhost:3000/cart.php')
        await page.setViewport({width:1650, height:1050})
        // TODO : add action to add item to cart then go to this page and take a screenshot
        await page.screenshot({path: './media/img/Full/cart.png', fullPage: true});
        await page.goto('http://localhost:3000/checkout')
        await page.setViewport({width:1650, height:1050})
                // TODO : add action to add item to cart then go to this page and take a screenshot
        await page.screenshot({path: './media/img/Full/checkout.png', fullPage: true});
      })

    //  iPhone 5
    //  width: 320
    //  height: 568

      it("(iPhone 5) Home, Apparel, Hats", async ()=>{
        await page.goto('http://localhost:3000/')
        const mobile = puppeteer.devices['iPhone 5']
        await page.emulate(mobile)
        await page.screenshot({path: './media/img/Mobile/home.png', fullPage: true});
        await page.goto('http://localhost:3000/apparel/')
        await page.emulate(mobile)
        await page.screenshot({path: './media/img/Mobile/apparel.png', fullPage: true});
        await page.goto('http://localhost:3000/hats/')
        await page.emulate(mobile)
        await page.screenshot({path: './media/img/Mobile/hats.png', fullPage: true});
      })
      it("(iPhone 5) Tees, Goods, Buttons", async ()=>{
        await page.goto('http://localhost:3000/tees/')
        const mobile = puppeteer.devices['iPhone 5']
        await page.emulate(mobile)
        await page.screenshot({path: './media/img/Mobile/tees.png', fullPage: true});
        await page.goto('http://localhost:3000/goods/')
        await page.emulate(mobile)
        await page.screenshot({path: './media/img/Mobile/goods.png', fullPage: true});
        await page.goto('http://localhost:3000/buttons/')
        await page.emulate(mobile)
        await page.screenshot({path: './media/img/Mobile/buttons.png', fullPage: true});
      })
      it("(iPhone 5) Mugs, Stickers, YardSigns", async ()=>{
        await page.goto('http://localhost:3000/mugs/')
        const mobile = puppeteer.devices['iPhone 5']
        await page.emulate(mobile)
        await page.screenshot({path: './media/img/Mobile/mugs.png', fullPage: true});
        await page.goto('http://localhost:3000/stickers/')
        await page.emulate(mobile)
        await page.screenshot({path: './media/img/Mobile/stickers.png', fullPage: true});
        await page.goto('http://localhost:3000/yard-signs/')
        await page.emulate(mobile)
        await page.screenshot({path: './media/img/Mobile/yardsigns.png', fullPage: true});
      })
      it("(iPhone 5) About Us, FAQ, Shipping Returns", async ()=>{
        await page.goto('http://localhost:3000/about-us/')
        const mobile = puppeteer.devices['iPhone 5']
        await page.emulate(mobile)
        await page.screenshot({path: './media/img/Mobile/aboutus.png', fullPage: true});
        await page.goto('http://localhost:3000/faq/')
        await page.emulate(mobile)
        await page.screenshot({path: './media/img/Mobile/faq.png', fullPage: true});
        await page.goto('http://localhost:3000/shipping-returns/')
        await page.emulate(mobile)
        await page.screenshot({path: './media/img/Mobile/shippingreturns.png', fullPage: true});
      })
      it("(iPhone 5) Contact Us, Login, Create Account", async ()=>{
        await page.goto('http://localhost:3000/contact-us/')
        const mobile = puppeteer.devices['iPhone 5']
        await page.emulate(mobile)
        await page.screenshot({path: './media/img/Mobile/contactus.png', fullPage: true});
        await page.goto('http://localhost:3000/login.php')
        await page.emulate(mobile)
        await page.screenshot({path: './media/img/Mobile/login.png', fullPage: true});
        await page.goto('http://localhost:3000/login.php?action=create_account/')
        await page.emulate(mobile)
        await page.screenshot({path: './media/img/Mobile/createaccount.png', fullPage: true});
      })
      it("(iPhone 5) Sample Tee, Site Map, Cart, Checkout", async ()=>{
        await page.goto('http://localhost:3000/sample-unisex-tee-navy/')
        const mobile = puppeteer.devices['iPhone 5']
        await page.emulate(mobile)
        await page.screenshot({path: './media/img/Mobile/teedetail.png', fullPage: true});
        await page.goto('http://localhost:3000/sitemap.php')
        await page.emulate(mobile)
        await page.screenshot({path: './media/img/Mobile/sitemap.png', fullPage: true});
        await page.goto('http://localhost:3000/cart.php')
        await page.emulate(mobile)
        await page.screenshot({path: './media/img/Mobile/cart.png', fullPage: true});
        await page.goto('http://localhost:3000/checkout')
        await page.emulate(mobile)
        await page.screenshot({path: './media/img/Mobile/checkout.png', fullPage: true});
      })

    //  iPad
    //  width: 768
    //  height: 1024

       it("(iPad) Home, Apparel, Hats", async ()=>{
        await page.goto('http://localhost:3000/')
        const mobile = puppeteer.devices['iPad']
        await page.emulate(mobile)
        await page.screenshot({path: './media/img/iPad/home.png', fullPage: true});
        await page.goto('http://localhost:3000/apparel/')
        await page.emulate(mobile)
        await page.screenshot({path: './media/img/iPad/apparel.png', fullPage: true});
        await page.goto('http://localhost:3000/hats/')
        await page.emulate(mobile)
        await page.screenshot({path: './media/img/iPad/hats.png', fullPage: true});
      })
      it("(iPad) Tees, Goods, Buttons", async ()=>{
        await page.goto('http://localhost:3000/tees/')
        const mobile = puppeteer.devices['iPad']
        await page.emulate(mobile)
        await page.screenshot({path: './media/img/iPad/tees.png', fullPage: true});
        await page.goto('http://localhost:3000/goods/')
        await page.emulate(mobile)
        await page.screenshot({path: './media/img/iPad/goods.png', fullPage: true});
        await page.goto('http://localhost:3000/buttons/')
        await page.emulate(mobile)
        await page.screenshot({path: './media/img/iPad/buttons.png', fullPage: true});
      })
      it("(iPad) Mugs, Stickers, YardSigns", async ()=>{
        await page.goto('http://localhost:3000/mugs/')
        const mobile = puppeteer.devices['iPad']
        await page.emulate(mobile)
        await page.screenshot({path: './media/img/iPad/mugs.png', fullPage: true});
        await page.goto('http://localhost:3000/stickers/')
        await page.emulate(mobile)
        await page.screenshot({path: './media/img/iPad/stickers.png', fullPage: true});
        await page.goto('http://localhost:3000/yard-signs/')
        await page.emulate(mobile)
        await page.screenshot({path: './media/img/iPad/yardsigns.png', fullPage: true});
      })
      it("(iPad) About Us, FAQ, Shipping Returns", async ()=>{
        await page.goto('http://localhost:3000/about-us/')
        const mobile = puppeteer.devices['iPad']
        await page.emulate(mobile)
        await page.screenshot({path: './media/img/iPad/aboutus.png', fullPage: true});
        await page.goto('http://localhost:3000/faq/')
        await page.emulate(mobile)
        await page.screenshot({path: './media/img/iPad/faq.png', fullPage: true});
        await page.goto('http://localhost:3000/shipping-returns/')
        await page.emulate(mobile)
        await page.screenshot({path: './media/img/iPad/shippingreturns.png', fullPage: true});
      })
      it("(iPad) Contact Us, Login, Create Account", async ()=>{
        await page.goto('http://localhost:3000/contact-us/')
        const mobile = puppeteer.devices['iPad']
        await page.emulate(mobile)
        await page.screenshot({path: './media/img/iPad/contactus.png', fullPage: true});
        await page.goto('http://localhost:3000/login.php')
        await page.emulate(mobile)
        await page.screenshot({path: './media/img/iPad/login.png', fullPage: true});
        await page.goto('http://localhost:3000/login.php?action=create_account/')
        await page.emulate(mobile)
        await page.screenshot({path: './media/img/iPad/createaccount.png', fullPage: true});
      })
      it("(iPad) Sample Tee, Site Map, Cart, Checkout", async ()=>{
        await page.goto('http://localhost:3000/sample-unisex-tee-navy/')
        const mobile = puppeteer.devices['iPad']
        await page.emulate(mobile)
        await page.screenshot({path: './media/img/iPad/teedetail.png', fullPage: true});
        await page.goto('http://localhost:3000/sitemap.php')
        await page.emulate(mobile)
        await page.screenshot({path: './media/img/iPad/sitemap.png', fullPage: true});
        await page.goto('http://localhost:3000/cart.php')
        await page.emulate(mobile)
        await page.screenshot({path: './media/img/iPad/cart.png', fullPage: true});
        await page.goto('http://localhost:3000/checkout')
        await page.emulate(mobile)
        await page.screenshot({path: './media/img/iPad/checkout.png', fullPage: true});
      })
    
    
      after(async function(){
         await browser.close().done;
      })
      
    
    
    
    })
    
    
    



// TODO : figure out how to remove the browsersync overlay so I dont miss cart items bubble
