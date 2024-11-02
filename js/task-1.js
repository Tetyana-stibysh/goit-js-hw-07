const totalCategory = document.querySelectorAll("#categories > li");

function calcCategory(arr) {
  console.log(`Number of categories: ${arr.length}.`);
  arr.forEach((element) => {
    console.log(`Category: ${element.children[0].textContent}`);
    console.log(`Elements: ${element.children[1].children.length}`);
  });
}
calcCategory(totalCategory);
