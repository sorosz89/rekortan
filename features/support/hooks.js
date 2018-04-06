'use strict';

require('geckodriver');
require('cucumber').Util.Colors(true);
var chai = require('chai'),
    chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
global.expect = chai.expect;

var webdriver = require('selenium-webdriver');
global.by = webdriver.By;

module.exports = function(){
    this.setDefaultTimeout(60000);
    this.registerHandler('BeforeFeatures', function(){
        global.driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.firefox()).build();
        return global.driver.manage().window().maximize();
    });

    this.registerHandler('AfterFeatures', function(){
        return global.driver.quit();
    });
};

