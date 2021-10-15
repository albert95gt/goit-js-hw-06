const inputEl = document.querySelector('#validation-input');

const onValidationInput = (element) => {
    
    if (element.currentTarget.value.length >= inputEl.dataset.length) {
        
        element.currentTarget.classList.add("valid");
        
        element.currentTarget.classList.remove("invalid");
    }  else {
        
        element.currentTarget.classList.add("invalid");
        
        element.currentTarget.classList.remove("valid");
        
    }
}

inputEl.addEventListener("blur", onValidationInput);








