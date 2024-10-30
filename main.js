function createInputContainerWrapper(placeholderText, headlineText, iconClass) {

    const inputContainerWrapper = document.createElement("div");
    inputContainerWrapper.classList.add("input-container-wrapper");

    const inputWrapper = document.createElement("div");
    inputWrapper.classList.add("input-wrapper");

    const inputHeadline = document.createElement("h1");
    inputHeadline.classList.add("input-headline");
    inputHeadline.textContent = headlineText;

    const input = document.createElement("input");
    input.classList.add("input-wrapper");
    input.placeholder = placeholderText;

    const icon = document.createElement("i");
    icon.classList.add("fas", iconClass);

    inputContainerWrapper.appendChild(inputHeadline);
    inputContainerWrapper.appendChild(inputWrapper);
    
    inputWrapper.appendChild(input);
    inputWrapper.appendChild(icon);

    return inputContainerWrapper;
}   

function createNewPasswordContainerOnClick() {

    if(!document.querySelector(".container.new-password-container")) {

    const newPasswordContainer = document.createElement("div");
    newPasswordContainer.classList.add("container", "new-password-container");

    const closeButton = document.createElement("button");
    closeButton.classList.add("close-button");
    closeButton.textContent = "x";
    closeButton.addEventListener("click", () => {
        newPasswordContainer.remove();
    });

    newPasswordContainer.appendChild(closeButton);

    const UsernameContainer = createInputContainerWrapper("Username", "Username", "fa-user");
    const EmailContainer = createInputContainerWrapper("Email", "Email", "fa-envelope");
    const PasswordContainer = createInputContainerWrapper("Password", "Password", "fa-key");

    newPasswordContainer.appendChild(UsernameContainer);
    newPasswordContainer.appendChild(EmailContainer);
    newPasswordContainer.appendChild(PasswordContainer);

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


