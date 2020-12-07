import React from "react";
import MultiCounter from "./components/MultiCounter";
import CounterGroup from "./com[onents/CounterGroup"
import './App.css';

function App() {
  const size = 100;

  return (
    <div className="App">
      <header className="App-header">
        <MultiCounter />
        <input type="number" onChange={this.onChange}/>
        <CounterGroup size={size} />
      </header>
    </div>
  );
}

export default App;
