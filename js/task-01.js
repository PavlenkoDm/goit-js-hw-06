const findCategoriesAmount = () => {
    const categoriesList = document.querySelector("#categories");
    console.log(`Number of categories: ${categoriesList.children.length}`);
    console.log("");
};

findCategoriesAmount();


const makeCategoryElements = () => {
  const categoriesList = document.querySelector("#categories");
  const categoriesChildrenArr = categoriesList.children;

  for (const item of categoriesChildrenArr) {
    const itemTitle = item.querySelector("h2");
    const itemList = item.querySelector("ul");

    console.log(`Category: ${itemTitle.textContent}`);
    console.log(`Elements: ${itemList.children.length}`);
    console.log("")
  }
};

makeCategoryElements();
