
// Get user input
const form = document.getElementById('form');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');

// add event listener to check for error before submitting
form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

// Add error class / remove success class to field to change style color, display error message
const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

// Add success class / remove error class to field to change style color
const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

// Valid email checker I found browsing Javascript videos
const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

// Trim blank space from user iput
const validateInputs = () => {
    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const emailValue = email.value.trim();
    
// Check for empty or null fields, set succcess/error trigger
    if(firstNameValue === '' || firstNameValue === null) {
        setError(firstName, 'First name is required');
    } else {
        setSuccess(firstName);
    }

    
    if(lastNameValue === '' || lastNameValue === null) {
        setError(lastName, 'Last name is required');
    } else {
        setSuccess(lastName);
    }

    if(emailValue === '' || null) {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }


};
