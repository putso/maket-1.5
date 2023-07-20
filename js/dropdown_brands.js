let dropdownBrandsButton = document.querySelector(".brands__button");
let dropdownBrandsBlock = document.querySelectorAll(
  ".brands-list__item--hidden"
);
let windowInnerWidth = document.documentElement.clientWidth;
let currentToggle = 0;
let toggleText = ["Показать всё", "Скрыть"];
function getToggleText() {
  return toggleText[++currentToggle % toggleText.length];
}

dropdownBrandsButton.addEventListener("click", () => {
  dropdownBrandsButton.innerHTML = getToggleText();
  dropdownBrandsButton.classList.toggle('more-button--active');
  for (let i = 0; i < 3; i++) {
    dropdownBrandsBlock[i].classList.toggle("hidden");
  }
});
