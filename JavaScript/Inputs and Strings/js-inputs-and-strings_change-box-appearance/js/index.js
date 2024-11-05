console.clear();

const inputColor = document.querySelector('[data-js="input-color"]');
const inputRadius = document.querySelector('[data-js="input-radius"]');
const inputRotation = document.querySelector('[data-js="input-rotation"]');
const box = document.querySelector('[data-js="box"]');

inputColor.addEventListener("input", () => {
  const change = inputColor.value;
  box.style.background = `hsl(${change}, 70%, 60%)`;
  console.log("Test Color");
});

inputRadius.addEventListener("input", () => {
  const radius = inputRadius.value;
  box.style.borderRadius = `${radius}%`;
  console.log("Test Radius");
});

inputRotation.addEventListener("input", () => {
  const rotation = inputRotation.value;
  box.style.transform = `rotate(${rotation}deg)`;
  console.log("Test Rotation");
});
