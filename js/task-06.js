const inputMain = document.querySelector('#validation-input')

const checkingFunction = (event) => {
    const inputValue = event.currentTarget.value;
    if (inputValue.length == inputMain.dataset.length) {
        inputMain.className = 'valid'
    }
    else {
        inputMain.className = 'invalid'
    }
}

inputMain.addEventListener("blur", checkingFunction)