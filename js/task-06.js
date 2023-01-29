const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', onCheckSymbolAmount);

function onCheckSymbolAmount(event) {
    inputEl.classList.remove("invalid");
    inputEl.classList.remove("valid");
    if (inputEl.value.length >= 1 && inputEl.value.length !== 6) inputEl.classList.add("invalid");
    if (inputEl.value.length === 6) inputEl.classList.add("valid");
}