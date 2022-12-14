const turnToggle = (element, togleName) => element.classList.toggle(togleName);
const burgerMenu = document.querySelector(".burger");
const sides = document.querySelectorAll(".side");
const header = document.querySelector("header");
const body = document.querySelector("body");
burgerMenu.addEventListener("click", () => {
  [burgerMenu, sides[0], sides[1], header].forEach((value) => {
    turnToggle(value, "open");
  });
  turnToggle(body, "overflow");
});
