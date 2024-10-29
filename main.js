
function createNewPasswordContainerOnClick() {

    if(!document.querySelector(".container.new-password-container")) {

    const newPasswordContainer = document.createElement("div");
    newPasswordContainer.classList.add("container", "new-password-container");

    const inputLabels = ["Username", "Email", "Password"];

    inputLabels.forEach(label => {   

    const inputContainerWrapper = document.createElement("div");
    inputContainerWrapper.classList.add("input-container-wrapper");

    const inputHeadline = document.createElement("h1");
    inputHeadline.classList.add("input-headline");
    inputHeadline.textContent = label;  

    const inputWrapper = document.createElement("input");
    inputWrapper.classList.add("input-wrapper");

    inputContainerWrapper.appendChild(inputHeadline);
    inputContainerWrapper.appendChild(inputWrapper);

    newPasswordContainer.appendChild(inputContainerWrapper);
    });

    const closeButton = document.createElement("button");
    closeButton.classList.add("close-button");
    closeButton.textContent = "x";
    closeButton.addEventListener("click", () => {
        newPasswordContainer.remove();
    });

    newPasswordContainer.appendChild(closeButton);


    const saveButton = document.createElement("button");
    saveButton.classList.add("rectangular-button");
    saveButton.textContent = "Save";
    saveButton.addEventListener("click", () => {
        newPasswordContainer.remove();
    });

    newPasswordContainer.appendChild(saveButton);

    document.body.appendChild(newPasswordContainer);
    }
}

document.getElementById("add-password-button").addEventListener("click", createNewPasswordContainerOnClick);
