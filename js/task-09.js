function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.querySelector("body");
const btnChangeColorEl = document.querySelector(".change-color");
const bgcTitle = bodyEl.querySelector(".color");


btnChangeColorEl = addEventListener("click", onChangeColor);


function onChangeColor(event) {
  const colorRandom = getRandomHexColor();

  bodyEl.style.backgroundColor = colorRandom;

  bgcTitle.textContent = colorRandom;
}

