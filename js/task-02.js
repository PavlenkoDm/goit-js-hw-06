const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];



const makeIngridients = (someArr) => {
  const ingridientsListEl = document.querySelector("#ingredients");

  const arrOfItems = someArr.map(ingridient => {
    const element = document.createElement("li");
    element.textContent = ingridient;
    element.classList.add("item");
    return element;
  });
  
  ingridientsListEl.append(...arrOfItems);
}

makeIngridients(ingredients);
