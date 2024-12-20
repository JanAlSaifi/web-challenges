console.clear();

const bodyElement = document.querySelector('[data-js="body"]');
const darkMode = document.querySelector('[data-js="dark-mode-button"]');
const lightMode = document.querySelector('[data-js="light-mode-button"]');
const toggleMode = document.querySelector('[data-js="toggle-button"]');

darkMode.addEventListener("click", () => {
  bodyElement.classList.add("dark");
  console.log("It is dark now!");
});

lightMode.addEventListener("click", () => {
  bodyElement.classList.remove("dark");
  console.log("Lumos!");
});

toggleMode.addEventListener("click", () => {
  bodyElement.classList.toggle("dark");
  console.log("Both!?");
});
