import { getElements, changeTitle } from "./DOM";
import { displayAll } from "./tabs";
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
  const dropdownContent = title.getProjectDropdownContent();

  //creating task objects & return object properties
  function newTask(
    id,
    title,
    details,
    date,
    project = null,
    important = false
  ) {
    const taskID = id;
    const taskTitle = title;
    const taskDetails = details;
    const dueDate = date;
    const isImportant = important;
    const isCompleted = false;
    const projectName = project;

    return {
      taskID,
      taskTitle,
      taskDetails,
      dueDate,
      isImportant,
      isCompleted,
      projectName,
    };
  }

  // keep track of ID and store tasks in array
  let taskID = 0;
  const tasks = [];
  const projectOptions = ["House chores", "Coding"];

  // Get updated Task Array
  function getTasks() {
    return tasks;
  }
  function getProjectOptions() {
    return projectOptions;
  }
  const updateButtons = () => document.querySelectorAll(".button");

  // CHANGE TITLE AND TAB
  function updateButtonEventListeners() {
    let newButtons = updateButtons();
    newButtons.forEach((button) => {
      button.addEventListener("click", () => {
        newButtons.forEach((otherButton) => {
          otherButton.classList.remove("tabActive");
        });
        //   title.getTitle(button.textContent); -- this works as well
        changeTitle(button.textContent.toUpperCase());
        button.classList.add("tabActive");
        // console.log(title.getTaskList());
      });
    });
  }
  updateButtonEventListeners();
  // CHANGE TITLE AND TAB FOR PROJECTS

  function callDisplay(func) {
    func();
  }

  // ADDING TASK FROM FORM
  function addTaskContent(task, index = null) {
    // get updated Array
    // const updatedArray = getTasks();
    // const newItem = updatedArray[updatedArray.length - 1];
    const newTask = task.taskTitle;
    const lastIndex = index;

    const taskList = document.querySelector(".add-list");
    const listDiv = document.createElement("div");
    const contentDiv = document.createElement("div");
    const checkmark = document.createElement("div");
    const taskTitle = document.createElement("p");
    const editIconContainer = document.createElement("div");
    const form = document.getElementById("listForm");
    const datePara = document.createElement("p");
    const importantIcon = document.createElement("span");
    const infoIcon = document.createElement("span");
    const deleteBtn = document.createElement("span");

    listDiv.classList.add("list-item");
    listDiv.setAttribute("data-index", index);
    contentDiv.classList.add("list-item-first");
    checkmark.classList.add("checkmark");
    editIconContainer.classList.add("yessir");
    importantIcon.classList.add("material-symbols-outlined");
    importantIcon.classList.add("empty-star");
    importantIcon.textContent = "star";
    deleteBtn.classList.add("material-symbols-outlined");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.textContent = "delete";
    infoIcon.classList.add("material-symbols-outlined");
    infoIcon.classList.add("info-btn");
    infoIcon.textContent = "info";

    taskTitle.textContent = task.taskTitle;
    datePara.textContent = task.dueDate;

    // editIconContainer.textContent = task.dueDate;
    editIconContainer.append(datePara, importantIcon, infoIcon, deleteBtn);
    listDiv.append(contentDiv, editIconContainer);
    contentDiv.append(checkmark, taskTitle);
    // taskList.insertBefore(listDiv, form);
    taskList.append(listDiv);
    console.log("Ran addTaskContent function");
    console.log(
      `addTaskContent This is the newly added stuff ${newTask}, ${index}`
    );

    // if isImportant True
    if (task.isImportant === true) {
      importantIcon.classList.add("material-icons");
      importantIcon.classList.add("marked");
      console.log(task.taskTitle);
    }
    if (task.isCompleted === true) {
      checkmark.classList.add("completed");
    }
    //give button functionality
    importantIcon.addEventListener("click", () => {
      importantIcon.classList.toggle("material-icons");
      importantIcon.classList.toggle("marked");

      if (importantIcon.classList.contains("marked")) {
        tasks[index].isImportant = true;
        console.log("is Important");
      } else {
        tasks[index].isImportant = false;
        console.log("Is not important");
      }
    });

    checkmark.addEventListener("click", () => {
      checkmark.classList.toggle("completed");

      if (checkmark.classList.contains("completed")) {
        tasks[index].isCompleted = true;
      } else {
        tasks[index].isCompleted = false;
      }
      console.log(tasks);
    });

    const modal = document.getElementById("modal");
    const closeBtn = document.getElementsByClassName("close")[0];
    // INFO BUTTON CALLS SHOWS DIALOG FOR THAT ITEM
    infoIcon.addEventListener("click", () => {
      // const modal = document.getElementById('modal')
      // const infoIcon = document.getElementById('infoIcon');
      // const closeBtn = document.getElementsByClassName('close')[0];
      const titleP = document.querySelector(".titleP");
      const descriptionP = document.querySelector(".descriptionP");
      const projectP = document.querySelector(".projectP");
      const dateP = document.querySelector(".dateP");

      titleP.innerHTML = `<span class="material-symbols-outlined modalIcon">title</span>${task.taskTitle}`;

      descriptionP.innerHTML = `<span class="material-symbols-outlined modalIcon">description</span
      >${task.taskDetails}`;

      projectP.innerHTML = `<span class="material-symbols-outlined modalIcon">tactic</span
      >${task.projectName}`;

      dateP.innerHTML = `<span class="material-symbols-outlined modalIcon">calendar_month</span>${task.dueDate}`;

      modal.style.display = "block";
      console.log("infoIcon EVENT LISTENER");
    });

    closeBtn.addEventListener("click", function () {
      modal.style.display = "none";
    });

    /// DELETE BUTTON
    deleteBtn.addEventListener("click", () => {
      console.log("Calling Delete Button");
      tasks.splice(index, 1);
      console.log(tasks);
      displayAll();
    });
  }
  // function to add selection "project option" to listForm
  function addSelectiontoListForm() {
    const projects = getProjectOptions();
    const selectElement = document.querySelector(".projectList");
    console.log("SELECT ELEMENT", selectElement);
    projects.forEach((project) => {
      const option = document.createElement("option");
      option.classList.add("option");
      option.textContent = project;

      console.log(selectElement);
      // selectElement.appendChild(option);
    });
  }

  // Display New Task Form
  addButton.addEventListener("click", () => {
    // append to account for div clearance
    taskList.append(listForm);
    addSelectiontoListForm();
    console.log("LIST FORM", listForm);
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
    let projectName = document.getElementById("projectDropdown").value;
    const selectElement = document.querySelector("#projectDropdown");
    selectElement.innerHTML = "";

    console.log("This is the date", date);
    console.log("THIS IS THE PROJECT NAME", projectName);
    const addTask = newTask(taskID, title, details, date, projectName);
    tasks.push(addTask);
    listForm.reset();
    listForm.classList.toggle("show-form");
    console.log(tasks);

    // get the index for newly pushed item
    let lastIndex = tasks.length - 1;
    addTaskContent(addTask, lastIndex);
  });

  // Cancel submission and clear fields
  cancelButton.addEventListener("click", () => {
    const selectElement = document.querySelector("#projectDropdown");
    selectElement.innerHTML = ""; // need tp fix this
    console.log("CANCEL BUTTON SELECT ELEMENT", selectElement);
    listForm.classList.toggle("show-form");
    console.log(".show-form class removed");
    listForm.reset();
  });

  // FUNCTION FOR CREATING A NEW PROJECT
  function newProject() {
    console.log(dropdownContent);
    const dropdownContainer = dropdownContent;
    const lastChild = document.querySelector(".addProject");
    const newProjectDiv = document.createElement("a");
    const newInput = document.createElement("input");

    newInput.setAttribute("type", "text");
    newInput.setAttribute("id", "projectTitle");
    newInput.setAttribute("placeholder", "New Project");

    newInput.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        event.preventDefault();
        const projectTitle = newInput.value;
        if (projectTitle.trim() !== "") {
          // add project title to projectsArray
          projectOptions.push(projectTitle);

          addNewProject(projectTitle);
          dropdownContainer.removeChild(newProjectDiv);
        }
      }
    });

    newProjectDiv.appendChild(newInput);
    dropdownContainer.insertBefore(newProjectDiv, lastChild);
    console.log("Running newProject() function");
  }

  function addNewProject(projectTitle) {
    const dropdownContainer = dropdownContent;
    const newProjectLink = document.createElement("a");
    newProjectLink.setAttribute("class", "button");
    newProjectLink.setAttribute("href", "#");
    newProjectLink.textContent = projectTitle;

    dropdownContainer.insertBefore(
      newProjectLink,
      document.querySelector(".addProject")
    );

    updateButtonEventListeners();
    console.log(projectOptions);
  }

  //DUMMY DATA
  tasks.push(
    newTask(1, "Clean Room", "runnning", "2024-01-10", "House Chores")
  );
  tasks.push(
    newTask(2, "Buy Groceries", "Costco", "2024-01-11", "House Chores")
  );
  tasks.push(
    newTask(3, "Paint room", "start with wall", "2024-01-11", "Coding")
  );
  tasks.push(newTask(4, "Oil Change", "at pep boys", "2024-01-15", "Coding"));

  return {
    getTasks,
    addTaskContent,
    newProject,
  };
};

export { loadModule };
