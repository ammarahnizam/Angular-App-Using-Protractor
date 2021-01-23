var todoPg = require("../../PageObjects/todoPO");

describe("Verify the correct page is open", function () {
  it("SHOULD open the app and url must be correct", function () {
    todoPg.navigatetotodoApp();
    expect(browser.getCurrentUrl()).toContain("/AngularJs-TodoApp");
  });

  it("SHOULD show the correct heading as'Todo App'", function () {
    todoPg.navigatetotodoApp();
    expect(todoPg.todoAppHeading.getText()).toEqual("Todo App");
  });
});

describe("Verify a Todo item is added successfully", function () {
  beforeEach(function () {
    todoPg.navigatetotodoApp();
  });
  it("SHOULD add todo item(s) successfully", function () {
    todoPg.addTodoItem();
    expect(todoPg.addedItem.isPresent()).toBe(true);
  });
});

describe("Verify an active Todo item is displaying in active section", function () {
  beforeEach(function () {
    todoPg.navigatetotodoApp();
    todoPg.addTodoItem();
  });
  it("SHOULD show an active item inside active section", function () {
    todoPg.openActiveSection();
    expect(todoPg.addedItem.isPresent()).toBe(true);
  });
});

describe("Verify Todo Item is getting updated successfully", function () {
  beforeEach(function () {
    todoPg.navigatetotodoApp();
    todoPg.addTodoItem();
  });
  it("SHOULD update todo item(s) successfully", function () {
    todoPg.editTodoItem();
  });
});

describe("Verify Todo Item is marking as completed successfully", function () {
  beforeEach(function () {
    todoPg.navigatetotodoApp();
    todoPg.addTodoItem();
  });
  it("SHOULD show a tick mark on a completed todo item(s)", function () {
    todoPg.markasCompleted();
    expect(todoPg.itemStatusCompleted.isPresent()).toBe(true);
  });
});

describe("Verify a completed Todo item is displaying in completed section", function () {
  beforeEach(function () {
    todoPg.navigatetotodoApp();
    todoPg.addTodoItem();
    todoPg.markasCompleted();
  });
  it("SHOULD show a completed item inside completed section", function () {
    todoPg.openCompletedSection();
    expect(todoPg.itemStatusCompleted.isPresent()).toBe(true);
  });
});

describe("Verify all Todo items are displaying in All section", function () {
  beforeEach(function () {
    todoPg.navigatetotodoApp();
    todoPg.addTodoItem();
    todoPg.markasCompleted();
  });
  it("SHOULD show Todo items inside All section", function () {
    todoPg.openAllSection();
    expect(todoPg.itemStatusCompleted.isPresent()).toBe(true);
    expect(todoPg.addedItem.isPresent()).toBe(true);
  });
});

describe("Verify Todo Item is getting deleted upon Clear Complete", function () {
  beforeEach(function () {
    todoPg.navigatetotodoApp();
    todoPg.addTodoItem();
    todoPg.markasCompleted();
  });
  it("SHOULD show a number 0 in completed count", function () {
    todoPg.clearCompletedTask();
    expect(todoPg.completedCount.getText()).toEqual("0");
  });
});

describe("Verify Todo Item is getting deleted successfully", function () {
  beforeEach(function () {
    todoPg.navigatetotodoApp();
    todoPg.addTodoItem();
  });
  it("SHOULD delete todo item(s) successfully", function () {
    todoPg.deleteTodoItem();
    expect(todoPg.addedItem.isPresent()).toBeFalse;
  });
});

afterAll(function () {
  browser.driver.close();
});
