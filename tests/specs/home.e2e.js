const HomePage = require("../pageobjects/home.page");
const JoinPage = require("../pageobjects/join.page");
const ContactSalesPage = require("../pageobjects/contactSales.page");
const Utils = require("../pageobjects/utils");
const utils = new Utils;
const Data = require("../data");

describe("Validate Sign Up Form", function(){
beforeEach( ()=>{
    browser.url("");
    browser.maximizeWindow();
    HomePage.signUpFormButton.waitForDisplayed();        
});

    it("Verify if Sign up is working correctly", () =>{
        utils.fillPersonalForm(Data.randomUserName,Data.randomEmail,'P@ssword564984194');
        HomePage.signUpFormButton.click();
        JoinPage.h1.waitForDisplayed();
        expect(JoinPage.h1.getText()).to.equal('Create your account');
    });

    it("Verify if insert an existing username is displaying that it isn't available", () =>{
        utils.userInput.setValue('ThiagoMFerreira');
        HomePage.notAvailableUserMsg.waitForDisplayed();
        expect(HomePage.notAvailableUserMsg.getText()).to.equal(
            'Username ThiagoMFerreira is not available.');
    });

});

describe("Contact Sales", function(){
    beforeEach( ()=>{
        browser.url("");
        browser.maximizeWindow();       
    });
    
    it("Verify if contact with sales is working correctly", () =>{
        ContactSalesPage.openContactSales();
        utils.fillWorkForm(Data.randomName,Data.randomCompany,Data.randomEmail);
        ContactSalesPage.helpRadio(1).click();
    });
    
});