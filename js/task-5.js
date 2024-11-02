const bodySl = document.querySelector("body");
const spanColor = document.querySelector(".color");
const changColorBtn = document.querySelector(".change-color");

changColorBtn.addEventListener("click", () => {
  const newColor = getRandomHexColor();
  bodySl.style.backgroundColor = newColor;
  spanColor.style.color = newColor;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
