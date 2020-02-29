//Menu

const navTag = document.querySelector("a.nav-button");
const mainTag = document.querySelector("main");

navTag.addEventListener("click", function() {
  mainTag.classList.toggle("open");

  if (mainTag.classList.contains("open")) {
    navTag.innerHTML = `<img src="close.svg"> Close`;
  } else {
    navTag.innerHTML = `<img src="Menu.svg"> Menu`;
  }
});
