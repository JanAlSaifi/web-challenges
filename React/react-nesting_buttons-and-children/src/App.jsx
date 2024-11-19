import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button>Nummer 1</Button>
      <Button>Nummer 2</Button>
      <Button>Nummer 3</Button>
      <Button>Nummer 4</Button>
    </main>
  );
}

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
