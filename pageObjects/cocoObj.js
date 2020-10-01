var cocoCommands = {
    menuItems: function (data) {
        this
            .click(data.menu)
            .verify.urlEquals(data.url)
    },
    shopSubItems: function (data) {
        this
            .moveToElement('@shopMenu', 5, 5)
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
                .click('@remove')
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
                .click('@remove')
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
                .click('@remove')
                .click('@closeCart')
        }

//** FLAVOR NO LONGER AVAILABLE */

        // else if (data.set === 'Watermelon' && data.count === 'one') {
        //     this
        //         .click('@selectQuantity')
        //         .click(`@${data.count}Quantity`)
        //         .click('@treatAddCart3')
        //         .expect.element('.label-3.cart-item__details__heading').text.to.equal(watermelonName.toUpperCase())
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
        //         .expect.element('.label-3.cart-item__details__heading').text.to.equal(watermelonName.toUpperCase())
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
        //         .expect.element('.label-3.cart-item__details__heading').text.to.equal(watermelonName.toUpperCase())
        //     this
        //         .expect.element('.p4.cart-item__details__description').text.to.equal('3-Piece Set')
        //     this
        //         .click('@remove')
        //         .click('@closeCart')
        // }




        else if (data.set === '3-Piece' && data.flavor === 'Mixed') {
            this
                .click('@treatFragrance2')
                .click('@mixed2')
                .click('@treatAddCart2')
                .expect.element('.label-3.cart-item__details__heading').text.to.equal(itemName2.toUpperCase())
            this
                .expect.element('.p4.cart-item__details__description').text.to.equal('Mixed fruits')
            this
                .click('@remove')
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
                .click('@remove')
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
                .click('@remove')
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

        treatAddCart1: {
            selector: '(//*[text()="Add to Cart"])[1]',
            locateStrategy: 'xpath'
        },


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




        //3-Piece Set
        treatFragrance2: {
            selector: '(//*[text()="Select A Fragrance"])[2]',
            locateStrategy: 'xpath'
        },

        //3-Piece Options
        strawberry2: '[for="swatch-0-strawberries-246013624347"]',
        orange2: '[for="swatch-0-cara-cara-orange-246013624347"]',
        mixed2: '[for="swatch-0-mixed-fruits-246013624347"]',

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
        }
    }
}