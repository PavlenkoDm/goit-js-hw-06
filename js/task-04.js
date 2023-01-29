let counterValue = 0;

const btnDecrementEl = document.querySelector('button[data-action = "decrement"]');
const btnIncrementEl = document.querySelector('button[data-action = "increment"]');
const counterEl = document.querySelector('#value');


btnDecrementEl.addEventListener('click', onDecrease);
btnIncrementEl.addEventListener('click', onIncrease);


function onDecrease(event) {
    checkTarget(event);

    counterValue -= 1;
    counterEl.textContent = counterValue;
}

function onIncrease(event) {
    checkTarget(event);

    counterValue += 1;
    counterEl.textContent = counterValue;
}

function checkTarget(someEvent) {
    if (!someEvent.currentTarget) {
        return;
    }
}
