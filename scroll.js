const main = document.querySelector("main");

document.addEventListener("scroll", function() {
  const pixels = window.pageYOffset;
  event.preventDefault();

  if (pixels < 700) {
    main.style.backgroundColor = "#fff";
  } else if (pixels < 2650) {
    main.style.backgroundColor = "#89C8A0";
  } else if (pixels < 4675) {
    main.style.backgroundColor = "#2C3A29";
  } else if (pixels < 6500) {
    main.style.backgroundColor = "#F7F2C5";
  }

  const windowHeight = window.innerHeight;
  const documentHeight = document.body.offsetHeight;
  const difference = documentHeight - windowHeight;
  const percentage = (100 * pixels) / difference;

  const divBar = document.querySelector("div.progress div.bar");

  divBar.style.width = `${percentage + "%"}`;
});
