var cocoCommands = {
    add: function (num1, num2, num3) {
        this
        return num1 + num2 + num3
    },
    menuItems: function (data) {
        this
            .click(data.menu)
            .verify.urlEquals(data.url)
    },

    shopSubItems: function (data) {
        this
            .moveToElement('@shopMenu', 5, 5)
            .pause(1000)
            .click(data.link)
            .verify.urlEquals(data.url)
    },

    productContents: function (data) {
        this
            .moveToElement('@shopMenu', 5, 5)
            .moveToElement(data.link, 5, 5)
            .click(data.link)
            .verify.urlEquals(data.url)
            // .expect.element('[itemprop="name"]').text.to.equal(itemName2.toUpperCase())
            .verify.elementPresent('@prodName')
            .verify.elementPresent('@prodRating')
            .verify.elementPresent('@prodDescription')
            .verify.elementPresent('@prodGallery')
            .verify.elementPresent('@prodQuantity')
            .verify.elementPresent('@prodCart')
    },

    treatCart: function (data) {
        //For 4-Piece Set
        var itemName = 'cocofloss ' + data.set + ' set'
        //For Watermelon Flavor
        // var watermelonName = 'Limited-Edition Summer Watermelon Cocofloss'       //**Flavor No Longer Available */
        //For 3-Piece
        var darkChocName = 'DARK CHOCOLATE COCOFLOSS'
        var itemName2 = 'cocofloss ' + data.set
        this
            .getLocationInView('@allReviews')
        if (data.set === '4-Piece' && data.flavor === 'Mixed') {
            this
                .click('@treatFragrance1')
                .click('@mixed')
                .click('@treatAddCart1')
                .expect.element('.label-3.cart-item__details__heading').text.to.equal(itemName.toUpperCase())
            this
                .expect.element('.p4.cart-item__details__description').text.to.equal(data.flavor + ' Fragrances')
            this
                .pause(1000)
                .click('@remove')
                .pause(1000)
                .click('@closeCart')
        }
        else if (data.set === '4-Piece' && data.flavor === 'Strawberry') {
            this
                .click('@treatFragrance1')
                .click('@strawberry')
                .click('@treatAddCart1')
                .expect.element('.label-3.cart-item__details__heading').text.to.equal(itemName.toUpperCase())
            this
                .expect.element('.p4.cart-item__details__description').text.to.equal(data.flavor + ' Fragrances')
            this
                .pause(1000)
                .click('@remove')
                .pause(1000)
                .click('@closeCart')
        }
        else if (data.set === '4-Piece' && data.flavor === 'Orange') {
            this
                .click('@treatFragrance1')
                .click('@orange')
                .click('@treatAddCart1')
                .expect.element('.label-3.cart-item__details__heading').text.to.equal(itemName.toUpperCase())
            this
                .expect.element('.p4.cart-item__details__description').text.to.equal(data.flavor + ' Fragrances')
            this
                .pause(1000)
                .click('@remove')
                .pause(1000)
                .click('@closeCart')
        }

        //** FLAVOR NO LONGER AVAILABLE */

        // else if (data.set === 'Watermelon' && data.count === 'one') {
        //     this
        //         .click('@selectQuantity')
        //         .click(`@${data.count}Quantity`)
        //         .click('@treatAddCart3')
        //         .expect.element('.label-3.cart-item__details__heading').text.to.equal(darkChocName)
        //     this
        //         .expect.element('.p4.cart-item__details__description').text.to.equal('Single')
        //     this
        //         .click('@remove')
        //         .click('@closeCart')
        // }
        // else if (data.set === 'Watermelon' && data.count === 'two') {
        //     this
        //         .click('@selectQuantity')
        //         .click(`@${data.count}Quantity`)
        //         .click('@treatAddCart3')
        //         .expect.element('.label-3.cart-item__details__heading').text.to.equal(darkChocName)
        //     this
        //         .expect.element('.p4.cart-item__details__description').text.to.equal('2-Piece Set')
        //     this
        //         .click('@remove')
        //         .click('@closeCart')
        // }
        // else if (data.set === 'Watermelon' && data.count === 'three') {
        //     this
        //         .click('@selectQuantity')
        //         .click(`@${data.count}Quantity`)
        //         .click('@treatAddCart3')
        //         .expect.element('.label-3.cart-item__details__heading').text.to.equal(darkChocName)
        //     this
        //         .expect.element('.p4.cart-item__details__description').text.to.equal('3-Piece Set')
        //     this
        //         .click('@remove')
        //         .click('@closeCart')
        // }






        else if (data.set === 'Dark Chocolate' && data.count === 'one') {
            this
                .click('@selectQuantity')
                .click(`@${data.count}Quantity`)
                .click('@treatAddCart3')
                .expect.element('.label-3.cart-item__details__heading').text.to.equal(darkChocName)
            this
                .expect.element('.p4.cart-item__details__description').text.to.equal('Single')
            this
                .pause(1000)
                .click('@remove')
                .pause(1000)
                .click('@closeCart')
        }
        else if (data.set === 'Dark Chocolate' && data.count === 'two') {
            this
                .click('@selectQuantity')
                .click(`@${data.count}Quantity`)
                .click('@treatAddCart3')
                .expect.element('.label-3.cart-item__details__heading').text.to.equal(darkChocName)
            this
                .expect.element('.p4.cart-item__details__description').text.to.equal('2-Piece Set')
            this
                .pause(1000)
                .click('@remove')
                .pause(1000)
                .click('@closeCart')
        }
        else if (data.set === 'Dark Chocolate' && data.count === 'three') {
            this
                .click('@selectQuantity')
                .click(`@${data.count}Quantity`)
                .click('@treatAddCart3')
                .expect.element('.label-3.cart-item__details__heading').text.to.equal(darkChocName)
            this
                .expect.element('.p4.cart-item__details__description').text.to.equal('3-Piece Set')
            this
                .pause(1000)
                .click('@remove')
                .pause(1000)
                .click('@closeCart')
        }
        else if (data.set === '3-Piece' && data.flavor === 'Mixed') {
            this
                .click('@treatFragrance2')
                .click('@mixed2')
                .click('@treatAddCart2')
                .expect.element('.label-3.cart-item__details__heading').text.to.equal(itemName2.toUpperCase())
            this
                .expect.element('.p4.cart-item__details__description').text.to.equal('Mixed fruits')
            this
                .pause(1000)
                .click('@remove')
                .pause(1000)
                .click('@closeCart')
        }
        else if (data.set === '3-Piece' && data.flavor === 'Strawberry') {
            this
                .click('@treatFragrance2')
                .click('@strawberry2')
                .click('@treatAddCart2')
                .expect.element('.label-3.cart-item__details__heading').text.to.equal(itemName2.toUpperCase())
            this
                .expect.element('.p4.cart-item__details__description').text.to.equal('Strawberries')
            this
                .pause(1000)
                .click('@remove')
                .pause(1000)
                .click('@closeCart')
        }
        else if (data.set === '3-Piece' && data.flavor === 'Orange') {
            this
                .click('@treatFragrance2')
                .click('@orange2')
                .click('@treatAddCart2')
                .expect.element('.label-3.cart-item__details__heading').text.to.equal(itemName2.toUpperCase())
            this
                .expect.element('.p4.cart-item__details__description').text.to.equal('Cara cara orange')
            this
                .pause(1000)
                .click('@remove')
                .pause(1000)
                .click('@closeCart')
            return this
        }
    },

    reviewPopup: function () {
        this
            .click('@star')
            .pause(1000)
            .verify.elementPresent('.yotpo-modal-content')
            .click('@nextPage')
            .pause(2000)
            .click('@nextPage')
            .pause(2000)
            .click('@prevPage')
            .pause(2000)
            .click('@writeReview')
            .verify.elementPresent('@reviewTitle')
            .verify.elementPresent('@reviewContent')
            .verify.elementPresent('@reviewUser')
            .verify.elementPresent('@reviewEmail')
            .click('@closeReview')
        return this
    },

    cuSisters: function () {
        this
            .moveToElement('@ourStoryBtn', 5, 5)
            .verify.visible('@cuTitle')
            .verify.visible('@cuContent')
            .verify.visible('@ourStoryBtn')
            .click('@ourStoryBtn')
            .verify.urlEquals('https://cocofloss.com/pages/our-story')
        return this
    },

    getCocofloss: function () {
        this
            .getLocationInView('@footer')
            .verify.elementPresent('@igSectionTitle')
            .verify.elementPresent('@igGallery')
        return this
    },

    footerVisibility: function () {
        this
            .getLocationInView('@footer')
            .verify.elementPresent('@footer')
            .verify.visible('@joinTeamTitle')
            .verify.visible('@joinTeamContent')
            .verify.visible('@newsletterInput')
    },

    footerLinks: function (data) {
        this
            .getLocationInView('@footer')
            .click(data.footer)
            .verify.urlEquals(data.url)
            .navigate('https://cocofloss.com/')
        return this
    },

    socialMedia: function () {
        this
            .getLocationInView('@footer')
            .assert.attributeContains('@facebook', 'href', 'http://www.facebook.com/lovecocofloss')
            .assert.attributeContains('@instagram', 'href', 'http://instagram.com/getcocofloss')
            .assert.attributeContains('@email', 'href', 'mailto:help@cocofloss.com')
        return this
    },
    checkout: function (data) {
        this

            //First item added to cart
            .click('@treatFragrance1')
            .pause(1000)
            .click('@mixed')
            .pause(1000)
            .click('@treatAddCart1')
            .pause(1000)
            .click('@closeCart')
            .pause(1000)

            //Second item added to cart
            .click('@selectQuantity')
            .pause(1000)
            .click('@twoQuantity')
            .pause(1000)
            .click('@treatAddCart3')
            .pause(1000)
            .click('@closeCart')

            //Third item added to cart
            .click('@treatFragrance2')
            .pause(1000)
            .click('@orange2')
            .pause(1000)
            .click('@treatAddCart2')
            .pause(1000)
            //Checkout
            .click('@checkout')
            .verify.urlEquals('https://cocofloss.com/cart')
            .verify.visible('#note')
            .pause(1000)

            //Verify then Checkout
            .click('@checkoutCheckout')

            //Contact and Shipping Info Page
            .verify.elementPresent('@emailHolder')
            .verify.elementPresent('@firstNameHolder')
            .verify.elementPresent('@lastNameHolder')
            .verify.elementPresent('@addressHolder')
            .verify.elementPresent('@address2Holder')
            .verify.elementPresent('@cityHolder')
            .verify.elementPresent('@countryDropdown')
            .verify.elementPresent('@stateDropdown')
            .verify.elementPresent('@zipHolder')
            .verify.elementPresent('@codeHolder')

            //Information Input
            .setValue('@emailHolder', data.email)
            .pause(500)
            .setValue('@firstNameHolder', data.firstName)
            .pause(500)
            .setValue('@lastNameHolder', data.lastName)
            .pause(1000)
            .setValue('@addressHolder', data.address1)
            .pause(2000)
            .api.keys(this.api.Keys.ENTER)
            .pause(1000)
        this
            .setValue('@address2Holder', data.address2)
            .click('#continue_button')

            //Shipping Options
            .assert.containsText('@confirmationEmail', data.email)
            .pause(1000)
            .assert.containsText('@confirmationAddress', data.address1 + ', ' + data.address2 + ', Cupertino CA 95014, United States')
            .pause(1000)
            .verify.elementPresent('@shippingOptions')
            .pause(1000)
            .click('#continue_button')
            .pause(1000)

            //Payment Informtion
            .assert.containsText('@confirmationEmail', data.email)
            .assert.containsText('@confirmationAddress', data.address1 + ', ' + data.address2 + ', Cupertino CA 95014, United States')
            .pause(1000)
            .verify.elementPresent('@payPal')
            .verify.elementPresent('@amazonPay')
        return this
    },

    contactSection: function () {
        this
        .getLocationInView('@footer')
        .assert.elementPresent('@contactTitle')
        .assert.attributeContains('@marketingEmail', 'href', 'mailto:marketing@cocofloss.com')
        .assert.attributeContains('@wholeSaleEmail', 'href', 'mailto:wholesale@cocofloss.com')
    }
}


