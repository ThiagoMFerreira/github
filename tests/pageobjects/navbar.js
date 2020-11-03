const PricingPage = require("./pricing.page");

class Navbar{
    get searchInput () { return $('[data-scoped-placeholder=Search]') };
    get searchSuggestion () { return $('#jump-to-suggestion-search-global') };
    get pricingMenu () { return $('[aria-label=Global]>ul>li:last-child') };
    get plansOption () { return $('.dropdown-menu a[href="/pricing"]') };

    searchBy(text){
        this.searchInput.waitForDisplayed();
        this.searchInput.setValue(text);
        this.searchSuggestion.waitForDisplayed();
        this.searchSuggestion.click();
    }

    goToPlansPage(){
        this.pricingMenu.waitForDisplayed();
        this.pricingMenu.click();
        this.plansOption.click();
        PricingPage.pageTitle.waitForDisplayed();
    }
}

module.exports = new Navbar();