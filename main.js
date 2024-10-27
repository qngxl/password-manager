
function createNewPasswordContainerOnClick() {
    if(!document.querySelector(".container.new-password")) {

    const newPasswordContainer = document.createElement("div");

    newPasswordContainer.classList.add("container", "new-password");
    newPasswordContainer.textContent = "created new passord";

    const saveButton = document.createElement("button");

    saveButton.classList.add("rectangular-button");
    saveButton
    saveButton.textContent = "Save";
    saveButton.addEventListener("click", () => {
        newPasswordContainer.remove();
    });

    newPasswordContainer.appendChild(saveButton);
    document.body.appendChild(newPasswordContainer);
    }
}

document.getElementById("add-password-button").addEventListener("click", createNewPasswordContainerOnClick);
