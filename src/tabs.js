import { loadModule } from "./logic";
import { getElements, changeTitle } from "./DOM";

const moduleInstance = loadModule();
const domInstance = getElements();
const allTab = domInstance.getAllTab();
const todayTab = domInstance.getTodayTab();
const weekTab = domInstance.getWeekTab();
const importantTab = domInstance.getImportantTab();
const completedTab = domInstance.getCompletedTab();
const addProjectBtn = domInstance.getProjectAddBtn();

console.log(weekTab);
console.log("I AM THE TABS PAGE");

// clear the DOM everytime it is clicked to account for added or removed items
allTab.addEventListener("click", () => {
  displayAll();
});

// SHOW ALL TAB ON LOAD
document.addEventListener("DOMContentLoaded", () => {
  allTab.classList.add("tabActive");
  changeTitle(allTab.textContent.toUpperCase());
  displayAll();
});

// SHOW ALL TASKS -----
function displayAll() {
  const taskBoard = domInstance.getTaskList();

  taskBoard.innerHTML = "";

  const listArrays = moduleInstance.getTasks();
  console.log("DISPLAY ALL", listArrays);
  listArrays.forEach((item, index) => {
    moduleInstance.addTaskContent(item, index);
    console.log(index);
  });
}

// SHOW TODAY TASKS Only get items that are todays date
todayTab.addEventListener("click", () => {
  const taskBoard = domInstance.getTaskList();

  // Clear the existing content in the taskBoard
  taskBoard.innerHTML = "";

  // Get the current date
  const currentDate = new Date();
  currentDate.setUTCHours(0, 0, 0, 0);

  //Get each task from array and add them to taskBoard -- Fix the date: reference
  const listArrays = moduleInstance.getTasks();
  listArrays.forEach((item) => {
    const taskDate = new Date(item.dueDate);
    taskDate.setUTCHours(0, 0, 0, 0);
    console.log("currentDate:", currentDate);
    console.log("taskDate:", taskDate);

    // Compare the task date with the current date
    if (
      taskDate.getDate() === currentDate.getDate() &&
      taskDate.getMonth() === currentDate.getMonth() &&
      taskDate.getFullYear() === currentDate.getFullYear()
    ) {
      moduleInstance.addTaskContent(item);
    }
  });
  console.log("todayTab");
});

// SHOW TASKS FOR THE WEEK
weekTab.addEventListener("click", () => {
  const taskBoard = domInstance.getTaskList();

  taskBoard.innerHTML = "";

  const next7DaysDate = new Date();
  next7DaysDate.setDate(next7DaysDate.getDate() + 7);

  const listArrays = moduleInstance.getTasks();
  listArrays.forEach((item) => {
    const taskDate = new Date(item.dueDate);

    if (taskDate >= next7DaysDate && taskDate <= next7DaysDate) {
      moduleInstance.addTaskContent(item);
    }
  });
  console.log("next7DaysTab");
});

// CHANGE ITEM PROPERTIES

// SHOW ITEMS THAT ARE IMPORTANT
console.log("Important Tab", importantTab);
importantTab.addEventListener("click", () => {
  const taskBoard = domInstance.getTaskList();
  taskBoard.innerHTML = "";

  const listArrays = moduleInstance.getTasks();
  console.log("Important clicked");
  listArrays.forEach((item, index) => {
    if (item.isImportant === true) {
      moduleInstance.addTaskContent(item, index);
    }
  });
});

// SHOW ITEMS THAT ARE COMPLETED
completedTab.addEventListener("click", () => {
  const taskBoard = domInstance.getTaskList();
  taskBoard.innerHTML = "";

  const listArrays = moduleInstance.getTasks();
  console.log("Clicked on completed Tab");
  listArrays.forEach((item, index) => {
    if (item.isCompleted === true) {
      console.log(item.taskTitle);
      moduleInstance.addTaskContent(item, index);
    }
  });
});

// ADD PROJECT BTN
addProjectBtn.addEventListener("click", () => {
  console.log("AddProjectBtn");
  moduleInstance.newProject();
  // addBTN function()
});
const my_array = moduleInstance.getTasks();
console.log("MY ARRAY", my_array);

export { displayAll };
