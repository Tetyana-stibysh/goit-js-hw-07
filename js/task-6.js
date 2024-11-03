const inputVl = document.querySelector("#controls > input");
const createBt = document.querySelector("button[data-create]");
const destroyBt = document.querySelector("button[data-destroy]");
const secondDiv = document.querySelector("#boxes");

inputVl.addEventListener("input", handlerInput);
createBt.addEventListener("click", handlerCreate);
destroyBt.addEventListener("click", handlerDestroy);

function handlerCreate(event) {
  secondDiv.innerHTML = "";
  if (valueInp >= 1 && valueInp <= 100) {
    let amountBoxes = 0;
    amountBoxes = createBoxes(valueInp);
    inputVl.value = "";
    console.log(inputVl.value);

    return amountBoxes;
  }
}
let valueInp;
function handlerInput(event) {
  valueInp = event.currentTarget.value;

  return valueInp;
}

function handlerDestroy(event) {
  secondDiv.innerHTML = "";
}

function createBoxes(amount) {
  let boxes;
  for (let i = 0; i < amount; i++) {
    boxes = document.createElement("div");
    secondDiv.append(boxes);
    boxes.classList.add("newBox");
    boxes.style.width = 30 + i * 10 + "px";
    boxes.style.height = 30 + i * 10 + "px";
    const colorBx = getRandomHexColor();
    boxes.style.backgroundColor = colorBx;
  }
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
