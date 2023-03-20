const refs = {
    input: document.querySelector("#validation-input"),
};

refs.input.addEventListener('blur', onInputChange);

let valueLength = 0;
   
function onInputChange(event) {
    valueLength = event.currentTarget.value.length; 
    console.log(event.currentTarget.value.length);
    if (valueLength < 6 || valueLength > 6) {
        refs.input.classList.add("invalid");
        
    } else { refs.input.classList.replace("invalid", "valid") };
 
};

