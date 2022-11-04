import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export const datasetSlice = createSlice({
  name: "dataset",
  initialState: {},
  reducers: {
    loadDataset: (state, action: PayloadAction<string>) => {
      console.log(action);
    },
  },
});

export const { loadDataset } = datasetSlice.actions;

export default datasetSlice.reducer;
