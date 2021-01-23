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
};
