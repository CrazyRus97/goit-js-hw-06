const buttonDecrement = document.querySelector("button[data-action='decrement']")
const buttonIncrement = document.querySelector("button[data-action='increment']")
let changesValue = document.querySelector('#value')

let counterValue = 0

const buttonIncrementClick = () => {
    counterValue += 1
    changesValue.textContent = counterValue
}

const buttonDecrementClick = () => {
    counterValue -= 1
    changesValue.textContent = counterValue
}

buttonIncrement.addEventListener("click", buttonIncrementClick)
buttonDecrement.addEventListener("click", buttonDecrementClick)