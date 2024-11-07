console.clear();

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  console.log(data);

  const BadnessSum = Number(event.target.elements.badness.value);
  const ageSum = Number(event.target.elements.age.value);
  const ageBadnessSum = BadnessSum + ageSum;

  console.log(ageBadnessSum);

  event.target.reset();
  event.target.elements.firstName.focus();
});
