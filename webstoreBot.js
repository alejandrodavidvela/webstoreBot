//                     ================
//                    || Webstore Bot ||
//                     ================
//
//
//
//



const puppeteer = require('puppeteer');
const PDFDocument = require('pdfkit');
const fs = require('fs');


// Local Host
const host = 'http://localhost:3000/';


// PDF Document, image, and text positition values
const scale = 0.30;
const margin = 100;
const val1 = 50; 
const val2 = 50;

// Media directory Paths
const dir1 = './media'
const dir2 = './media/img'
const dir3 = './media/PDF'
const dir4 = './media/img/Full'
const dir5 = './media/img/Mobile'
const dir6 = './media/img/iPad'
const dir7 = './archive'

// If Media dirextory paths dont exist create them
if (!fs.existsSync(dir1)) {
  fs.mkdirSync(dir1);
  fs.mkdirSync(dir2);
  fs.mkdirSync(dir3);
  fs.mkdirSync(dir4);
  fs.mkdirSync(dir5);
  fs.mkdirSync(dir6);
  fs.mkdirSync(dir7);
}

// Make list of pages
const pageList = [
  'home',
  'submenu',
  'mobileMenu',
  'submenuExpanded',
  'apparel',
  'hats',
  'tees',
  'goods',
  'buttons',
  'mugs',
  'stickers',
  'yardsigns',
  'aboutus',
  'faq',
  'shippingreturns',
  'contactus',
  'login',
  'createaccount',
  'teedetail',
  'addtocart',
  'sitemap',
  'cart',
  'checkout'
];


// file path variables
const home = 'home';
const submenu = 'submenu';
const mobileMenu = 'mobileMenu';
const submenuExpanded = 'submenuExpanded';
const apparel = 'apparel';
const hats = 'hats';
const tees = 'tees';
const goods = 'goods';
const buttons = 'buttons';
const mugs = 'mugs';
const stickers = 'stickers';
const yardsigns = 'yardsigns';
const aboutus = 'aboutus';
const faq = 'faq';
const shippingreturns = 'shippingreturns';
const contactus = 'contactus';
const login = 'login';
const createaccount = 'createaccount';
const teedetail = 'teedetail';
const sitemap = 'sitemap';
const addtocart = 'addtocart';
const cart = 'cart';
const checkout = 'checkout';

//path to img folders
const path1 = './media/img/Full/';
const path2 = './media/img/Mobile/';
const path3 = './media/img/iPad/';

// function for time delay
function delay(time) {
  return new Promise(function(resolve) { 
      setTimeout(resolve, time)
  });
}


// Bot 

