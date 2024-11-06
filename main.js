var newPasswordContainer = null;
var inputWrapper = null;
var usernameContainer = null;
var emailContainer = null;
var passwordContainer = null;
var inputId = 0;


function createNewPasswordContainerOnClick() {

    if (!document.querySelector(".container.new-password-container")) {

        newPasswordContainer = document.createElement("div");
        newPasswordContainer.classList.add("container", "new-password-container");

        const closeButton = document.createElement("button");
        closeButton.classList.add("close-button");
        closeButton.textContent = "x";
        closeButton.addEventListener("click", () => {
            newPasswordContainer.remove();
        });

        const usernameMapper = createInputContainerWrapper("Username", "Username", "fa-user", "", "username-input-id");
        usernameContainer = usernameMapper.wrapper;
        const usernameInput = usernameMapper.input;

        const emailMapper = createInputContainerWrapper("Email", "Email", "fa-envelope", "", "email-input-id");
        emailContainer = emailMapper.wrapper;
        const emailInput = emailMapper.input;


        const passwordMapper = createInputContainerWrapper("Password", "Password", "fa-key", "password", "password-input-id");
        passwordContainer = passwordMapper.wrapper;
        const passwordInput = passwordMapper.input;

        const saveButton = document.createElement("button");
        saveButton.classList.add("save-button");
        saveButton.textContent = "Save";
        saveButton.addEventListener("click", () => {
            newPasswordContainer.remove();
            createCredentialsContainer(usernameInput.value, emailInput.value, passwordInput.value);
        });

        const toggleUsernameContainerButton = createToggleButton("toggle-username-container-button", "toggle-username-container-button-id", "Include Username?", "fa-check");

        toggleUsernameContainerButton.addEventListener("click", handleToggle);

        const toggleEmailContainerButton = createToggleButton("toggle-email-container-button", "toggle-email-container-button-id", "Include Email?", "fa-check");

        toggleEmailContainerButton.addEventListener("click", handleToggle);

        const toggleShowPasswordButton = createToggleButton("toggle-show-password-button", "toggle-show-password-button-id", "", "fa-eye-slash");

        toggleShowPasswordButton.addEventListener("click", handleToggle);

        newPasswordContainer.appendChild(closeButton);

        newPasswordContainer.appendChild(usernameContainer);
        newPasswordContainer.appendChild(emailContainer);
        newPasswordContainer.appendChild(passwordContainer);

        newPasswordContainer.appendChild(saveButton);

        newPasswordContainer.appendChild(toggleUsernameContainerButton);
        newPasswordContainer.appendChild(toggleEmailContainerButton);
        inputWrapper.appendChild(toggleShowPasswordButton);

        document.body.appendChild(newPasswordContainer);

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

    return {
        wrapper: inputContainerWrapper,
        input: input
    };
}

function createToggleButton(classList, id, textContent, iconClass) {
    const toggleButton = document.createElement("button");
    toggleButton.classList.add(classList.split("_")[0]);
    toggleButton.id = id;
    toggleButton.textContent = textContent;

    const buttonIcon = document.createElement("i");
    buttonIcon.classList.add("fas", iconClass);

    toggleButton.appendChild(buttonIcon);

    return toggleButton;
}

function handleToggle(event) {
    const button = event.currentTarget;
    button.classList.toggle("active");
    const icon = button.querySelector("i");
    const extractId = button.id.split("_")[1];

    if (button.classList.contains("active")) {
        switch (button.id) {
            case "toggle-username-container-button-id":

                usernameContainer.style.display = "none";
                if (icon) {
                    icon.classList.remove("fa-check");
                    icon.classList.add("fa-xmark");
                }

                break;

            case "toggle-email-container-button-id":

                emailContainer.style.display = "none";
                if (icon) {
                    icon.classList.remove("fa-check");
                    icon.classList.add("fa-xmark");
                }
                
                break;

            case "toggle-show-password-button-id":

                document.getElementById("password-input-id").type = "text";
                if (icon) {
                    icon.classList.remove("fa-eye-slash");
                    icon.classList.add("fa-eye");
                }
                break;

            case "toggle-show-password-button-small-id_" + extractId:

                document.getElementById("credential-password-input-id_" + extractId).type = "text";
                if (icon) {
                    icon.classList.remove("fa-eye-slash");
                    icon.classList.add("fa-eye");
                }
                break;

            case "edit-credentials-button-id_" + extractId:

                document.getElementById("credential-username-input-id_" + extractId).readOnly = false;
                document.getElementById("credential-email-input-id_" + extractId).readOnly = false;
                document.getElementById("credential-password-input-id_" + extractId).readOnly = false;

                document.getElementById("credential-username-input-id_" + extractId).focus();

                document.getElementById("credential-username-input-id_" + extractId).addEventListener("keydown", (event) => {
                    if (event.key === "Enter") {
                        document.getElementById("credential-email-input-id_" + extractId).focus();
                        event.preventDefault();
                    }
                })
                document.getElementById("credential-email-input-id_" + extractId).addEventListener("keydown", (event) => {
                    if (event.key === "Enter") {
                        document.getElementById("credential-password-input-id_" + extractId).focus();
                        event.preventDefault();
                    }
                })
                document.getElementById("credential-password-input-id_" + extractId).addEventListener("keydown", (event) => {
                    if (event.key === "Enter") {
                        document.getElementById("credential-username-input-id_" + extractId).readOnly = true;
                        document.getElementById("credential-email-input-id_" + extractId).readOnly = true;
                        document.getElementById("credential-password-input-id_" + extractId).readOnly = true;
                        button.classList.remove("active");
                    }
                })

            default:
                break;
        }
    }

    else {
        switch (button.id) {
            case "toggle-username-container-button-id":
                
                usernameContainer.style.display = "block";
                if (icon) {
                    icon.classList.remove("fa-xmark");
                    icon.classList.add("fa-check");
                }

                break;

            case "toggle-email-container-button-id":

                emailContainer.style.display = "block";
                if (icon) {
                    icon.classList.remove("fa-xmark");
                    icon.classList.add("fa-check");
                }

                break;

            case "toggle-show-password-button-id":

                document.getElementById("password-input-id").type = "password";
                if (icon) {
                    icon.classList.remove("fa-eye");
                    icon.classList.add("fa-eye-slash");
                }

                break;

            case "toggle-show-password-button-small-id_" + extractId:

                document.getElementById("credential-password-input-id_" + extractId).type = "password";
                if (icon) {
                    icon.classList.remove("fa-eye");
                    icon.classList.add("fa-eye-slash");
                }

                break;

            case "edit-credentials-button-id_" + extractId:

                document.getElementById("credential-username-input-id_" + extractId).readOnly = true;
                document.getElementById("credential-email-input-id_" + extractId).readOnly = true;
                document.getElementById("credential-password-input-id_" + extractId).readOnly = true;

            default:
                break;
        }
    }
}

function createCredentialsContainer(usernameInputValue, emailInputValue, passwordInputValue) {

    const mainContainer = document.getElementById("main-container-id");

    const credentialsContainer = document.createElement("div");
    credentialsContainer.classList.add("container", "credentials-container");


    const credentialUsernameContainer = createCredentialContainer("fa-user", "Username: ", usernameInputValue, "username");
    const credentialEmailContainer = createCredentialContainer("fa-envelope", "Email: ", emailInputValue, "email");
    const credentialPasswordContainer = createCredentialPasswordContainer(passwordInputValue);

    const editCredentialsButton = createToggleButton(`edit-credentials-button_${inputId + 1}`, `edit-credentials-button-id_${inputId}`, "", "fa-pencil");

    editCredentialsButton.addEventListener("click", handleToggle);

    credentialsContainer.appendChild(credentialUsernameContainer);
    credentialsContainer.appendChild(credentialEmailContainer);
    credentialsContainer.appendChild(credentialPasswordContainer);
    credentialsContainer.appendChild(editCredentialsButton);

    mainContainer.appendChild(credentialsContainer);
}

function createCredentialContainer(iconClass, text, inputValue, idName) {

    const credentialContainer = document.createElement("div");
    credentialContainer.classList.add("credential-container");

    const credentialIcon = document.createElement("i");
    credentialIcon.classList.add("fas", iconClass);

    const credentialText = document.createElement("div")
    credentialText.textContent = text;
    credentialText.style.paddingLeft = "10px";
    credentialText.style.paddingRight = "10px";

    const credentialInput = document.createElement("input");
    credentialInput.classList.add("credential-container");
    credentialInput.value = inputValue;
    credentialInput.readOnly = true;
    credentialInput.id = `credential-${idName}-input-id_${inputId + 1}`;

    credentialContainer.appendChild(credentialIcon);
    credentialContainer.appendChild(credentialText);
    credentialContainer.appendChild(credentialInput);

    return credentialContainer;
}

function createCredentialPasswordContainer(inputValue) {

    const credentialPasswordContainer = document.createElement("div");
    credentialPasswordContainer.classList.add("credential-container");

    const credentialPasswordIcon = document.createElement("i");
    credentialPasswordIcon.classList.add("fas", "fa-key");

    const credentialPasswordText = document.createElement("div");
    credentialPasswordText.textContent = "Password: ";
    credentialPasswordText.style.paddingLeft = "10px";
    credentialPasswordText.style.paddingRight = "10px";

    const credentialPasswordInput = document.createElement("input");
    credentialPasswordInput.classList.add("credential-container");
    credentialPasswordInput.type = "password";
    credentialPasswordInput.value = inputValue;
    credentialPasswordInput.readOnly = true;
    credentialPasswordInput.id = `credential-password-input-id_${inputId + 1}`;

    const credentialPasswordButton = createToggleButton(`toggle-show-password-button-small_${inputId + 1}`, `toggle-show-password-button-small-id_${inputId + 1}`, "", "fa-eye-slash");

    credentialPasswordButton.addEventListener("click", handleToggle);

    credentialPasswordContainer.appendChild(credentialPasswordIcon);
    credentialPasswordContainer.appendChild(credentialPasswordText);
    credentialPasswordContainer.appendChild(credentialPasswordInput);
    credentialPasswordContainer.appendChild(credentialPasswordButton);
    inputId++;

    return credentialPasswordContainer;
}

document.getElementById("add-password-button").addEventListener("click", createNewPasswordContainerOnClick);

document.querySelector(".main-container").classList.add("container"); 