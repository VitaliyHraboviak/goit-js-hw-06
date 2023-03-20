let newColor = getRandomHexColor();
 function getRandomHexColor(event) {
  return  `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const refs = {
  divEl: document.querySelector('#boxes'),
  inputEl: document.querySelector('input'),
  buttonEl: document.querySelector('button[data-create]'),
};
  let amount = 0;
refs.buttonEl.addEventListener('click', (createBoxes) => {
  console.log(refs.inputEl.value);
  amount = Number.parseInt(refs.inputEl.value);
  console.log(amount);

  function createBoxes(amount) {
  
  const elements = createBoxes.map(createBox => {

    const navDivEl = document.createElement('div');
    console.log(refs.navDivEl);
    navDivEl.classList.add('new-div');
    navDivEl.style.backgroundColor = newColor;
    navDivEl.textContent = createBox;
    navDivEl.style.width = "30px";
    navDivEl.style.height = "30px";
    
    
    return navDivEl;
    console.log(navDivEl);
  });
   console.log(elements);
  navDivEl.append(...elements);

};  



});

 
  