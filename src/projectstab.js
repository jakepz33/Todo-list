import { getElements, changeTitle } from "./DOM";

const domInstance = getElements();
const addProjectBtn = domInstance.getProjectAddBtn();

addProjectBtn.addEventListener("click", () => {
  console.log("Add project btn");
});
