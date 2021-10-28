import "./App.css";
import DevDisplay from "./components/Devs/Developer";
import "./components/Devs/index.css";
function App() {
  const Devs = [
    { name: "Gabriel", age: 19, country: "Brazil" },
    { name: "Filipe", age: 28, country: "Brazil" },
    { name: "Mariana", age: 24, country: "Italia" },
  ];

  return (
    <div className="App">
      <DevDisplay
        name={Devs[0].name}
        age={Devs[0].age}
        country={Devs[0].country}
      />
      <DevDisplay
        name={Devs[1].name}
        age={Devs[1].age}
        country={Devs[1].country}
      />
      <DevDisplay
        name={Devs[2].name}
        age={Devs[2].age}
        country={Devs[2].country}
      />
    </div>
  );
}

export default App;
