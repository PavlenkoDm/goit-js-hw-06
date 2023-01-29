const inputFontControlEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

inputFontControlEl.addEventListener('input', onRange);

function onRange(event) {
    textEl.style.fontSize = inputFontControlEl.value + "px";
}
