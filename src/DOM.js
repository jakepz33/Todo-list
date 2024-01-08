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

  const getForm = () => {
    const formList = document.querySelector("#listForm");
    return formList;
  };

  const getCancelBtn = () => {
    const cancelBtn = document.querySelector(".listCancelBtn");
    return cancelBtn;
  };

  const getSubmitBtn = () => {
    const submitBtn = document.querySelector(".listSubmitBtn");
    return submitBtn;
  };

  return {
    getTitle,
    getTaskList,
    getAddTaskBtn,
    getForm,
    getCancelBtn,
    getSubmitBtn,
  };
};

// ES6 module
function changeTitle(title) {
  const titleElement = document.querySelector(".title");
  titleElement.textContent = title;
  console.log("coming from function");
}

export { getElements, changeTitle };
