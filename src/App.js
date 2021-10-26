import "./App.css";
import DevDisplay from "./components/Devs/Developer";
import "./components/Devs/index.css";
function App() {
  class Devs {
    constructor(name, age, country) {
      this._name = name;
      this._age = age;
      this._country = country;
    }
  }
  const dev1 = new Devs("Gabriel", 19, "Brazil");
  const dev2 = new Devs("Filipe", 28, "Brazil");
  const dev3 = new Devs("Mariana", 24, "Italia");

  return (
    <div className="App">
      <DevDisplay name={dev1._name} age={dev1._age} country={dev1._country} />
      <DevDisplay name={dev2._name} age={dev2._age} country={dev2._country} />
      <DevDisplay name={dev3._name} age={dev3._age} country={dev3._country} />
    </div>
  );
}

export default App;
