const HomePage = require("./home.page");

class LoginPage {

    get userInput () { return $('#login_field') };
    get passwordInput () { return $('#password') };
    get loginButon () { return $('[name=commit]') };
    get teamsLabel () { return $('#dashboard-user-teams h2') };
    get errorMessage () { return $('#js-flash-container .flash-error div') };

    openLoginPage(){
        HomePage.signInButton.waitForDisplayed();
        HomePage.signInButton.click();
        this.userInput.waitForDisplayed();
    }

    doLogin(user,password){
        this.userInput.setValue(user);
        this.passwordInput.setValue(password);
        this.loginButon.click();
    }
}

module.exports = new LoginPage();