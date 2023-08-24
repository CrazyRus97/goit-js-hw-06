const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const mainUlList = document.querySelector('#ingredients')

function secondFunction(ingredients) {
  ingredients.forEach(ingredient => {
    const liList = document.createElement('li')
    liList.textContent = ingredient
    liList.className = 'item'
    mainUlList.append(liList)
  });
}

secondFunction(ingredients)