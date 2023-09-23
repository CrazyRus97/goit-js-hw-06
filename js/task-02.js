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
  const ingredientsArr = ingredients.map(ingredient => `<li style="display:'flex'; flex-direction:column; class="item">${ingredient}</li>`).join("");
  // ingredients.forEach(ingredient => {
  //   const liList = document.createElement('li')
  //   liList.textContent = ingredient
  //   liList.className = 'item'
  //   mainUlList.append(liList)
    mainUlList.insertAdjacentHTML("afterbegin", ingredientsArr)
  // });
}

secondFunction(ingredients)