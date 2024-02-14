// Thay đổi nội dung búc thư ở đây
var letterContent =
  "chúc em iu ngày valentine vui vẻ và càng xinh đẹp. Mãi yêu anh nha ❤️♥️";

// Tốc độ viết chữ. Số càng nhỏ tốc độ càng nhanh. 50 là tốc độ khá phù hợp
durationWrite = 50;

// Hiệu ứng gõ chữ

function effectWrite() {
  var boxLetter = document.querySelector(".letterContent");
  letterContentSplited = letterContent.split("");

  letterContentSplited.forEach((val, index) => {
    setTimeout(() => {
      boxLetter.innerHTML += val;
    }, durationWrite * index);
  });
}

window.addEventListener("load", () => {
  setTimeout(() => {
    document.querySelector(".container").classList.add("active");
  }, 500);
});

var openBtn = document.querySelector(".openBtn");
openBtn.addEventListener("click", () => {
  document.querySelector(".cardValentine").classList.add("active");
  document.querySelector(".container").classList.add("close");
});

var cardValentine = document.querySelector(".cardValentine");

cardValentine.addEventListener("click", () => {
  cardValentine.classList.toggle("open");

  if (cardValentine.className.indexOf("open") != -1) {
    setTimeout(effectWrite, 500);
  } else {
    setTimeout(() => {
      document.querySelector(".letterContent").innerHTML = "";
    }, 1000);
  }
});

// new
const getRandom = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const content = document.querySelector("#content");
const button_agree = document.querySelector(".button_agree");
const button_notagree = document.querySelector(".button_notagree");
const model = document.querySelector(".model");
const container = document.querySelector(".container");
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

function showContainer() {
  content.style.display = "none";
  model.style.display = "none";
  container.style.display = "block";
}
