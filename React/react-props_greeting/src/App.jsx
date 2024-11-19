import "./styles.css";

export default function App() {
  return (
    <div>
      <Greeting name="Jan!" />
      <Greeting name="Lars!" />
      <Greeting name="Hauke!" />
    </div>
  );
}

function Greeting({ name }) {
  return <h1>{`Hello, ${name}`}</h1>;
}
