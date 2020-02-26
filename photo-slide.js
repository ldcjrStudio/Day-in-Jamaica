const slideArea = document.querySelector("main div.photos");
const images = slideArea.querySelectorAll("img");

let currentPhoto = 0;
let z = 1;

slideArea.addEventListener("click", function() {
  currentPhoto = currentPhoto + 1;
  z = z + 1;

  if (currentPhoto > images.length - 1) {
    currentPhoto = 0;
  }

  images.forEach(image => {
    image.style.animation = "";
  });

  images[currentPhoto].style.zIndex = z;
  images[currentPhoto].style.animation = "fade 0.5s";
});

slideArea.addEventListener("mouseover", function() {
  images.forEach(image => {
    const x = 25 * Math.floor(Math.random() * 5) - 50;
    const y = 25 * Math.floor(Math.random() * 5) - 50;

    image.style.transform = `translate(${x}px, ${y}px)`;
  });
});

slideArea.addEventListener("mouseout", function() {
  images.forEach(image => {
    image.style.transform = "";
  });
});
