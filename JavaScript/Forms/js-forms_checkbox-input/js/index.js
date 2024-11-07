console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');
const tosCheckbox = document.querySelector('[data-js="tos"]');

const submitSuccess = document.querySelector('[data-js="success"]');

function hideTosError() {
  tosError.setAttribute("hidden", "");
}

function showTosError() {
  tosError.removeAttribute("hidden");
}

hideTosError();
submitSuccess.hidden = true;

tosCheckbox.addEventListener("input", () => {
  if (tosCheckbox.checked === true) {
    hideTosError();
  } else {
    showTosError();
  }
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // --v-- write your code here --v--
  if (tosCheckbox.checked === false) {
    showTosError();
    return;
  }

  submitSuccess.hidden = false;
  hideTosError();
  // --^-- write your code here --^--

  // eslint-disable-next-line no-alert
  alert("Form submitted");
});
