const form = document.querySelector('.login-form');
const textInput = document.querySelector('input');


form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    formData.forEach((value, name) => {
        console.log('onFormSubmit -> name', name);
        console.log('onFormSubmit -> value', value);
    });
    console.log(formData);
    const formElements = event.currentTarget.elements;
    const email = formElements.email.value;
    const password = formElements.password.value;
    if (email.length === 0) {
        alert('потрібно заповнити поле email');
    };
    if (password.length < 6) {
        alert('потрібно заповнити поле Password не менше 6 символів');
    };

    console.log(email, password);






};


form.addEventListener('submit', (onFormSubmit) => form.reset());

