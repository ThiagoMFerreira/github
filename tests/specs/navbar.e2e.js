const SearchPage = require("../pageobjects/search.page");
const Navbar = require("../pageobjects/navbar");
const PricingPage = require("../pageobjects/pricing.page");

describe("Validate Search", function(){
    beforeEach( ()=>{
        browser.url("");
        browser.maximizeWindow();
        Navbar.searchInput.waitForDisplayed();        
    });
    
    it("Verify if a simple search is working correctly", () =>{
        Navbar.searchBy('webdriverio');
        SearchPage.labelResultRepo(1).waitForDisplayed();
        expect(SearchPage.labelResultRepo(1).getText()).to.contain('webdriverio');
    });
    
});

describe("Validate Pricing Page", function(){
    beforeEach( ()=>{
        browser.url("");
        browser.maximizeWindow();
        Navbar.pricingMenu.waitForDisplayed();        
    });
    
    it("Verify if the plans and values are displayed correcrly", () =>{
        Navbar.goToPlansPage();
        PricingPage.validatePlansAndPrices();
    });
    
});
