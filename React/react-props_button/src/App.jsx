import React from "react";
import "./styles.css";

export default function App() {
  return <Button color="" disabled={false} text="Click me!" />;
}

function Button({ color, disabled, text }) {
  return (
    <button
      style={{ height: "100px", backgroundColor: color }}
      disabled={disabled}
    >
      {text}
    </button>
  );
}
