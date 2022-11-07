const next = document.getElementById("next");
const prev = document.getElementById("prev");
const slider = document.querySelector(".slider");
const img = document.querySelectorAll(".slider img");

console.log(slider);
console.log(img);

let index = 0;
console.log(img[index].naturalWidth + 50);
let width = img[index].naturalWidth + 50;

console.log(width);
console.log(index);

next.addEventListener("click", () => {
  index++;
  slider.style.transform = `translate(${-index * width}px)`;
  if (index === img.length - 3) {
    next.classList.add("disable");
  } else {
    prev.classList.remove("disable");
  }
});

prev.addEventListener("click", () => {
  index--;
  slider.style.transform = `translate(${-index * width}px)`;
  console.log(index);
  if (index === 0) {
    prev.classList.add("disable");
  } else {
    next.classList.remove("disable");
  }
});
