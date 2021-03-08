const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class EventPage extends Page {
    /**
     * define selectors using getter methods
     */
    get eventsHeading () {return $('.events-header h1')};
    get filterBtn () {return $('button.filter-toggle')};
    get runningUnderSports () {return $("//button[contains(text(), 'Running')]")}
    get raceUnderEventTyp () {return $("//button[@value='RACE']")}
    get cUnderIntensities () {return $("//button[@value=3]")}
    get morningUnderStartTime () {return $("//button[@value=3]")}
    get applyBtn () {return $("button.apply-button")}
    get noResultElm () {return $("//div[contains(text(), 'No results')]")}

    open (path) {
        return super.open(path);
    }
}

module.exports = new EventPage();
