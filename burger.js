const BURGER_OPENED_CLASSNAME = "burger_open";
const BURGER_BTN_OPENED_CLASSNAME = "burger-btn_open";
const BODY_FIXED_CLASSNAME_2 = "body_fixed";

const burger = document.querySelector(".js-burger");
const burgerBtn = document.querySelector(".js-burger-btn");
const burgerContent = document.querySelector(".js-burger__content");

burgerBtn.addEventListener("click", toggleBurger);

burgerNode.addEventListener("click", (event) => {
  const isClickOutsideContent = !event.composedPath().includes(burgerContent);

  if (isClickOutsideContent) {
    toggleBurger();
  }
});

function toggleBurger() {
  burger.classList.toggle(BURGER_OPENED_CLASSNAME);
  document.body.classList.toggle(BODY_FIXED_CLASSNAME_2);
  burgerBtn.classList.toggle(BURGER_BTN_OPENED_CLASSNAME);
}
