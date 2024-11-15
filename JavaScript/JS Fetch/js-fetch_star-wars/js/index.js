import { Card } from "../components/Card/Card.js";
import { renderElement } from "./utils.js";

console.clear();
const url = "https://swapi.py4e.com/api/people";

// --v-- your code below this line --v--

async function fetchDataAndRender() {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);

  data.results.forEach((char) => {
    const card = Card(char);
    renderElement(card);
  });
}

fetchDataAndRender();
