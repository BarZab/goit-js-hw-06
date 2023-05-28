const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients')

function addingIngredients() {
  for (const ingredient of ingredients) {
    const item = document.createElement('li');
    item.textContent = ingredient
    item.classList.add('item')
    ingredientsList.append(item)
  }
}

console.log(addingIngredients())