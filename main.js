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

    UsernameContainer = createInputContainerWrapper("Username", "Username", "fa-user", "", "username-input-id");
    EmailContainer = createInputContainerWrapper("Email", "Email", "fa-envelope", "", "email-input-id");
    PasswordContainer = createInputContainerWrapper("Password", "Password", "fa-key", "password", "password-input-id");

    newPasswordContainer.appendChild(UsernameContainer);
    newPasswordContainer.appendChild(EmailContainer);
    newPasswordContainer.appendChild(PasswordContainer);

    const saveButton = document.createElement("button");
    saveButton.classList.add("save-button");
    saveButton.textContent = "Save";        
    saveButton.addEventListener("click", () => {
        newPasswordContainer.remove();
    });

    newPasswordContainer.appendChild(saveButton);

    document.body.appendChild(newPasswordContainer);

    const toggleUsernameContainerButton = createToggleButton("toggle-username-container-button", "toggle-username-container-button", "toggle Username Container: ON", );
    newPasswordContainer.appendChild(toggleUsernameContainerButton);

    toggleUsernameContainerButton.addEventListener("click", handleToggle);

    const toggleEmailContainerButton = createToggleButton("toggle-email-container-button", "toggle-email-container-button", "toggle Email Container: ON", );
    newPasswordContainer.appendChild(toggleEmailContainerButton);

    toggleEmailContainerButton.addEventListener("click", handleToggle);

    const toggleShowPasswordButton = createToggleButton("toggle-show-password-button", "toggle-show-password-button", "", "fa-eye-slash");
    inputWrapper.appendChild(toggleShowPasswordButton);

    toggleShowPasswordButton.addEventListener("click", handleToggle);
    }

}

function createInputContainerWrapper(placeholderText, headlineText, iconClass, type, id) {

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
    input.id = id;

    const inputIcon = document.createElement("i");
    inputIcon.classList.add("fas", iconClass);

    inputContainerWrapper.appendChild(inputHeadline);
    inputContainerWrapper.appendChild(inputWrapper);
    
    inputWrapper.appendChild(input);
    inputWrapper.appendChild(inputIcon);

    return inputContainerWrapper;
}   

function createToggleButton(classList, id, textContent, iconClass) {
    const toggleButton = document.createElement("button");
    toggleButton.classList.add(classList);
    toggleButton.id = id;
    toggleButton.textContent = textContent;
    
    const buttonIcon = document.createElement("i");
    buttonIcon.classList.add("fas", iconClass);
    toggleButton.appendChild(buttonIcon);

    return toggleButton;
}

function handleToggle(event) {
    var button = null;
    if (event.target.classList.contains("fas")) {
        button = event.target.offsetParent;
    } else {
        button = event.target;
    }
    button.classList.toggle("active");

    const icon = button.querySelector("i");

    if(button.classList.contains("active")) {
        switch(button.id) {
            case "toggle-username-container-button":
                UsernameContainer.style.display = "none";
                
                break;

            case "toggle-email-container-button":
                EmailContainer.style.display = "none";
                break;

            case "toggle-show-password-button":
                document.getElementById("password-input-id").type = "text";
                if (icon) {
                    icon.classList.remove("fa-eye-slash");
                    icon.classList.add("fa-eye");
                }
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
                document.getElementById("password-input-id").type = "password";
                if (icon) {
                    icon.classList.remove("fa-eye");
                    icon.classList.add("fa-eye-slash");
                }
                break;

            default:
                break;
        }
    }
}

document.getElementById("add-password-button").addEventListener("click", createNewPasswordContainerOnClick);
