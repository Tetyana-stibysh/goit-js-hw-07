const inputValue = document.querySelector("#controls > input");
const createBt = document.querySelector("button[data-create]");
const destroyBt = document.querySelector("button[data-destroy]");
const secondDiv = document.querySelector("#boxes");

createBt.addEventListener("click", handlerCreate);
destroyBt.addEventListener("click", handlerDestoy);
let sizeBox = 30;

function handlerCreate(amount) {
  secondDiv.innerHTML = "";
  sizeBox = 30;
  if (+inputValue.value > 100 || +inputValue.value < 0) {
    return;
  }
  createBoxes(+inputValue.value);
}
function createBoxes(amount) {
  const arrayBoxes = [];
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${sizeBox}px`;
    box.style.height = `${sizeBox}px`;
    box.style.backgroundColor = getRandomHexColor();
    arrayBoxes.push(box);
    sizeBox += 10;
  }

  secondDiv.append(...arrayBoxes);
  inputValue.value = "";
}
function handlerDestoy() {
  secondDiv.innerHTML = "";
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
