const categoriesListEl = document.querySelector("#categories");


const findCategoriesAmount = () => {    
    console.log(`Number of categories: ${categoriesListEl.children.length}`);
    console.log("");
};

findCategoriesAmount();


const makeCategoryElements = () => {
  const categoriesChildrenArr = categoriesListEl.children;

  for (const item of categoriesChildrenArr) {
    const itemTitle = item.querySelector("h2");
    const itemList = item.querySelector("ul");

    console.log(`Category: ${itemTitle.textContent}`);
    console.log(`Elements: ${itemList.children.length}`);
    console.log("")
  }
};

makeCategoryElements();
