const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', onCheckSymbolAmount);

function onCheckSymbolAmount(event) {
    inputEl.classList.remove("invalid", "valid");
    
    if (inputEl.value.length === Number(inputEl.dataset.length)) {
        inputEl.classList.add("valid")
    } else {
        inputEl.classList.add("invalid")
    };
}