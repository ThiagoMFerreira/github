const { company } = require("faker")

class Utils {

    get userInput () { return $('input[name="user[login]"]') };
    get emailInput () { return $('input[name="user[email]"]') };
    get passwordInput () { return $('input[name="user[password]"]') };
    get nameInput () { return $('#contact_request_name') };
    get companyInput () { return $('#contact_request_organization_name') };
    get workEmailInput () { return $('#contact_request_email') };

    fillWorkForm(name,company,email){
        this.nameInput.waitForDisplayed();
        this.nameInput.setValue(name);
        this.companyInput.setValue(company);
        this.workEmailInput.setValue(email);
    }

    fillPersonalForm(user,email,password){
        this.userInput.waitForDisplayed();
        this.userInput.setValue(user);
        this.emailInput.setValue(email);
        this.passwordInput.setValue(password);
    }
}

module.exports = Utils;