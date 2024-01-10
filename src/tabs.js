import { loadModule } from "./logic";
import { getElements } from "./DOM";

const moduleInstance = loadModule();
const domInstance = getElements();
const addTab = domInstance.getAllTab();
const todayTab = domInstance.getTodayTab();

console.log("I AM THE TABS PAGE");

// clear the DOM everytime it is clicked to account for added or removed items
addTab.addEventListener("click", () => {
  const taskBoard = domInstance.getTaskList();

  // Clear the existing content in the taskBoard
  taskBoard.innerHTML = "";

  //Get each task from array and add them to the taskBoard
  //   addTab.classList.add("tabActive");
  const listArrays = moduleInstance.getTasks();
  console.log("PLEASE WORK");
  listArrays.forEach((item) => {
    moduleInstance.addTaskContent(item);
  });
});

// // Only get items that are todays date
todayTab.addEventListener("click", () => {
  const taskBoard = domInstance.getTaskList();

  // Clear the existing content in the taskBoard
  taskBoard.innerHTML = "";

  // Get the current date
  const currentDate = new Date();

  //Get each task from array and add them to taskBoard -- Fix the date: reference
  const listArrays = moduleInstance.getTasks();
  listArrays.forEach((item) => {
    const taskDate = new Date(item.dueDate);
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
