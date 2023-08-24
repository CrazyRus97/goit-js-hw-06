function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const buttonMain = document.querySelector('.change-color')
const bodyMain = document.querySelector('body')
const spanMain = document.querySelector('.color')

const btnHandler = (event) => {
  spanMain.textContent = getRandomHexColor()
  bodyMain.style.backgroundColor = getRandomHexColor()
}

buttonMain.addEventListener("click", btnHandler)
