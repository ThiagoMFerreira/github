class HomePage{
  
    get signUpFormButton () { return $('.js-signup-form-submit button[type=submit]') };
    get signInButton () { return $('a[href="/login"]') };
    get notAvailableUserMsg () { return $('[id*=input-check] .mb-1') };
    get freeTrialButton () { return $('[data-ga-click*="Create organization"]') };
    get contactSalesButton () {
         return $('[data-feature=launchpad_homepage] .flex-column [data-ga-click*="Contact Sales"]') 
        };
}

module.exports = new HomePage();
