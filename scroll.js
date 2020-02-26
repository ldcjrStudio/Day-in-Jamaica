const main = document.querySelector("main");

document.addEventListener("scroll", function() {
  const pixels = window.pageYOffset;

  console.log(pixels);
  if (pixels < 700) {
    main.style.backgroundColor = "#fff";
  } else if (pixels < 3085) {
    main.style.backgroundColor = "#7ED5BF";
  } else if (pixels < 4675) {
    main.style.backgroundColor = "#2C3A29";
  } else if (pixels < 6500) {
    main.style.backgroundColor = "#F7F2C5";
  }
});
