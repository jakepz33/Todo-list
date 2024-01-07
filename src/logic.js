import { getElements, changeTitle } from "./DOM";

const loadModule = function () {
  const buttons = document.querySelectorAll(".button");
  console.log(buttons);
  let title = getElements();
  const addButton = title.getAddTaskBtn();

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
