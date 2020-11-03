const { TimelineService } = require('wdio-timeline-reporter/timeline-service');

exports.config = {
    runner: 'local',
    specs: [
        './tests/specs/**/*.js'
    ],
    maxInstances: 1,
    capabilities: [{
 
        browserName: 'chrome',
        
    }],
    logLevel: 'warn',
    bail: 0,
    baseUrl: 'https://github.com/',
    waitforTimeout: 5000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ['selenium-standalone', [TimelineService]],
    framework: 'mocha',
    reporters: ['spec',['timeline',{
        outputDir: './reports',
        screenshotStrategy: 'on:error' }]
    ],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
    
    beforeTest: function () {
        const chai = require('chai');
        const chaiWebdriver = require('chai-webdriverio').default;

        chai.use(chaiWebdriver(browser));

        global.expect = chai.expect;
    },
}
