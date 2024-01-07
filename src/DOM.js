// This is a module pattern
const getElements = function () {
  const getTitle = (title) => {
    const titleElement = document.querySelector(".title");
    titleElement.textContent = title;
    return true;
  };
  const getTaskList = () => {
    const addList = document.querySelector(".add-list");
    console.log("grabbing-task");
    return addList;
  };

  const getAddTaskBtn = () => {
    const addBtn = document.querySelector(".add-task-btn");
    return addBtn;
  };

  return {
    getTitle,
    getTaskList,
    getAddTaskBtn,
  };
};

// ES6 module
function changeTitle(title) {
  const titleElement = document.querySelector(".title");
  titleElement.textContent = title;
  console.log("coming from function");
}

export { getElements, changeTitle };
