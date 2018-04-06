'use strict';

require('geckodriver');
require('cucumber').Util.Colors(true);
var chai = require('chai'),
    chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
global.expect = chai.expect;

var webdriver = require('selenium-webdriver');
global.by = webdriver.By;

module.exports = () => {
    this.setDefaultTimeout(60000);
    this.registerHandler('BeforeFeatures', () => 
      return new webdriver.Builder().withCapabilities(webdriver.Capabilities.firefox()).build();
    });

    this.registerHandler('AfterFeatures', () => global.driver.quit());
};
