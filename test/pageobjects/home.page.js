const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
    /**
     * define selectors using getter methods
     */
    get try7Days () {return $("(//a[@data-testid='button-primary-orange'])[1]")}
    get cookiesAccept () {return $("button#truste-consent-button")}

    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open();
    }

    closeTrustCookiesBox() {
        try{
            this.cookiesAccept.click()
        }catch{}
    }

}
module.exports = new HomePage();
