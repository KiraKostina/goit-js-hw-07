const registerForm = document.querySelector(".login-form");
registerForm.addEventListener("submit", event => { 
    event.preventDefault();
    if (event.target.elements.email.value === "" || event.target.elements.password.value=== "") {
    return alert("All form fields must be filled in");
  }

    login-form.reset();
})

