function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorBtn = document.querySelector('.change-color');

const spanEl = document.querySelector('.color');

const bodyEl = document.body;


const onChangeColor = () => {
  
  spanEl.textContent  = getRandomHexColor();
  bodyEl.style.backgroundColor = spanEl.textContent;
}

changeColorBtn.addEventListener("click", onChangeColor);
