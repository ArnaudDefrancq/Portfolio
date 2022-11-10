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

// Carrousel
class Carousel {
  constructor(element, options = {}) {
    this.element = element;
    this.options = Object.assign(
      {},
      {
        slideToScroll: 1,
        slideVisible: 1,
      },
      options
    );
    let children = [].slice.call(element.children);
    this.currentSlide = 0;

    this.root = this.createDivWithClass("carousel1");
    this.panorama = this.createDivWithClass("carousel1__panorama");

    this.root.appendChild(this.panorama);
    this.element.appendChild(this.root);

    this.items = children.map((child) => {
      let item = this.createDivWithClass("carousel__item");

      item.appendChild(child);
      this.panorama.appendChild(item);
      return item;
    });
    this.setStyle();
    this.createNavigation();
  }

  createDivWithClass(className) {
    let div = document.createElement("div");
    div.setAttribute("class", className);
    return div;
  }

  setStyle() {
    let ratio = this.items.length / this.options.slideVisible;
    this.panorama.style.width = ratio * 100 + "%";
    this.items.forEach(
      (item) =>
        (item.style.width = 100 / this.options.slideVisible / ratio + "%")
    );
  }

  createNavigation() {
    let nextBtn = this.createDivWithClass("carousel__next");
    let prevBtn = this.createDivWithClass("carousel__prev");
    this.root.appendChild(nextBtn);
    this.root.appendChild(prevBtn);
    nextBtn.addEventListener("click", this.next.bind(this));
    prevBtn.addEventListener("click", this.prev.bind(this));
  }

  next() {
    this.goToItem(this.currentSlide + this.options.slideToScroll);
  }

  prev() {
    this.goToItem(this.currentSlide - this.options.slideToScroll);
  }

  goToItem(index) {
    if (index < 0) {
      index = this.items.length - this.options.slideVisible;
    } else if (
      index >= this.items.length ||
      this.items[this.currentSlide + this.options.slideVisible] === undefined
    ) {
      index = 0;
    }
    let translateX = (index * -100) / this.items.length;
    this.panorama.style.transform = "translate3d(" + translateX + "%, 0, 0)";
    this.panorama.style.transition = "0.4s ease";
    this.currentSlide = index;
  }
}

const widthPage = window.innerWidth;

new Carousel(document.querySelector("#carousel1"), {
  slideVisible: 3,
});

if (widthPage === 834) {
  document.querySelector("#carousel1").classList.add("slider2");
  document.querySelector("#carousel2").classList.remove("slider2");
  new Carousel(document.querySelector("#carousel2"), {
    slideVisible: 2,
  });
}

if (widthPage === 500) {
  document.querySelector("#carousel1").classList.add("slider2");
  document.querySelector("#carousel2").classList.add("slider2");
  document.querySelector("#carousel3").classList.remove("slider2");
  new Carousel(document.querySelector("#carousel3"), {
    slideVisible: 1,
  });
}
