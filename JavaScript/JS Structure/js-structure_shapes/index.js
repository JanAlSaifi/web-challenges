console.clear();

import { Circle } from "./components/Circle/Circle.js";
import { Pentagon } from "./components/Pentagon/Pentagon.js";
import { Square } from "./components/Square/Square.js";

const root = document.getElementById("root");

//const circleElement = Circle();
//const pentagonElement = Pentagon();
//const squareElement = Square();

function renderShape(shapeClass) {
  const shape = document.createElement("div");
  shape.classList.add(shapeClass);
  shape.addEventListener("click", () => {
    shape.style.backgroundColor = getRandomColor();
  });

  return shape;
}

const circle = renderShape("circle");
const square = renderShape("square");

root.append(circle, square);
