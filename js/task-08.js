const formEl = document.querySelector('.login-form');

const onFormSubmit = (event) => {
    event.preventDefault();
    
    const inputElements = event.currentTarget.elements;
    
    if(inputElements.email.value === "" ||  inputElements.password.value === "") {
        alert("Все поля должны быть заполнены!!!");
    } else {
        const email = inputElements.email.value;
        const password = inputElements.password.value;
        
        const formData = {
            email,
            password,
        }
        console.log(formData);
        
    }
    event.currentTarget.reset();
}

formEl.addEventListener("submit",onFormSubmit);
