const getRandom = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const button_agree = document.querySelector(".button_agree");
const button_notagree = document.querySelector(".button_notagree");
const model = document.querySelector(".model");
button_notagree.style.scale = 1;
// setInterval(() => {
//   square.style.left = getRandom(0, 300 - 200) + "px"; // 👈🏼 Horizontally
//   square.style.top = getRandom(0, 300 - 200) + "px"; // 👈🏼 Vertically
// }, 500); // every 1/2 second

function getRandomPosition() {
  button_agree.style.left = getRandom(0, 300) + "px"; // 👈🏼 Horizontally
  button_agree.style.top = getRandom(-200, 200) + "px"; // 👈🏼 Vertically

  button_notagree.style.scale *= 1.15;
}

function showModel() {
  model.style.display = "flex";
}
