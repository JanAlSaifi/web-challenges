import Counter from "./components/Counter";
import "./styles.css";
import { useState } from "react";

export default function App() {
  const [people, setPeople] = useState(1);

  function handleIncrement() {
    setPeople(people + 1);
  }
  function handleDecrement() {
    setPeople(people - 1);
  }

  return (
    <div className="container">
      <h1>Place a Table Reservation</h1>
      <Counter
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
      />
      <p>You are going to reserve a table for {people} people.</p>
    </div>
  );
}
