const TrialPlanPage = require("../pageobjects/trialPlan.page");
const Utils = require("../pageobjects/utils");
const utils = new Utils;
const Data = require("../data");

describe("Trial Plan", function(){
    beforeEach( ()=>{
        browser.url("");
        browser.maximizeWindow();       
    });
    
    it("Verify if Enterprise Cloud plan is working correctly", () =>{
        TrialPlanPage.openTrialPlanPage();
        TrialPlanPage.cloudButton.click();
        utils.fillPersonalForm(Data.randomUserName,Data.randomEmail,'P@ssword564984194');
    });

    it("Verify if Enterprise Server plan is working correctly", () =>{
        TrialPlanPage.openTrialPlanPage();
        TrialPlanPage.serverButton.scrollIntoView();
        TrialPlanPage.serverButton.click();
        utils.fillWorkForm(Data.randomName,Data.randomCompany,Data.randomEmail);
        TrialPlanPage.installTypeRadio(1).click();
        TrialPlanPage.anyQuestionRadio(1).click();
        TrialPlanPage.acceptTermsCheck.click();
    });
});