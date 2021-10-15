const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];



const ingredientsEl = document.querySelector('#ingredients');

const createElements = element => {
  const itemEl = document.createElement('li');
  itemEl.textContent = element;
  return itemEl;
};
const elementListRef = ingredients.map(ingredient =>
  createElements(ingredient),
);

ingredientsEl.append(...elementListRef);

  






