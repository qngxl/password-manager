
function addPasswordButtonOnClick() {
    if(!document.querySelector(".container.create-password")) {
    const createPasswordContainer = document.createElement("div");
    createPasswordContainer.classList.add("container", "create-password");
    createPasswordContainer.textContent = "created new passord"
    document.body.appendChild(createPasswordContainer);
    }
}

document.getElementById("add-password-button").addEventListener("click", addPasswordButtonOnClick);