module.exports = {
    url: 'https://cocofloss.com/',
    commands: [cocoCommands],
    elements: {
        //PopUp Window
        closePopup: '#closeIconContainer',

        //Menu Items
        cocoMenu: '[title="Cocofloss"]',
        shopMenu: '[data-subnav=".js-menu-subnav"]',
        subSaveMenu: {
            selector: '//*[text()="Subscribe & Save"]',
            locateStrategy: 'xpath'
        },
        whyCocoMenu: {
            selector: '//*[text()="Why Cocofloss"]',
            locateStrategy: 'xpath'
        },
        blogMenu: {
            selector: '//*[text()="Blog"]',
            locateStrategy: 'xpath'
        },
        signInMenu: {
            selector: '//*[text()="Sign In"]',
            locateStrategy: 'xpath'
        },

        //Shop SubMenu Items
        //Floss SubMenu
        fourPiece: {
            selector: '//*[text()="4-Piece Set"]',
            locateStrategy: 'xpath'
        },
        threePiece: {
            selector: '(//*[text()="3-Piece Set"])[1]',
            locateStrategy: 'xpath'
        },
        threeRefill: {
            selector: '//*[text()="Refill 3-Piece Set"]',
            locateStrategy: 'xpath'
        },
        susClean: {
            selector: '//*[text()="Sustainably Clean Pack"]',
            locateStrategy: 'xpath'
        },
        shopAll1: {
            selector: '(//*[text()="Shop All"])[1]',
            locateStrategy: 'xpath'
        },

        //Gifts SubMenu
        gratitude: {
            selector: '//*[text()="Gratitude Set"]',
            locateStrategy: 'xpath'
        },
        soothing: {
            selector: '//*[text()="Soothing Sets"]',
            locateStrategy: 'xpath'
        },
        pinaColada: {
            selector: '//*[text()="Piña Colada Totes"]',
            locateStrategy: 'xpath'
        },
        balBliss: {
            selector: '//*[text()="Balance & Bliss Journal"]',
            locateStrategy: 'xpath'
        },
        flossParty: {
            selector: '//*[text()="How to Floss Party Book"]',
            locateStrategy: 'xpath'
        },
        giftCard: {
            selector: '//*[text()="Gift Card"]',
            locateStrategy: 'xpath'
        },
        shopAll2: {
            selector: '(//*[text()="Shop All"])[2]',
            locateStrategy: 'xpath'
        },

        //Shop by Fragrance
        // watermelon: {
        //     selector: '//*[text()="Summer Watermelon"]',     //**Flavor No Longer Available */
        //     locateStrategy: 'xpath'
        // },
        darkChoc: {
            selector: '//*[text()="Dark Chocolate"]',
            locateStrategy: 'xpath'
        },
        deliciousMint: {
            selector: '//*[text()="Delicious Mint"]',
            locateStrategy: 'xpath'
        },
        freshCoconut: {
            selector: '//*[text()="Fresh Coconut"]',
            locateStrategy: 'xpath'
        },

        pureStrawberry: {
            selector: '//*[text()="Pure Strawberry"]',
            locateStrategy: 'xpath'
        },

        caraCaraOrange: {
            selector: '//*[text()="Cara Cara Orange"]',
            locateStrategy: 'xpath'
        },
        shopAll3: {
            selector: '(//*[text()="Shop All"])[3]',
            locateStrategy: 'xpath'
        },

        //Product Pages
        prodName: '[itemprop="name"]',
        prodRating: '.yotpo-bottomline.pull-left.star-clickable',
        prodDescription: '[itemprop="description"]',
        prodGallery: '.nine.columns.alpha',
        prodQuantity: {
            selector: '(//*[@class="left product-quantity-box"])[1]',
            locateStrategy: 'xpath'
        },
        prodCart: '.purchase.inline_purchase',

        //Treat Your Teeth
        //4-Piece Set
        treatFragrance1: {
            selector: '(//*[text()="Select A Fragrance"])[1]',
            locateStrategy: 'xpath'
        },
        //4-Piece Options
        mixed: '[for="swatch-0-mixed-fragrances-273101094939"]',
        strawberry: '[for="swatch-0-pure-strawberry-273101094939"]',
        orange: '[for="swatch-0-cara-cara-orange-273101094939"]',




        //** FLAVOR NO LONGER AVAILABLE*/



        // //Watermelon
        // selectQuantity: {
        //     selector: '//*[text()="Select A Quantity"]',
        //     locateStrategy: 'xpath'
        // },

        // //Watermelon Quantities
        // oneQuantity: '[for="swatch-0-single-1324978569310"]',
        // twoQuantity: '[for="swatch-0-2-piece-set-1324978569310"]',
        // threeQuantity: '[for="swatch-0-3-piece-set-1324978569310"]',

        // treatAddCart2: {
        //     selector: '(//*[text()="Add to Cart"])[2]',
        //     locateStrategy: 'xpath'
        // },




        //Dark Chocolate
        selectQuantity: {
            selector: '//*[text()="Select A set"]',
            locateStrategy: 'xpath'
        },

        //Dark Chocolate Quantities
        oneQuantity: '[data-value="Single"]',
        twoQuantity: '[data-value="2-Piece Set"]',
        threeQuantity: '[data-value="3-Piece Set"]',

        //3-Piece Set
        treatFragrance2: {
            selector: '(//*[text()="Select A Fragrance"])[2]',
            locateStrategy: 'xpath'
        },

        //3-Piece Options
        strawberry2: '[for="swatch-0-strawberries-246013624347"]',
        orange2: '[for="swatch-0-cara-cara-orange-246013624347"]',
        mixed2: '[for="swatch-0-mixed-fruits-246013624347"]',

        //Treat Section Add to Cart Buttons
        treatAddCart1: {
            selector: '(//*[text()="Add to Cart"])[1]',
            locateStrategy: 'xpath'
        },
        treatAddCart2: {
            selector: '(//*[text()="Add to Cart"])[2]',
            locateStrategy: 'xpath'
        },
        treatAddCart3: {
            selector: '(//*[text()="Add to Cart"])[3]',
            locateStrategy: 'xpath'
        },

        //Cart
        cart: '.cart-count.header__cart-count',
        closeCart: '.mini-cart__close',
        remove: '.p-small-2.underline.cart-item__remove', //remove item from cart

        //See All Customer Reviews
        allReviews: {
            selector: '//*[text()="See all Customer Reviews"]',
            locateStrategy: 'xpath'
        },

        //★ Reviews
        star: '[href="#yotpo-testimonials"]',
        starWindow: '.yotpo-modal-content',
        nextPage: '[rel="next"]',
        prevPage: '[rel="prev"]',
        writeReview: '[value="write a review"]',
        reviewTitle: '#yotpo_input_review_title',
        reviewContent: '#yotpo_input_review_content',
        reviewUser: '#yotpo_input_review_username',
        reviewEmail: '#yotpo_input_review_email',
        closeReview: {
            selector: '(//*[@class="yotpo-icon yotpo-icon-cross"])[1]',
            locateStrategy: 'xpath'
        },

        //Meet The Cu Sisters
        cuTitle: '.landing-sister__title.h2.mb1',
        cuContent: '.landing-sister__text.text-max.mha.p1.mb2',
        ourStoryBtn: {
            selector: '(//*[@href="/pages/our-story"])[1]',
            locateStrategy: 'xpath'
        },

        //@COCOFLOSS
        igSectionTitle: '.h2.landing-social__title.mb1.align-c',
        igGallery: '.landing-social__grid',

        //Footer
        footer: '#shopify-section-landing-footer',
        joinTeamTitle: {
            selector: '//*[text() = "Join the floss team"]',
            locateStrategy: 'xpath'
        },
        joinTeamContent: {
            selector: '//*[text() = "Keep in touch for special offers and self-care tips for everyday bliss."]',
            locateStrategy: 'xpath'
        },
        newsletterInput: '.newsletter',

        //Footer Links
        blogFooter: {
            selector: '//*[text()="Our Blog"]',
            locateStrategy: 'xpath'
        },
        ourStoryFooter: {
            selector: '(//*[text()="Our Story"])[2]',
            locateStrategy: 'xpath'
        },
        pressFooter: {
            selector: '//*[text()="Press"]',
            locateStrategy: 'xpath'
        },
        dentalProsFooter: {
            selector: '//*[text()="Dental Pros"]',
            locateStrategy: 'xpath'
        },
        manageMySubscriptionFooter: {
            selector: '//*[text()="Manage My Subscription"]',
            locateStrategy: 'xpath'
        },
        storeLocatorFooter: {
            selector: '//*[text()="Store Locator"]',
            locateStrategy: 'xpath'
        },
        jobsFooter: {
            selector: '//*[text()="Jobs"]',
            locateStrategy: 'xpath'
        },
        helpFaqFooter: {
            selector: '//*[text()="Help & FAQ"]',
            locateStrategy: 'xpath'
        },

        //Footer Social Media Links
        facebook: '.icon-facebook',
        instagram: '.icon-instagram',
        email: '.icon-mail',

        //Cart Items
        item1: '.p-small-2.cart-item__total-inner.align-r',
        item2: {
            selector: '(//*[@class="p-small-2 cart-item__total-inner align-r"])[2]',
            locateStrategy: 'xpath'
        },
        item3: {
            selector: '(//*[@class="p-small-2 cart-item__total-inner align-r"])[3]',
            locateStrategy: 'xpath'
        },
        subTotal: '.p-medium2',

        //Checkout Button
        checkout: {
            selector: '//*[text()="Checkout"]',
            locateStrategy: 'xpath'
        },
        checkoutCheckout: {
            selector: '(//*[@type="submit"])[1]',
            locateStrategy: 'xpath'
        },

        emailHolder: '[placeholder="Email"]',
        firstNameHolder: '[placeholder="First name (optional)"]',
        lastNameHolder: '[placeholder="Last name"]',
        addressHolder: '[placeholder="Address"]',
        address2Holder: '[placeholder="Apartment, suite, etc. (optional)"]',
        cityHolder: '[placeholder="City"]',

        countryDropdown: {
            selector: '(//*[@class="field__input-wrapper field__input-wrapper--select"])[1]',
            locateStrategy: 'xpath'
        },
        stateDropdown: {
            selector: '(//*[@class="field__input-wrapper field__input-wrapper--select"])[2]',
            locateStrategy: 'xpath'
        },

        zipHolder: '[placeholder="ZIP code"]',

        codeHolder: '[placeholder="Gift card or discount code"]',

        confirmationEmail: '[dir="ltr"]',
        confirmationAddress: '.address.address--tight',

        shippingOptions: {
            selector: '(//*[@class="content-box"])[2]',
            locateStrategy: 'xpath'
        },

        selectedShipping: '.radio__label__primary',

        payPal: '[alt="PayPal"]',
        amazonPay: '[alt="Amazon Pay"]', 

        //Contact Section
        contactTitle: {
            selector: '//*[text()="Contact"]',
            locateStrategy: 'xpath'
        },
        marketingEmail: '[href="mailto:marketing@cocofloss.com"]',
        wholeSaleEmail: '[href="mailto:wholesale@cocofloss.com"]'
    }
}