// createPdf.js combines all the pngs into 3 PDF documents and adds a label text of page name. Laptop.pdf, iPad.pdf, iPhone, iPad.pdf

const PDFDocument = require('pdfkit');
const fs = require('fs');

// Document, image, and text positition values
const scale = 0.30;
const margin = 100;
const val1 = 50; 
const val2 = 50;

// Make list of pages
const pageList = [
    'home',
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
    'sitemap',
    'cart',
    'checkout'
];

// file path variables
const home = 'home';
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
const cart = 'cart';
const checkout = 'checkout';

//path to img folders
const path1 = './media/img/Full/';
const path2 = './media/img/Mobile/';
const path3 = './media/img/iPad/';


// create PDF for Full version of webstore
const doc = new PDFDocument();

doc.pipe(fs.createWriteStream('./media/PDF/Laptop.pdf'));

pageList.forEach(function (item, index) {
    doc.image(`${path1}${item}.png`, val1, val2, {scale: scale})
    doc.text(`${item}`,0,0) 
    doc.addPage({margin: margin});
})

doc.end();

// create PDF for iPhone version of webstore

const doc2 = new PDFDocument();

doc2.pipe(fs.createWriteStream('./media/PDF/iPhone.pdf'));

pageList.forEach(function (item, index) {
    doc2.image(`${path2}${item}.png`, val1, val2, {scale: scale})
    doc2.text(`${item}`,0,0) 
    doc2.addPage({margin: margin});
})

doc2.end();

// create PDF for iPad version of webstore

const doc3 = new PDFDocument();

doc3.pipe(fs.createWriteStream('./media/PDF/iPad.pdf'));

pageList.forEach(function (item, index) {
    doc3.image(`${path3}${item}.png`, val1, val2, {scale: scale})
    doc3.text(`${item}`,0,0) 
    doc3.addPage({margin: margin});
})

doc3.end();

