const nameInputEl = document.querySelector('#name-input');
const nameOutEl = document.querySelector('#name-output');

nameInputEl.addEventListener('input', onInput);


function onInput(event) {
    if (!event) nameOutEl.textContent = 'Anonymous';
    
    nameOutEl.textContent = nameInputEl.value;

    if (nameInputEl.value.length === 0) nameOutEl.textContent = 'Anonymous';
}


