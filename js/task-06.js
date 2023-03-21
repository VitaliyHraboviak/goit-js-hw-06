const refs = {
    input: document.querySelector("#validation-input"),
};

refs.input.addEventListener('blur', onInputChange);
const dataLength = refs.input.dataset.length;
let valueLength = 0;
function onInputChange(event) {
    valueLength = event.currentTarget.value.length; 
    console.log(event.currentTarget.value.length);
    if (valueLength < dataLength || valueLength > dataLength) {
        refs.input.classList.add("invalid");
        
    } else { refs.input.classList.replace("invalid", "valid") };
 
};

