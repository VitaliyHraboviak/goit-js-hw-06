const addListenerBtn = document.querySelector('button[data-action="decrement"]');
const removeListenerBtn = document.querySelector('button[data-action="increment"]');
const result = document.querySelector('#value');

console.log(addListenerBtn);
console.log(removeListenerBtn);
console.log(result);
let counterValue = 0;
addListenerBtn.addEventListener('click', () => {
    console.log('нажимаю на плю -1');
    counterValue -= 1
    console.log(counterValue);
    result.textContent = counterValue;
});
removeListenerBtn.addEventListener('click', () => {
    console.log('нажимаю на плю +1');
    counterValue += 1
    console.log(counterValue);
    result.textContent = counterValue;
});
