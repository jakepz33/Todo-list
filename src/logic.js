import { getElements, changeTitle } from "./DOM";
// import { allTab } from "./tabs";

const loadModule = function () {
  const buttons = document.querySelectorAll(".button");
  // console.log(buttons);
  let title = getElements();
  const addButton = title.getAddTaskBtn();
  const cancelButton = title.getCancelBtn();
  const submitButton = title.getSubmitBtn();
  const listForm = title.getForm();
  const allTab = title.getAllTab();
  const taskList = title.getTaskList();

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

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      buttons.forEach((otherButton) => {
        otherButton.classList.remove("tabActive");
      });
      //   title.getTitle(button.textContent); -- this works as well
      changeTitle(button.textContent.toUpperCase());
      button.classList.add("tabActive");
      // console.log(title.getTaskList());
    });
  });

  // function for adding div
  function addTaskContent(task) {
    // get updated Array
    // const updatedArray = getTasks();
    // const newItem = updatedArray[updatedArray.length - 1];

    const taskList = document.querySelector(".add-list");
    const listDiv = document.createElement("div");
    const contentDiv = document.createElement("div");
    const checkmark = document.createElement("div");
    const taskTitle = document.createElement("p");
    const editIconContainer = document.createElement("div");
    const form = document.getElementById("listForm");
    const datePara = document.createElement("p");
    const importantIcon = document.createElement("span");

    listDiv.classList.add("list-item");
    contentDiv.classList.add("list-item-first");
    checkmark.classList.add("checkmark");
    editIconContainer.classList.add("yessir");
    importantIcon.classList.add("material-symbols-outlined");

    taskTitle.textContent = task.taskTitle;
    datePara.textContent = task.dueDate;

    // editIconContainer.textContent = task.dueDate;
    editIconContainer.append(datePara, importantIcon);
    listDiv.append(contentDiv, editIconContainer);
    contentDiv.append(checkmark, taskTitle);
    // taskList.insertBefore(listDiv, form);
    taskList.append(listDiv);
    console.log("Done");
  }

  // Display New Task Form
  addButton.addEventListener("click", () => {
    // append to account for div clearance
    taskList.append(listForm);
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

    console.log("This is the date", date);
    const addTask = newTask(taskID, title, details, date);
    tasks.push(addTask);
    listForm.reset();
    listForm.classList.toggle("show-form");
    console.log(tasks);
    addTaskContent(addTask);
  });

  // Cancel submission and clear fields
  cancelButton.addEventListener("click", () => {
    listForm.classList.toggle("show-form");
    console.log(".show-form class removed");
    listForm.reset();
  });

  //DUMMY DATA
  tasks.push(newTask(1, "Clean Room", "runnning", "2024-01-10"));
  tasks.push(newTask(2, "Buy Groceries", "Costco", "2024-01-11"));
  tasks.push(newTask(3, "Paint room", "start with wall", "2024-01-11"));
  tasks.push(newTask(2, "Oil Change", "at pep boys", "2024-01-15"));

  return {
    getTasks,
    addTaskContent,
  };
};

export { loadModule };
