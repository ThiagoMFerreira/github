
const HomePage = require("./home.page");

class contactSalesPage{

    get pageTitle () { return $('h1.h0-mktg') };
    helpRadio(index) { return $(`.list-style-none li:nth-child(${index}) input`) };

    openContactSales(){
        HomePage.contactSalesButton.waitForDisplayed();
        HomePage.contactSalesButton.scrollIntoView();
        HomePage.contactSalesButton.click();
        this.pageTitle.waitForDisplayed();
    }
}

module.exports = new contactSalesPage();