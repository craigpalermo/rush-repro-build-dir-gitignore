import React from "react";
import { sum } from "@pcln-test/mylib";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <div>1 + 3 = {sum(1, 3)}</div>
      </header>
    </div>
  );
}

export default App;
