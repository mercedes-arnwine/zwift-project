/*
 *This file cotains Event page tests 
 */
const HomePage = require('../pageobjects/home.page');
const EventPage = require('../pageobjects/events.page');
const Utility = require('../utils/utils');
const assert = require('chai').assert;

describe('Validating Events Sections', ()=>{
    it('Verify Events Page load successfully', ()=>{
        
        // Navigate to Home page
        HomePage.open();

        //Navigate to the Events page with url overwriting since there is no nav options
        EventPage.openEventsPage();

        //Wait for page to load
        Utility.waitForPageToLoad();

        //Validate Event heading text present on the page
        assert.equal(EventPage.eventsHeading.getText(), "EVENTS", 'Eventss text did not matched');
    });

    it('Validate Filter', ()=>{
        EventPage.filterBtn.click();
        browser.pause(5000)

        Utility.waitForPageToLoad();
        HomePage.closeTrustCookiesBox();

        // Select Running under sports
        EventPage.runningUnderSports.click();
        EventPage.raceUnderEventTyp.click();
        EventPage.cUnderIntensities.click();
        EventPage.morningUnderStartTime.click();
        EventPage.applyBtn.click();
        assert.equal(EventPage.noResultElm.getText(), 'No results.', 'message not matched')

    });
});


