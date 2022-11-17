// Menu
const toggle = document.getElementById("toggle");
const body = document.querySelector("body");
const links = document.querySelectorAll(".link");

toggle.addEventListener("click", () => {
  body.classList.toggle("open");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    body.classList.toggle("open");
  });
});

// // transition

const ratio = 0.1;

const options = {
  root: null,
  rootMargin: "0px",
  threshold: ratio,
};

const handlIntersect = (entries, observer) => {
  entries.forEach((entrie) => {
    if (entrie.intersectionRatio > ratio) {
      entrie.target.classList.add("reveal-visible");
      observer.unobserve(entrie.target);
    }
    // console.log(entrie.intersectionRatio);
  });
  console.log("handle");
};

const observer = new IntersectionObserver(handlIntersect, options);
document.querySelectorAll(".reveal").forEach((r) => {
  observer.observe(r);
});
