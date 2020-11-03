const HomePage = require("./home.page");

class TrialPlanePage{

    get cloudButton () { return $('[data-ga-click*="Choose Cloud"] .py-4') };
    get serverButton () { return $('[data-ga-click*="Choose Server"] .signup-plan-card-light-text') };
    get acceptTermsCheck () { return $('#contact_request_agreed_to_terms') };
    installTypeRadio(index) { return $(`#contact-form-linkto :nth-child(${index}) input`) };
    anyQuestionRadio(index) { return $(`[class=mb-2] #contact-form-linkto :nth-child(${index}) input`) };
    

    openTrialPlanPage(){
        HomePage.freeTrialButton.waitForDisplayed();
        HomePage.freeTrialButton.scrollIntoView();
        HomePage.freeTrialButton.click();
        this.serverButton.waitForDisplayed();
    }
    
}

module.exports = new TrialPlanePage();