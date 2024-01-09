import { loadModule } from "./logic";
import { getElements } from "./DOM";

const moduleInstance = loadModule();
const domInstance = getElements();
const addTab = domInstance.getAllTab();

console.log("I AM THE TABS PAGE");

// clear the DOM everytime it is clicked to account for added or removed items
addTab.addEventListener("click", () => {
  const taskBoard = domInstance.getTaskList();
  taskBoard.innerHTML = "";
  addTab.classList.add("tabActive");
  const listArrays = moduleInstance.getTasks();
  console.log("PLEASE WORK");
  listArrays.forEach((item) => {
    moduleInstance.addTaskContent(item);
  });
});
