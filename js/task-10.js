const controls = document.querySelector('#controls');
const input = controls.firstElementChild;
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxes = document.querySelector('#boxes');


input.addEventListener("change", getAmount);
function getAmount(element) {
  
  const amount = Number(element.currentTarget.value);
  
  createBtn.addEventListener("click", createBoxes(amount));
}
  
  function createBoxes (amount) {
    
  for (let index = 0; index < amount; index++) {
    const newElement = `<div></div>`;

    boxes.insertAdjacentHTML("beforeend", newElement);
  }
}























function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
