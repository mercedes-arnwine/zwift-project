/*
 *This file cotains home page tests 
 */
const HomePage = require('../pageobjects/home.page');
const Utility = require('../utils/utils');
const assert = require('chai').assert;

describe('Validating Zwift Website', ()=>{
    it('Verify Home Page load successfully', ()=>{
        //Navigate to the website
        HomePage.open();

        //Close Trust cookies box
        HomePage.closeTrustCookiesBox();

        //Wait for page to load
        Utility.waitForPageToLoad();

        //Validate Try Free for 7 days button present on the page
        assert.isTrue(HomePage.try7Days.isExisting(), 'Tree Free of 7 days button not present');
    });
});


