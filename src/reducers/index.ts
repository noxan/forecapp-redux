import { createSlice } from "@reduxjs/toolkit";

export const datasetSlice = createSlice({
  name: "dataset",
  initialState: {},
  reducers: {},
});
export const configurationSlice = createSlice({
  name: "configuration",
  initialState: {},
  reducers: {},
});

const reducers = {
  dataset: datasetSlice.reducer,
  configuration: configurationSlice.reducer,
};

export default reducers;
