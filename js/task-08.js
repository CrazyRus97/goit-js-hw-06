const formMain = document.querySelector('.login-form')

const submitHandler = (event) => {
    event.preventDefault();
    if (event.currentTarget.elements.email.value === '' || event.currentTarget.elements.password.value === '') {
        window.alert('All forms inputs must be added!')
    }
    else {
        const { email, password } = event.currentTarget.elements;
        const info = {
            email: email.value,
            password: password.value,
        }
        console.log(info)
    }

};

formMain.addEventListener("submit", submitHandler)
