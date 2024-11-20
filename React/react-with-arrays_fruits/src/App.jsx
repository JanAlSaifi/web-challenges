import Card from "./components/Card";

export default function App() {
  const fruits = [
    {
      id: 1,
      name: "🍌 banana",
      color: "yellow",
    },
    {
      id: 2,
      name: "🍍 pineapple",
      color: "orange",
    },
    {
      id: 3,
      name: "🍒 cherry",
      color: "red",
    },
    {
      id: 4,
      name: "🥥 coconut",
      color: "brown",
    },
    {
      id: 5,
      name: "🍐 pear",
      color: "green",
    },
  ];

  return (
    <div className="app">
      {fruits.map((fruit) => {
        return <Card key={fruit.id} name={fruit.name} color={fruit.color} />;
      })}
    </div>
  );
}
