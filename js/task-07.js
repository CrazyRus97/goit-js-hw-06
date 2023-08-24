const inputMain = document.querySelector('#font-size-control')
const textMain = document.getElementById('text')

const eventFunction = (event) => {
    const inputValue = event.currentTarget.value
    console.log(inputValue)
    textMain.style.fontSize = `${inputValue}px`
}

inputMain.addEventListener("input", eventFunction)