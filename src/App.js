import './App.css';
import MyCounter from "./components/MyCounter"
import CounterContextProvicer from "./contexts/CounterContext"
function App() {
  return (
    <CounterContextProvicer>
      <div className="App">
        <h1>Counter Context</h1>
        <hr />
        <MyCounter />
      </div>
    </CounterContextProvicer>
  );
}

export default App;
