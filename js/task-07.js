const refs = {
    input: document.querySelector('#font-size-control'),
    span: document.querySelector('#text'),
};


refs.input.addEventListener('input', onInputClick);

let valueLength = 0;
let fontSize = 0; 

function onInputClick(event) {
    valueLength = event.currentTarget.value;
    console.log(valueLength);
    fontSize =(`${valueLength}px`);
    refs.span.style.fontSize = fontSize;
console.log(refs.span.style.fontSize);    
};
