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

Capture screenshots and save them as .pngs in media folder

```sh
npm start .\webstoreBot.js
```

Create PDFs from pngs with page name labels and saves in media folder

```sh
node .\createPdf.js
```

New PDFs are saved in './webstoreBot/media/PDF

## How to Quickly Clear All Pdfs and Images from media folder:

```sh
node .\clearDirectory.js
```
