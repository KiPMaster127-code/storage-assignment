
const userNameInput = document.getElementById("username");
const saveButton = document.getElementById("save");
const clearButton = document.getElementById("clear");
const displayName = document.getElementById("display");


function updateDisplayName() {
  const savedName = localStorage.getItem("username");

  if (savedName) {
    displayName.textContent = `The saved name is: ${savedName}`;
    title.innerHTML = `Welcome, ${savedName}!`;
  } 
  else {
    displayName.textContent = "No name has been saved.";
    title.innerHTML = "Welcome, User";
  }
}


const handleSave = () => {
  const name = userNameInput.value.trim();
  if (name) {
    localStorage.setItem("username", name);
    updateDisplayName();
  } 
  else {
    alert("Please enter a name");
  }
};


const handleClear = () => {
  localStorage.removeItem("username");
  userNameInput.value = "";
  updateDisplayName();
};


saveButton.addEventListener("click", handleSave);
clearButton.addEventListener("click", handleClear);
window.addEventListener("DOMContentLoaded", displayUserName);