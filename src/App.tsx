import { useAppSelector, useAppDispatch } from "./hooks";

import { loadDataset } from "./reducers/dataset";

function App() {
  const dataset = useAppSelector((state) => state.dataset);
  const dispatch = useAppDispatch();
  return (
    <div className="App">
      <header className="App-header">
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
