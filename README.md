# Webstore Bot
## Webpage Screenshot saved as PDF for iPhone, iPad, and Laptop

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

Webstore bot captures screenshots of all the standard sitemap stickershop webpages in a easy to review PDF. 
 

## Features

- Captures a screenshot of every standard page on the standard stickershop theme 
- Captures in 3 views. Laptop, iPhone, and iPad
- Creates PDFs of each view with page name as label


## Installation

Webstore Bot requires you have the site running on localhost: 3000
```sh
stencil start
```

Open new terminal and navigate to directory and install dependencies

```sh
cd ./webstoreBot
npm i
```

## How to Run Webstore Bot:

Run the following command

```sh
npm start .\webstoreBot.js
```

Webstore Bot will take screenshots of all pages and create 3 PDFs in a Full, iPhone, and iPad view. It will also save all the individual images in the ./media/img folder. 


New PDFs are saved in './webstoreBot/media/PDF

## How to Quickly Clear All Pdfs and Images from media folder:

```sh
node .\clearDirectory.js
```
