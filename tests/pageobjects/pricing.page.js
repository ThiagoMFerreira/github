class PricingPage{
    get pageTitle () { return $('p.lh-condensed-ultra') };
    planTitle(index) { return $(`.js-pricing-plans-container>div:nth-child(${index}) h3.h2-mktg`) };
    planValue(index) { return $(`.js-pricing-plans-container>div:nth-child(${index}) h3.h1-mktg`) };

    validatePlansAndPrices(){
        this.planTitle(1).waitForDisplayed();
        expect(this.planTitle(1).getText()).to.equal('Free');
        expect(this.planValue(1).getText()).to.equal('$0 /month');
        expect(this.planTitle(2).getText()).to.equal('Team');
        expect(this.planValue(2).getText()).to.equal('$4 per user/month');
        expect(this.planTitle(3).getText()).to.equal('Enterprise');
        expect(this.planValue(3).getText()).to.equal('$21 per user/month');
        expect(this.planTitle(4).getText()).to.equal('GitHub One');
    }
}

module.exports = new PricingPage();