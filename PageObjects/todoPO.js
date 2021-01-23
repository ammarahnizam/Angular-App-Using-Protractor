var appUrl = require("../Testdata/url.json");
var todoTestdata = require("../Testdata/todoitems.json");

var todoApp = function () {
  //------------------------------Locators for Add Todo------------------------------

  this.todoTextBox = element(by.model("newTodo.text"));
  this.addButton = element(by.css('[type="submit"]'));
  this.addedItem = element(by.xpath('//div[@class="col-xs-10 col"]'));

  //------------------------------Locators for Add Todo------------------------------

  //------------------------------Locator for Delete Todo-------------------------------

  this.deleteButton = element(by.css('[ng-click="delete(item)"]'));

  //------------------------------Locators for Delete Todo------------------------------

  //------------------------------Locator for Complete Todo-------------------------------

  this.clearCompleteButton = element(by.css('[ng-click="clearCompleted()"]'));
  this.itemStatusCheckbox = element(by.css(".col-md-1"));
  this.itemStatusCompleted = element(
    by.xpath('//span[@class="col-md-1 glyphicon glyphicon-ok"]')
  );
  this.completedCount = element(by.xpath('//span[@class="badge ng-binding"]'));
  this.completeLink = element(by.xpath('//a[.="Completed"]'));

  //------------------------------Locator for Complete Todo-------------------------------

  //------------------------------Miscelleanous Locators ------------------------------

  this.todoAppHeading = element(
    by.css("div.container-fluid > .row > .row > div:nth-of-type(1) h1")
  );
  this.allLink = element(by.xpath('//a[.="All"]'));
  this.activeLink = element(by.xpath('//a[.="Active"]'));
  this.todoText = element(by.css('[value="item.text"]'));

  //-----------------------------Miscelleanous Locators------------------------------

  // ---------------------Method for App Access-------------------------------
  this.navigatetotodoApp = function () {
    browser.driver.manage().window().maximize();
    browser.get(appUrl.url);
  };
  // ---------------------Method for App Access-------------------------------

  // ---------------------Method for Add Todo-------------------------------
  this.addTodoItem = function () {
    this.todoTextBox.sendKeys(todoTestdata.Task1);
    this.addButton.click();
  };
  // ---------------------Method for Add Todo -------------------------------

  // ---------------------Method for Delete Todo-------------------------------
  this.deleteTodoItem = function () {
    this.deleteButton.click();
  };
  // ---------------------Method for Delete Todo -------------------------------

  // ---------------------Method for Edit Todo-------------------------------
  this.editTodoItem = function () {
    browser
      .actions()
      .doubleClick(this.todoText)
      .sendKeys("  task is now done")
      .perform();
    browser.actions().sendKeys(protractor.Key.ENTER).perform();
  };
  // ---------------------Method for Edit Todo -------------------------------

  // ---------------------Methods for Complete Todo-------------------------------
  this.markasCompleted = function () {
    this.itemStatusCheckbox.click();
  };

  this.clearCompletedTask = function () {
    this.itemStatusCheckbox.click();
    this.clearCompleteButton.click();
  };

  this.openCompletedSection = function () {
    this.completeLink.click();
  };
  // ---------------------Method for Complete Todo -------------------------------

  // ---------------------Method for Active Todo-------------------------------
  this.openActiveSection = function () {
    this.activeLink.click();
  };
  // ---------------------Method for Active Todo -------------------------------

  // ---------------------Method for All Todos-------------------------------
  this.openAllSection = function () {
    this.allLink.click();
  };
  //---------------------Method for All Todos-------------------------------

  // ---------------------Methods-------------------------------
};
module.exports = new todoApp();
