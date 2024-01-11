import { loadModule } from "./logic";
import { getElements, changeTitle } from "./DOM";

const moduleInstance = loadModule();
const domInstance = getElements();
const allTab = domInstance.getAllTab();
const todayTab = domInstance.getTodayTab();
const weekTab = domInstance.getWeekTab();

console.log(weekTab);
console.log("I AM THE TABS PAGE");

// clear the DOM everytime it is clicked to account for added or removed items
allTab.addEventListener("click", () => {
  displayAll();
});
document.addEventListener("DOMContentLoaded", () => {
  allTab.classList.add("tabActive");
  changeTitle(allTab.textContent.toUpperCase());
  displayAll();
});

/*addTab.addEventListener("click", () => {
  const taskBoard = domInstance.getTaskList();

  // Clear the existing content in the taskBoard
  taskBoard.innerHTML = "";

  //Get each task from array and add them to the taskBoard
  //   addTab.classList.add("tabActive");
  const listArrays = moduleInstance.getTasks();
  console.log("PLEASE WORK");
  console.log(listArrays);
  listArrays.forEach((item) => {
    console.log("This is the item", item);
    moduleInstance.addTaskContent(item);
  });
}); */

function displayAll() {
  const taskBoard = domInstance.getTaskList();

  taskBoard.innerHTML = "";

  const listArrays = moduleInstance.getTasks();
  console.log("DISPLAY ALL");
  listArrays.forEach((item) => {
    moduleInstance.addTaskContent(item);
  });
}
// // Only get items that are todays date
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
