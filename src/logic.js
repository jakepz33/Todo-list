import { getElements, changeTitle } from "./DOM";

const loadModule = function () {
  const buttons = document.querySelectorAll(".button");
  console.log(buttons);
  let title = getElements();
  const addButton = title.getAddTaskBtn();

  //creating task objects
  function newTask(date, details, important = false) {
    const dueDate = date;
    const taskDet = details;
    const isImportant = important;
    const isCompleted = false;

    // return am object with the propertieds
    return {
      dueDate,
      taskDet,
      isImportant,
      isCompleted,
    };
  }

  const task1 = newTask("10/20/1999", "I am running");
  console.log("This is the due date", task1.dueDate);

  console.log(addButton);
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      //   title.getTitle(button.textContent); -- this works as well
      changeTitle(button.textContent.toUpperCase());
      console.log(button.textContent);
      console.log(title.getTaskList());
    });
  });

  // function for adding div
  addButton.addEventListener("click", () => {
    // call addDivFunction
    const newDiv = document.createElement("div");
    newDiv.textContent = "new";
    const taskList = title.getTaskList();

    taskList.appendChild(newDiv);
  });
};

export { loadModule };
