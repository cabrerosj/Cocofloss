var coco

var menuURL = require('../testAssets/cocoAssets/menuURL')

var shopSub = require('../testAssets/cocoAssets/shopSub')

var productPage = require('../testAssets/cocoAssets/productPage')

var treat = require('../testAssets/cocoAssets/treat')

var footerLinks = require('../testAssets/cocoAssets/footerLinks')

var customerInfo = require('../testAssets/cocoAssets/customerInfo')

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
            .pause(500)
    },
    afterEach: browser => {
        coco.end()
    },


    // 'Menu Items': browser => {
    //     menuURL.forEach(test => {
    //         coco.menuItems(test)
    //     })
    // },
    // 'Shop Menu Items': browser => {
    //     shopSub.forEach(test => {
    //         coco.shopSubItems(test)
    //     })
    // },
    // 'Treat Your Teeth Add to Cart': browser => {
    //     treat.forEach(test => {
    //         coco.treatCart(test)
    //     })
    // },
    // '★ Reviews': browser => {
    //     coco.reviewPopup()
    // },
    // 'Page Items Verification': browser => {
    //     productPage.forEach(test => {
    //         coco.productContents(test)
    //     })
    // },

    // 'Cart Edit': async (browser) => {
    //     browser.useXpath()
    //     browser.getLocationInView('//*[text()="See all Customer Reviews"]')
    //     browser.pause(1000)
    //     browser.click('(//*[text()="Select A Fragrance"])[1]')
    //     browser.useCss()
    //     browser.click('[for="swatch-0-mixed-fragrances-273101094939"]')
    //     browser.useXpath()
    //     browser.click('(//*[text()="Add to Cart"])[1]')
    //     browser.pause(1000)
    //     browser.click('(//*[@aria-label="Decrease quantity"])[1]')
    //     browser.pause(1000)
    //     browser.click('(//*[@aria-label="Decrease quantity"])[1]')
    //     browser.useCss()
    //     browser.click('.mini-cart__close')

    //     browser.pause(1000)
    //     browser.useXpath()
    //     browser.click('//*[text()="Select A set"]')
    //     browser.useCss()
    //     browser.click('[data-value="3-Piece Set"]')
    //     browser.useXpath()
    //     browser.click('(//*[text()="Add to Cart"])[3]')
    //     browser.pause(1000)
    //     browser.click('(//*[@aria-label="Decrease quantity"])[1]')
    //     browser.pause(1000)
    //     browser.click('(//*[@aria-label="Decrease quantity"])[1]')
    //     browser.useCss()
    //     browser.click('.mini-cart__close')

    //     browser.pause(1000)
    //     browser.useXpath()
    //     browser.click('(//*[text()="Select A Fragrance"])[2]')
    //     browser.useCss()
    //     browser.click('[for="swatch-0-cara-cara-orange-246013624347"]')
    //     browser.useXpath()
    //     browser.click('(//*[text()="Add to Cart"])[2]')
    //     browser.pause(1000)
    //     browser.click('(//*[@aria-label="Increase quantity"])[2]')
    //     browser.pause(1000)
    //     browser.useCss()

    //     const item1 = (await browser.getText('.p-small-2.cart-item__total-inner.align-r')).value
    //     var price1 = Number(item1.slice(1, -3))

    //     browser.useXpath()
    //     const item2 = (await browser.getText('(//*[@class="p-small-2 cart-item__total-inner align-r"])[2]')).value
    //     var price2 = Number(item2.slice(1, -3))

    //     const item3 = (await browser.getText('(//*[@class="p-small-2 cart-item__total-inner align-r"])[3]')).value
    //     var price3 = Number(item3.slice(1, -3))

    //     var itemsAdded = price1 + price2 + price3

    //     console.log(itemsAdded)

    //     browser.useCss()
    //     browser.expect.element('.p-medium2').text.to.equal('$' + itemsAdded + '.00')
    // },

    'Full Checkout': browser => {
        customerInfo.forEach(test => {
            coco.checkout(test)
        })
    }

    // 'Meet the Cu Sisters': browser => {
    //     coco.cuSisters()
    // },
    // '@GETCOCOFLOSS': browser => {
    //     coco.getCocofloss()
    // },

    // 'Footer Visibility': browser => {
    //     coco.footerVisibility()
    // },

    // 'Footer Links': browser => {
    //     footerLinks.forEach(test => {
    //         coco.footerLinks(test)
    //     })
    // },
    // 'Social Media Check': browser => {
    //     coco.socialMedia()
    // }
}

