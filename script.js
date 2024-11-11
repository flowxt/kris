const darkModeToggle = document.getElementById("darkModeToggle");
const header = document.querySelector("header");

darkModeToggle.addEventListener("change", () => {
  if (darkModeToggle.checked) {
    header.classList.add("dark-mode");
  } else {
    header.classList.remove("dark-mode");
  }
});

// La navbar
const indicator = document.querySelector(".nav-indicator");
const items = document.querySelectorAll(".nav-item");

function handleIndicator(el) {
  items.forEach((item) => {
    item.classList.remove("is-active");
    item.removeAttribute("style");
  });

  const elementColor = el.dataset.activeColor;
  const target = el.dataset.target;

  //styliser l'indicateur
  indicator.style.width = `${el.offsetWidth}px`;
  indicator.style.backgroundColor = elementColor;
  indicator.style.left = `${el.offsetLeft}px`;

  //ajout de la class is-active
  el.classList.add("is-active");
  el.style.color = elementColor;
}

items.forEach((item, index) => {
  item.addEventListener("click", (e) => {
    handleIndicator(e.target);
  });
  item.classList.contains("is-active") && handleIndicator(item);
});
