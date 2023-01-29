const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingridientsListEl = document.querySelector("#ingredients");

const makeIngridients = (someArr) => {
  
  const arrOfItems = someArr.map(ingridient => {
    const element = document.createElement("li");
    element.textContent = ingridient;
    element.classList.add("item");
    return element;
  });
  
  ingridientsListEl.append(...arrOfItems);
}

makeIngridients(ingredients);
