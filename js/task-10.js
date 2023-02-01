function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function createBoxes(amount) {
  let parameterOfCreatedElement = 30;
  const arrOfCreatedElements = [];

  for (let i = 0; i < amount; i += 1) {
    const createdElement = document.createElement("div");
    createdElement.style.width = parameterOfCreatedElement + "px";
    createdElement.style.height = parameterOfCreatedElement + "px";
    parameterOfCreatedElement += 10;
    createdElement.style.backgroundColor = getRandomHexColor();
    arrOfCreatedElements.push(createdElement);
  }

  return arrOfCreatedElements;
}


const inputNumberEl = document.querySelector("[type = 'number']");
const btnCreateEl = document.querySelector("[data-create]");
const btnDestroyEl = document.querySelector("[data-destroy]");
const boxesEl = document.querySelector("#boxes");

btnCreateEl.addEventListener("click", onCreate);
btnDestroyEl.addEventListener("click", onDestroy);


// Handlers--------------------------------------------------
function onCreate(event) {
  const elements = createBoxes(inputNumberEl.value);
  boxesEl.append(...elements);
}

function onDestroy(event) {
  boxesEl.innerHTML = "";
}
