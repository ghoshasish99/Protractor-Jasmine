// conf.js
var HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');

var reporter = new HtmlScreenshotReporter({
  dest: 'target/screenshots',
  filename: 'screenshot-report.html'
});

exports.config = {
    seleniumAddress: 'http://52.186.103.162:4444/wd/hub',
    //For local executions
    /*capabilities: {   
      'browserName' : 'chrome'
    },*/ 
    multiCapabilities:
   [ 
    {
    'browserName': 'chrome'
    }
  ],
    framework: 'jasmine',
    specs: ['specs/*.js'],
    // Setup the report before any tests start
  beforeLaunch: function() {
    return new Promise(function(resolve){
      reporter.beforeLaunch(resolve);
    });
  },

  // Assign the test reporter to each running instance
  onPrepare: function() {
    jasmine.getEnv().addReporter(reporter);
    var AllureReporter = require('jasmine-allure-reporter');
    jasmine.getEnv().addReporter(new AllureReporter({
      resultsDir: 'allure-results'
    })); 
  },

  // Close the report after all tests finish
  afterLaunch: function(exitCode) {
    return new Promise(function(resolve){
      reporter.afterLaunch(resolve.bind(this, exitCode));
    });
  }
  }