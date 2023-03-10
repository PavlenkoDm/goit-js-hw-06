const formEl = document.querySelector(".login-form");
const inputEl = document.querySelector("[name='email']");
const passwordEl = document.querySelector("[name='password']");

formEl.addEventListener("submit", onSubmit);


function onSubmit(event) {
    event.preventDefault();

    if (!inputEl.value.trim() || !passwordEl.value.trim()) {
        alert("Всі поля мають бути заповнені");
        return;
    }

    const userData = {
        [inputEl.getAttribute("name")]: inputEl.value,
        [passwordEl.getAttribute("name")]: passwordEl.value
    }

    console.log(userData);

    event.currentTarget.reset();
}
