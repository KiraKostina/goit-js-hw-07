const inputAmount = document.querySelector('#controls > input');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const boxes = document.querySelector('#boxes');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const color = getRandomHexColor();


createBtn.addEventListener("click", event => {
    if (inputAmount >= 0 && inputAmount <= 100) { 
        function createBoxes(amount) {
            

    }
    }
    

 })

destroyBtn.addEventListener("click", event => { 

})

// .innerHTML = очищення