describe ("Webstore Screenshot Bot", (done) =>{
    let browser
    
    before(async function(){
        browser = await puppeteer.launch({
            headless : false, 
            product: 'chrome'
        })
        page = await browser.newPage()
    })

    // Settings
    //  Full
    const width = 1650;
    const height = 1050;
  
    it("Accessibility Check", async ()=>{
      await page.goto(`${host}`, {waitUntil: 'load'})
      await page.setViewport({width:width, height:height})
      const snapshot = await page.accessibility.snapshot();
      //console.info(snapshot);
    })
    it("Sub Menu Check", async ()=>{
      await page.goto(`${host}`, {waitUntil: 'load'});
      await page.setViewport({width:width, height:height})
      await page.click('a.navPages-action', {waitUntil: 'load'})
      await delay(2000);
      await page.screenshot({path: './media/img/Full/submenu.png', fullPage: true});
      await delay(2000);
      await page.screenshot({path: './media/img/Full/mobileMenu.png', fullPage: true});
      await delay(2000);
      await page.screenshot({path: './media/img/Full/submenuExpanded.png', fullPage: true});
    })
    
    
    it("(Laptop) Home, Apparel, Hats", async ()=>{
        await page.goto(`${host}`, {waitUntil: 'load'})
        await page.setViewport({width:width, height:height})
        await page.screenshot({path: './media/img/Full/home.png', fullPage: true});
        await page.goto(`${host}apparel/`)
        await page.setViewport({width:width, height:height})
        await page.screenshot({path: './media/img/Full/apparel.png', fullPage: true});
        await page.goto(`${host}hats/`)
        await page.setViewport({width:width, height:height})
        await page.screenshot({path: './media/img/Full/hats.png', fullPage: true});
      })
      it("(Laptop) Tees, Goods, Buttons", async ()=>{
        await page.goto(`${host}tees/`)
        await page.setViewport({width:width, height:height})
        await page.screenshot({path: './media/img/Full/tees.png', fullPage: true});
        await page.goto(`${host}goods/`)
        await page.setViewport({width:width, height:height})
        await page.screenshot({path: './media/img/Full/goods.png', fullPage: true});
        await page.goto(`${host}buttons/`)
        await page.setViewport({width:width, height:height})
        await page.screenshot({path: './media/img/Full/buttons.png', fullPage: true});
      })
      it("(Laptop) Mugs, Stickers, YardSigns", async ()=>{
        await page.goto(`${host}mugs/`)
        await page.setViewport({width:width, height:height})
        await page.screenshot({path: './media/img/Full/mugs.png', fullPage: true});
        await page.goto(`${host}stickers/`)
        await page.setViewport({width:width, height:height})
        await page.screenshot({path: './media/img/Full/stickers.png', fullPage: true});
        await page.goto(`${host}yard-signs/`)
        await page.setViewport({width:width, height:height})
        await page.screenshot({path: './media/img/Full/yardsigns.png', fullPage: true});
      })
      it("(Laptop) About Us, FAQ, Shipping Returns", async ()=>{
        await page.goto(`${host}about-us/`)
        await page.setViewport({width:width, height:height})
        await page.screenshot({path: './media/img/Full/aboutus.png', fullPage: true});
        await page.goto(`${host}faq/`)
        // TODO : screenshot cuts off bottom of the page
        await page.setViewport({width:width, height:height})
        await page.screenshot({path: './media/img/Full/faq.png', fullPage: true});
        await page.goto(`${host}shipping-returns/`)
        await page.setViewport({width:width, height:height})
        await page.screenshot({path: './media/img/Full/shippingreturns.png', fullPage: true});
      })
      it("(Laptop) Contact Us, Login, Create Account", async ()=>{
        await page.goto(`${host}contact-us/`)
        await page.setViewport({width:width, height:height})
        await page.screenshot({path: './media/img/Full/contactus.png', fullPage: true});
        await page.goto(`${host}login.php`)
        await page.setViewport({width:width, height:height})
        await page.screenshot({path: './media/img/Full/login.png', fullPage: true});
        // TODO : add action to click on the create account button and then take screenshot
        await page.goto(`${host}login.php?action=create_account/`)
        await page.setViewport({width:width, height:height})
        await page.screenshot({path: './media/img/Full/createaccount.png', fullPage: true});
      })
      it("(Laptop) Sample Tee, Site Map, Cart", async ()=>{
        await page.goto(`${host}sample-unisex-tee-navy/`)
        await page.setViewport({width:width, height:height})
        await delay(2000);
        await page.screenshot({path: './media/img/Full/teedetail.png', fullPage: true});
        await page.click('input.button--primary', {waitUntil: 'load'})
        await delay(4000);
        await page.screenshot({path: './media/img/Full/addtocart.png', fullPage: true});
        await page.goto(`${host}sitemap.php`)
        await page.setViewport({width:width, height:height})
        await page.screenshot({path: './media/img/Full/sitemap.png', fullPage: true});
        await page.goto(`${host}cart.php`)
        await page.setViewport({width:width, height:height})
        await page.screenshot({path: './media/img/Full/cart.png', fullPage: true});
      })
      it("(Laptop) Checkout", async ()=>{
        await page.goto(`${host}checkout`)
        await page.setViewport({width:width, height:height})
        await delay(4000);
        await page.screenshot({path: './media/img/Full/checkout.png', fullPage: true});
      })

    //  iPhone 5
    //  width: 320
    //  height: 568
    it("Mobile Menu Open", async ()=>{
      await page.goto(`${host}`, {waitUntil: 'load'});
      const mobile = puppeteer.devices['iPhone 5']
      await page.emulate(mobile)
      await page.click('a.mobileMenu-toggle', {waitUntil: 'load'})
      await delay(2000);
      await page.screenshot({path: './media/img/Mobile/mobileMenu.png', fullPage: true});
    })
    it("Sub Menu Expanded Check", async ()=>{
      await page.goto(`${host}`, {waitUntil: 'load'});
      const mobile = puppeteer.devices['iPhone 5']
      await page.emulate(mobile)
      await page.click('a.mobileMenu-toggle', {waitUntil: 'load'})
      await delay(2000);
      await page.click('a.navPages-action', {waitUntil: 'load'})
      await delay(2000);
      await page.screenshot({path: './media/img/Mobile/submenuExpanded.png', fullPage: true});
      await delay(2000);
      await page.screenshot({path: './media/img/Mobile/submenu.png', fullPage: true});
    })

      it("(iPhone 5) Home, Apparel, Hats", async ()=>{
        await page.goto(`${host}`)
        const mobile = puppeteer.devices['iPhone 5']
        await page.emulate(mobile)
        await page.screenshot({path: './media/img/Mobile/home.png', fullPage: true});
        await page.goto(`${host}apparel/`)
        await page.emulate(mobile)
        await page.screenshot({path: './media/img/Mobile/apparel.png', fullPage: true});
        await page.goto(`${host}hats/`)
        await page.emulate(mobile)
        await page.screenshot({path: './media/img/Mobile/hats.png', fullPage: true});
      })
      it("(iPhone 5) Tees, Goods, Buttons", async ()=>{
        await page.goto(`${host}tees/`)
        const mobile = puppeteer.devices['iPhone 5']
        await page.emulate(mobile)
        await page.screenshot({path: './media/img/Mobile/tees.png', fullPage: true});
        await page.goto(`${host}goods/`)
        await page.emulate(mobile)
        await page.screenshot({path: './media/img/Mobile/goods.png', fullPage: true});
        await page.goto(`${host}buttons/`)
        await page.emulate(mobile)
        await page.screenshot({path: './media/img/Mobile/buttons.png', fullPage: true});
      })
      it("(iPhone 5) Mugs, Stickers, YardSigns", async ()=>{
        await page.goto(`${host}mugs/`)
        const mobile = puppeteer.devices['iPhone 5']
        await page.emulate(mobile)
        await page.screenshot({path: './media/img/Mobile/mugs.png', fullPage: true});
        await page.goto(`${host}stickers/`)
        await page.emulate(mobile)
        await page.screenshot({path: './media/img/Mobile/stickers.png', fullPage: true});
        await page.goto(`${host}yard-signs/`)
        await page.emulate(mobile)
        await page.screenshot({path: './media/img/Mobile/yardsigns.png', fullPage: true});
      })
      it("(iPhone 5) About Us, FAQ, Shipping Returns", async ()=>{
        await page.goto(`${host}about-us/`)
        const mobile = puppeteer.devices['iPhone 5']
        await page.emulate(mobile)
        await page.screenshot({path: './media/img/Mobile/aboutus.png', fullPage: true});
        await page.goto(`${host}faq/`)
        await page.emulate(mobile)
        await page.screenshot({path: './media/img/Mobile/faq.png', fullPage: true});
        await page.goto(`${host}shipping-returns/`)
        await page.emulate(mobile)
        await page.screenshot({path: './media/img/Mobile/shippingreturns.png', fullPage: true});
      })
      it("(iPhone 5) Contact Us, Login, Create Account", async ()=>{
        await page.goto(`${host}contact-us/`)
        const mobile = puppeteer.devices['iPhone 5']
        await page.emulate(mobile)
        await page.screenshot({path: './media/img/Mobile/contactus.png', fullPage: true});
        await page.goto(`${host}login.php`)
        await page.emulate(mobile)
        await page.screenshot({path: './media/img/Mobile/login.png', fullPage: true});
        await page.goto(`${host}login.php?action=create_account/`)
        await page.emulate(mobile)
        await page.screenshot({path: './media/img/Mobile/createaccount.png', fullPage: true});
      })
      it("(iPhone 5) Sample Tee, Site Map, Cart", async ()=>{
        await page.goto(`${host}sample-unisex-tee-navy/`)
        const mobile = puppeteer.devices['iPhone 5']
        await page.emulate(mobile)
        await page.screenshot({path: './media/img/Mobile/teedetail.png', fullPage: true});
        await page.click('input.button--primary', {waitUntil: 'load'})
        await delay(4000);
        await page.screenshot({path: './media/img/Mobile/addtocart.png', fullPage: true});
        await delay(2000);
        await page.goto(`${host}sitemap.php`)
        await page.emulate(mobile)
        await page.screenshot({path: './media/img/Mobile/sitemap.png', fullPage: true});
        await page.goto(`${host}cart.php`)
        await page.emulate(mobile)
        await page.screenshot({path: './media/img/Mobile/cart.png', fullPage: true});
      })
      it("(iPhone 5) Checkout", async ()=>{
        await page.goto(`${host}checkout`)
        const mobile = puppeteer.devices['iPhone 5']
        await page.emulate(mobile)
        await delay(4000);
        await page.screenshot({path: './media/img/Mobile/checkout.png', fullPage: true, omitBackground: true});
      })

    //  iPad
    //  width: 768
    //  height: 1024

    it("iPad Menu Open", async ()=>{
      await page.goto(`${host}`, {waitUntil: 'load'});
      const mobile = puppeteer.devices['iPad']
      await page.emulate(mobile)
      await page.click('a.mobileMenu-toggle', {waitUntil: 'load'})
      await delay(2000);
      await page.screenshot({path: './media/img/iPad/mobileMenu.png', fullPage: true});
    })
    it("Sub Menu Expanded Check", async ()=>{
      await page.goto(`${host}`, {waitUntil: 'load'});
      const mobile = puppeteer.devices['iPad']
      await page.emulate(mobile)
      await page.click('a.mobileMenu-toggle', {waitUntil: 'load'})
      await delay(2000);
      await page.click('a.navPages-action', {waitUntil: 'load'})
      await delay(2000);
      await page.screenshot({path: './media/img/iPad/submenuExpanded.png', fullPage: true});
      await delay(2000);
      await page.screenshot({path: './media/img/iPad/submenu.png', fullPage: true});
    })
       it("(iPad) Home, Apparel, Hats", async ()=>{
        await page.goto(`${host}`)
        const mobile = puppeteer.devices['iPad']
        await page.emulate(mobile)
        await page.screenshot({path: './media/img/iPad/home.png', fullPage: true});
        await page.goto(`${host}apparel/`)
        await page.emulate(mobile)
        await page.screenshot({path: './media/img/iPad/apparel.png', fullPage: true});
        await page.goto(`${host}hats/`)
        await page.emulate(mobile)
        await page.screenshot({path: './media/img/iPad/hats.png', fullPage: true});
      })
      it("(iPad) Tees, Goods, Buttons", async ()=>{
        await page.goto(`${host}tees/`)
        const mobile = puppeteer.devices['iPad']
        await page.emulate(mobile)
        await page.screenshot({path: './media/img/iPad/tees.png', fullPage: true});
        await page.goto(`${host}goods/`)
        await page.emulate(mobile)
        await page.screenshot({path: './media/img/iPad/goods.png', fullPage: true});
        await page.goto(`${host}buttons/`)
        await page.emulate(mobile)
        await page.screenshot({path: './media/img/iPad/buttons.png', fullPage: true});
      })
      it("(iPad) Mugs, Stickers, YardSigns", async ()=>{
        await page.goto(`${host}mugs/`)
        const mobile = puppeteer.devices['iPad']
        await page.emulate(mobile)
        await page.screenshot({path: './media/img/iPad/mugs.png', fullPage: true});
        await page.goto(`${host}stickers/`)
        await page.emulate(mobile)
        await page.screenshot({path: './media/img/iPad/stickers.png', fullPage: true});
        await page.goto(`${host}yard-signs/`)
        await page.emulate(mobile)
        await page.screenshot({path: './media/img/iPad/yardsigns.png', fullPage: true});
      })
      it("(iPad) About Us, FAQ, Shipping Returns", async ()=>{
        await page.goto(`${host}about-us/`)
        const mobile = puppeteer.devices['iPad']
        await page.emulate(mobile)
        await page.screenshot({path: './media/img/iPad/aboutus.png', fullPage: true});
        await page.goto(`${host}faq/`)
        await page.emulate(mobile)
        await page.screenshot({path: './media/img/iPad/faq.png', fullPage: true});
        await page.goto(`${host}shipping-returns/`)
        await page.emulate(mobile)
        await page.screenshot({path: './media/img/iPad/shippingreturns.png', fullPage: true});
      })
      it("(iPad) Contact Us, Login, Create Account", async ()=>{
        await page.goto(`${host}contact-us/`)
        const mobile = puppeteer.devices['iPad']
        await page.emulate(mobile)
        await page.screenshot({path: './media/img/iPad/contactus.png', fullPage: true});
        await page.goto(`${host}login.php`)
        await page.emulate(mobile)
        await page.screenshot({path: './media/img/iPad/login.png', fullPage: true});
        await page.goto(`${host}login.php?action=create_account/`)
        await page.emulate(mobile)
        await page.screenshot({path: './media/img/iPad/createaccount.png', fullPage: true});
      })
      it("(iPad) Sample Tee, Site Map, Cart", async ()=>{
        await page.goto(`${host}sample-unisex-tee-navy/`)
        const mobile = puppeteer.devices['iPad']
        await page.emulate(mobile)
        await page.screenshot({path: './media/img/iPad/teedetail.png', fullPage: true});
        await page.click('input.button--primary', {waitUntil: 'load'})
        await delay(4000);
        await page.screenshot({path: './media/img/iPad/addtocart.png', fullPage: true});
        await delay(2000);
        await page.goto(`${host}sitemap.php`)
        await page.emulate(mobile)
        await page.screenshot({path: './media/img/iPad/sitemap.png', fullPage: true});
        await page.goto(`${host}cart.php`)
        await page.emulate(mobile)
        await page.screenshot({path: './media/img/iPad/cart.png', fullPage: true});
      })
      it("(iPad) Checkout", async ()=>{
        await page.goto(`${host}checkout`)
        const mobile = puppeteer.devices['iPad']
        await page.emulate(mobile)
        await delay(4000);
        await page.screenshot({path: './media/img/iPad/checkout.png', fullPage: true, omitBackground: true});
      })

      // Create pdf

      it("Successfully Created Laptop View PDF", async ()=>{

        // create PDF for Full version of webstore
        const doc = new PDFDocument();

        doc.pipe(fs.createWriteStream('./media/PDF/Laptop.pdf'));

        pageList.forEach(function (item, index) {
            doc.image(`${path1}${item}.png`, val1, val2, {scale: scale})
            doc.text(`${item}`,0,0) 
            doc.addPage({margin: margin});
        })
        doc.end();
      })

      it("Successfully Created iPhone View PDF", async ()=>{

        // create PDF for iPhone version of webstore
        const doc2 = new PDFDocument();

        doc2.pipe(fs.createWriteStream('./media/PDF/iPhone.pdf'));

        pageList.forEach(function (item, index) {
            doc2.image(`${path2}${item}.png`, val1, val2, {scale: scale})
            doc2.text(`${item}`,0,0) 
            doc2.addPage({margin: margin});
        })
        doc2.end();
        })

      it("Successfully Created iPad View PDF", async ()=>{

        // create PDF for iPad version of webstore
        const doc3 = new PDFDocument();

        doc3.pipe(fs.createWriteStream('./media/PDF/iPad.pdf'));

        pageList.forEach(function (item, index) {
            doc3.image(`${path3}${item}.png`, val1, val2, {scale: scale})
            doc3.text(`${item}`,0,0) 
            doc3.addPage({margin: margin});
        })
        doc3.end();
        })
    
    
      after(async function(){
         await browser.close().done;
      })
      
    
    
    
    })
    
    
    



// TODO : figure out how to remove the browsersync overlay so I dont miss cart items bubble
