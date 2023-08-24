const listCategories = document.querySelector('#categories')
console.log(`Number of categories: ${listCategories.children.length}`)

const itemCategoriesAll = document.querySelectorAll('.item')
const itemCategoriesArray = Array.from(itemCategoriesAll)

function functionFirst(array) {
    array.forEach(element => {
        console.log(`Category: ${element.firstElementChild.textContent}\nElements: ${element.lastElementChild.children.length} `)
    });
}

functionFirst(itemCategoriesArray)