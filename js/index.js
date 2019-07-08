const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
const logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent['nav']['img-src'])

const navLinks = Array.from(document.querySelectorAll('nav a'))
for(let i = 0; i < navLinks.length; i++){
  navLinks[i].textContent = siteContent['nav'][`nav-item-${i + 1}`]
}

const headerImg = document.getElementById('cta-img')
headerImg.setAttribute('src', siteContent['cta']['img-src'])

const headerTxt = document.querySelector('.cta-text h1')
const headerButton = document.querySelector('.cta-text button')

headerTxt.textContent = siteContent['cta']['h1']
headerButton.textContent = siteContent['cta']['button']

const midImg = document.getElementById('middle-img')
midImg.setAttribute('src', siteContent['main-content']['middle-img-src'])

let midContentHeadings = Array.from(document.querySelectorAll('.text-content h4'))

midContentHeadings[0].textContent = siteContent['main-content']['features-h4']
midContentHeadings[1].textContent = siteContent['main-content']['about-h4']
midContentHeadings[2].textContent = siteContent['main-content']['services-h4']
midContentHeadings[3].textContent = siteContent['main-content']['product-h4']
midContentHeadings[4].textContent = siteContent['main-content']['vision-h4']

let midContentParagrphs = Array.from(document.querySelectorAll('.text-content p'))

midContentParagrphs[0].textContent = siteContent['main-content']['features-content']
midContentParagrphs[1].textContent = siteContent['main-content']['about-content']
midContentParagrphs[2].textContent = siteContent['main-content']['services-content']
midContentParagrphs[3].textContent = siteContent['main-content']['product-content']
midContentParagrphs[4].textContent = siteContent['main-content']['vision-content']

let contactSectionHeader = document.querySelector('.contact h4')
contactSectionHeader.textContent = siteContent['contact']['contact-h4']

contactSectionInfo = Array.from(document.querySelectorAll('.contact p'))
contactSectionInfo[0].textContent = siteContent['contact']['address']
contactSectionInfo[1].textContent = siteContent['contact']['phone']
contactSectionInfo[2].textContent = siteContent['contact']['email']

let footerSection = document.querySelector('footer p')
footerSection.textContent = siteContent['footer']['copyright']


let newAnchor = document.createElement('a')
let otherNewAnchor = document.createElement('a')

newAnchor.textContent = 'Our Stuff'
otherNewAnchor.textContent = 'More Stuff'

navLinks.push(newAnchor);
navLinks.push(otherNewAnchor);

document.querySelector('nav').appendChild(newAnchor)
document.querySelector('nav').prepend(otherNewAnchor)

for(let i = 0; i < navLinks.length; i++){
  navLinks[i].setAttribute('style', 'color:green;')
  }