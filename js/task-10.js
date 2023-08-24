function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonCreate = document.querySelector('[data-create]')
const buttonDestroy = document.querySelector('[data-destroy]')
const inputMain = document.querySelector('input')
const divBoxesMain = document.querySelector('#boxes')
let BOXES_COUNTER = 0;


const inputHandler = (event) => {
  BOXES_COUNTER = event.currentTarget.value
  console.log(BOXES_COUNTER)
}
inputMain.addEventListener("input", inputHandler)



const createBoxes = (event) => {
  let result = [];
  let PARAMETERS = 30;
  for (let i = 1; i <= BOXES_COUNTER; i++) {
    let div = document.createElement('div');
    div.style.backgroundColor = getRandomHexColor()
    div.style.width = `${PARAMETERS}px`
    div.style.height = `${PARAMETERS}px`
    PARAMETERS += 10
    result.push(div);
  }
  divBoxesMain.append(...result)
}
buttonCreate.addEventListener("click", createBoxes)



const destroyBoxes = (event) => {
  divBoxesMain.innerHTML = ''
}
buttonDestroy.addEventListener("click", destroyBoxes)


