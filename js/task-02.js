const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
  
];
const ulEl = document.querySelector('#ingredients');
const titlEl = document.querySelector('li');
const elements = ingredients.map(ingredient => {
  const titlEl = document.createElement('li')
  titlEl.classList.add('item');
  titlEl.textContent = ingredient;
  console.log(titlEl);
  return titlEl;

});
console.log(elements);
ulEl.append(...elements);