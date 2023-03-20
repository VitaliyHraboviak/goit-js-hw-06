const navEl = document.querySelectorAll('.item');
console.log(`Number of categories: ${navEl.length}`);

const h2El = document.querySelectorAll('h2');
h2El.forEach((h2, index) => {    

    console.log(`Category:${h2.textContent}`);
    const liEl = navEl[index].querySelectorAll('li');
    console.log(`Elements:${liEl.length}`);

});