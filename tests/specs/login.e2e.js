const LoginPage = require('../pageobjects/login.page');


describe("Test Login Page", function(){
    beforeEach( ()=>{
        browser.url("");
        browser.maximizeWindow();
        LoginPage.openLoginPage();
    });
    
    it("Verify if login is working correctly with invalid user and valid pass", () =>{
        LoginPage.doLogin('user','validpass');
        LoginPage.errorMessage.waitForDisplayed();
        expect(LoginPage.errorMessage.getText()).to.equal('Incorrect username or password.');
    });

    it("Verify if login is working correctly with valid user and invalid pass", () =>{
        LoginPage.doLogin('ThiagoMFerreira','invalidpass');
        LoginPage.errorMessage.waitForDisplayed();
        expect(LoginPage.errorMessage.getText()).to.equal('Incorrect username or password.');
    });

    it("Verify if login is working correctly with valid credentials", () =>{
        LoginPage.doLogin('user','pass');
        LoginPage.teamsLabel.waitForDisplayed();
        expect(LoginPage.teamsLabel.getText()).to.equal('Your teams');
    });
    
});