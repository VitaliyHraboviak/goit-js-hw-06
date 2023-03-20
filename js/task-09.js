const refs = {
 button: document.querySelector('.change-color'),
  body: document.querySelector('body'),
  span: document.querySelector('span'),
}
refs.button.addEventListener('click',(getRandomHexColor) => {
let newColor = getRandomHexColor();
 function getRandomHexColor(event) {
  return  `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
} 
console.log(newColor);
  refs.body.style.backgroundColor = newColor;
  refs.span.textContent = newColor;
});
