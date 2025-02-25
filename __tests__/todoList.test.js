const { addTask, removeTask, showTasks } = require("../advanced/todoList");




describe("Todo List", () => {

  // since one specific task is added each time your array of tasks would be containing "Buy groceries" always
  // so you can add an "beforeEach" statement to clear out your array each time you want to test your function
  // OR
  // Write your remove function in a way so no item from the desired deletion would exist anymore

  beforeEach(() => {
		showTasks().forEach(task => removeTask(task));
	});

	it("should add a task correctly", () => {
		addTask("Buy groceries");
		expect(showTasks()).toContain("Buy groceries");    
	});

	it("should remove a task correctly", () => {
		addTask("Buy groceries");
		removeTask("Buy groceries");
		expect(showTasks()).not.toContain("Buy groceries");
	});

	

	it("should show all tasks correctly", () => {
		addTask("Buy groceries");
		addTask("Clean the house");
		expect(showTasks()).toEqual(["Buy groceries", "Clean the house"]);
	});
});


