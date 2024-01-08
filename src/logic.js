import { getElements, changeTitle } from "./DOM";

const loadModule = function () {
  const buttons = document.querySelectorAll(".button");
  console.log(buttons);
  let title = getElements();
  const addButton = title.getAddTaskBtn();
  const cancelButton = title.getCancelBtn();
  const submitButton = title.getSubmitBtn();
  const listForm = title.getForm();

  //creating task objects & return object properties
  function newTask(id, title, details, date, important = false) {
    const taskID = id;
    const taskTitle = title;
    const taskDetails = details;
    const dueDate = date;
    const isImportant = important;
    const isCompleted = false;

    return {
      taskID,
      taskTitle,
      taskDetails,
      dueDate,
      isImportant,
      isCompleted,
    };
  }
  // keep track of ID and store tasks in array
  let taskID = 0;
  const tasks = [];

  // Get updated Task Array
  function getTasks() {
    return tasks;
  }

  console.log(addButton);
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      //   title.getTitle(button.textContent); -- this works as well
      changeTitle(button.textContent.toUpperCase());
      console.log("ADD BUTTON", button.textContent);
      console.log(title.getTaskList());
    });
  });

  // function for adding div
  function addTaskContent() {
    // get updated Array
    const updatedArray = getTasks();
    const newItem = updatedArray[updatedArray.length - 1];

    const taskList = document.querySelector(".add-list");
    const listDiv = document.createElement("div");
    const contentDiv = document.createElement("div");
    const checkmark = document.createElement("div");
    const taskTitle = document.createElement("p");
    const editIconContainer = document.createElement("div");
    const form = document.getElementById("listForm");

    listDiv.classList.add("list-item");
    contentDiv.classList.add("list-item-first");
    checkmark.classList.add("checkmark");

    taskTitle.textContent = newItem.taskTitle;
    editIconContainer.textContent = newItem.dueDate;

    listDiv.append(contentDiv, editIconContainer);
    contentDiv.append(checkmark, taskTitle);
    taskList.insertBefore(listDiv, form);
    console.log("Done");
  }

  // Display New Task Form
  addButton.addEventListener("click", () => {
    // Toggle the 'show-form' class on the form element
    listForm.classList.toggle("show-form");
    console.log("RUNNNING");
  });

  // Submit Form for New Task
  listForm.addEventListener("submit", (event) => {
    event.preventDefault();
    taskID += 1;
    console.log("Form Submitted");
    let title = document.getElementById("listInput").value;
    let details = document.getElementById("listInputDetail").value;
    let date = document.getElementById("listInputDate").value;

    const addTask = newTask(taskID, title, details, date);
    tasks.push(addTask);
    listForm.reset();
    listForm.classList.toggle("show-form");
    console.log(tasks);
    addTaskContent();
  });

  // Cancel submission and clear fields
  cancelButton.addEventListener("click", () => {
    listForm.classList.toggle("show-form");
    console.log(".show-form class removed");
    listForm.reset();
  });

  return {
    getTasks,
  };
};

export { loadModule };
