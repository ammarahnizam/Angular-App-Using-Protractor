var HtmlReporter = require('protractor-beautiful-reporter');
exports.config = {
  directConnect: true,

  capabilities: {
    browserName: "chrome",
  },

  framework: "jasmine",

  specs: ["./Specs/TodoApp/todoApp-spec.js"],

  getPageTimeout: 10000,

  allScriptsTimeout: 10000,

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000,
  },
  onPrepare: function() {
    // Add a screenshot reporter and store screenshots to `/Reports/screenshots`:
      jasmine.getEnv().addReporter(new HtmlReporter({
           baseDirectory: 'Reports/screenshots'
        }).getJasmine2Reporter());
     }
  
    }
