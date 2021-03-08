class Utility {
  
    waitForPageToLoad(){
        browser.waitUntil(function () {
            const state = browser.execute(function () {
              return document.readyState;
            });
            //console.log("state:" + state)
            return state === 'complete';
          },
            {
              timeout: 60000, //60secs
              timeoutMsg: 'Oops! Check your internet connection'
            });
    }

}

module.exports = new Utility();