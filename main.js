var newPasswordContainer = null;
var inputWrapper = null;
var UsernameContainer = null;
var EmailContainer = null;
var PasswordContainer = null;

function createNewPasswordContainerOnClick() {

    if(!document.querySelector(".container.new-password-container")) {

    newPasswordContainer = document.createElement("div");
    newPasswordContainer.classList.add("container", "new-password-container");

    const closeButton = document.createElement("button");
    closeButton.classList.add("close-button");
    closeButton.textContent = "x";
    closeButton.addEventListener("click", () => {
        newPasswordContainer.remove();
    });

    newPasswordContainer.appendChild(closeButton);

    UsernameContainer = createInputContainerWrapper("Username", "Username", "fa-user");
    EmailContainer = createInputContainerWrapper("Email", "Email", "fa-envelope");
    PasswordContainer = createInputContainerWrapper("Password", "Password", "fa-key", "password");

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

    const toggleUsernameContainerButton = passButtonProperties("toggle-username-container-button", "toggle-username-container-button", "a");
    newPasswordContainer.appendChild(toggleUsernameContainerButton);

    toggleUsernameContainerButton.addEventListener("click", handleToggle);

    const toggleEmailContainerButton = passButtonProperties("toggle-email-container-button", "toggle-email-container-button", "b");
    newPasswordContainer.appendChild(toggleEmailContainerButton);

    toggleEmailContainerButton.addEventListener("click", handleToggle);

    const toggleShowPasswordButton = passButtonProperties("toggle-show-password-button", "toggle-show-password-button", "c");
    inputWrapper.appendChild(toggleShowPasswordButton);

    toggleShowPasswordButton.addEventListener("click", handleToggle);
    }

}

function createInputContainerWrapper(placeholderText, headlineText, iconClass, type) {

    const inputContainerWrapper = document.createElement("div");
    inputContainerWrapper.classList.add("input-container-wrapper");

    inputWrapper = document.createElement("div");
    inputWrapper.classList.add("input-wrapper");

    const inputHeadline = document.createElement("h1");
    inputHeadline.classList.add("input-headline");
    inputHeadline.textContent = headlineText;

    const input = document.createElement("input");
    input.classList.add("input-wrapper");
    input.placeholder = placeholderText;
    input.type = type;
    input.id = "input-inside-input-wrapper";

    const icon = document.createElement("i");
    icon.classList.add("fas", iconClass);

    inputContainerWrapper.appendChild(inputHeadline);
    inputContainerWrapper.appendChild(inputWrapper);
    
    inputWrapper.appendChild(input);
    inputWrapper.appendChild(icon);

    return inputContainerWrapper;
}   

function passButtonProperties(classList, id, textContent) {
    const passButtonProperties = document.createElement("button");
    passButtonProperties.classList.add(classList);
    passButtonProperties.id = id;
    passButtonProperties.textContent = textContent;

    return passButtonProperties;
}

function handleToggle(event) {
    const button = event.target;
    button.classList.toggle("active");

    if(button.classList.contains("active")) {
        switch(button.id) {
            case "toggle-username-container-button":
                UsernameContainer.style.display = "none";
                break;

            case "toggle-email-container-button":
                EmailContainer.style.display = "none";
                break;

            case "toggle-show-password-button":
                document.getElementById("input-inside-input-wrapper").type = "text";
                break;
            default:
                break;
        }
    }

    else {
        switch(button.id) {
            case "toggle-username-container-button":
                UsernameContainer.style.display = "block";
                break;

            case "toggle-email-container-button":
            	EmailContainer.style.display = "block";
                break;

            case "toggle-show-password-button":
                document.getElementById("input-inside-input-wrapper").type = "password";
                break;

            default:
                break;
        }

    }
}

document.getElementById("add-password-button").addEventListener("click", createNewPasswordContainerOnClick);
