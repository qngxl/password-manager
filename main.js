
function createNewPasswordContainerOnClick() {
    if(!document.querySelector(".container.new-password-container")) {

    const newPasswordContainer = document.createElement("div");

    newPasswordContainer.classList.add("container", "new-password-container");

    const inputContainerWrapper = document.createElement("div");

    inputContainerWrapper.classList.add("input-container-wrapper");

    const inputHeadline = document.createElement("h1");

    inputHeadline.classList.add("input-headline");
    inputHeadline.textContent = "test-headline";

    const inputWrapper = document.createElement("input");
    inputWrapper.classList.add("input-wrapper");


    const saveButton = document.createElement("button");

    saveButton.classList.add("rectangular-button");
    saveButton.textContent = "Save";
    saveButton.addEventListener("click", () => {
        newPasswordContainer.remove();
    });

    inputContainerWrapper.appendChild(inputHeadline);
    inputContainerWrapper.appendChild(inputWrapper);
    newPasswordContainer.appendChild(saveButton);
    newPasswordContainer.appendChild(inputContainerWrapper);
    document.body.appendChild(newPasswordContainer);
    }
}

document.getElementById("add-password-button").addEventListener("click", createNewPasswordContainerOnClick);
