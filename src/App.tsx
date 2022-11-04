import React from "react";
import { useAppSelector, useAppDispatch } from "./hooks";
import logo from "./logo.svg";
import "./App.css";

import { loadDataset } from "./reducers/dataset";

function App() {
  const dataset = useAppSelector((state) => state.dataset);
  const dispatch = useAppDispatch();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button
          onClick={() =>
            dispatch(loadDataset("/datasets/energy_dataset_small.csv"))
          }
        >
          Load dataset
        </button>
        <pre>{JSON.stringify(dataset, null, 2)}</pre>
      </header>
    </div>
  );
}

export default App;
