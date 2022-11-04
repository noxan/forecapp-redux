import { createSlice } from "@reduxjs/toolkit";

import dataset from "./dataset";

export const configurationSlice = createSlice({
  name: "configuration",
  initialState: {},
  reducers: {},
});

const reducers = {
  dataset,
  configuration: configurationSlice.reducer,
};

export default reducers;
