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
  const getAllTab = () => {
    const allTab = document.querySelector(".button1");
    return allTab;
  };
  const getTodayTab = () => {
    const todayTab = document.querySelector(".button2");
    return todayTab;
  };
  const getWeekTab = () => {
    const weekTab = document.querySelector(".button3");
    return weekTab;
  };

  return {
    getTitle,
    getTaskList,
    getAddTaskBtn,
    getForm,
    getCancelBtn,
    getSubmitBtn,
    getAllTab,
    getTodayTab,
    getWeekTab,
  };
};

// ES6 module
function changeTitle(title) {
  const titleElement = document.querySelector(".title");
  titleElement.textContent = title;
  // console.log("coming from function");
}

export { getElements, changeTitle };
