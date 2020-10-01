var coco = {}

var menuURL = require('../testAssets/cocoAssets/menuURL')

var shopSub = require('../testAssets/cocoAssets/shopSub')

var productPage = require('../testAssets/cocoAssets/productPage')

var treat = require('../testAssets/cocoAssets/treat')

module.exports = {
    beforeEach: browser => {
        coco = browser.page.cocoObj()
        coco
            .navigate()
            .maximizeWindow()
            .pause(3000)
            .api.frame("attentive_creative")
            .click('#closeIconContainer')
            .frameParent()
            .pause(3000)
    },
    afterEach: browser => {
        coco.end()
    },
    'Menu Items': browser => {
        menuURL.forEach(test => {
            coco.menuItems(test)
        })
    },
    'Shop Menu Items': browser => {
        shopSub.forEach(test => {
            coco.shopSubItems(test)
        })
    },
    'Treat Your Teeth Add to Cart': browser => {
        treat.forEach(test => {
            coco.treatCart(test)
        })
    },
    '★ Reviews': browser => {
        coco.reviewPopup()
    },
    'Page Items Verification': browser => {
        productPage.forEach(test => {
            coco.productContents(test)
        })
    }
}