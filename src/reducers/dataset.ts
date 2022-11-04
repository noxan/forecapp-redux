import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { parse } from "papaparse";
// import type { PayloadAction } from "@reduxjs/toolkit";

export const datasetSlice = createSlice({
  name: "dataset",
  initialState: {
    status: "idle",
    data: [],
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(loadDataset.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(loadDataset.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload as any;
      });
    // .addCase(loadDataset.rejected, (state, action) => {
    //   state.status = "failed";
    //   state.error = action.error.message;
    // });
  },
});

export const loadDataset = createAsyncThunk<Object, string>(
  "dataset/loadDataset",
  async (url, thunkAPI) =>
    await new Promise((resolve, reject) => {
      parse(url, {
        download: true,
        complete(results, file) {
          resolve(results.data);
        },
        error(err, file) {
          reject(err);
        },
      });
    })
);

// export const { loadDataset } = datasetSlice.actions;

export default datasetSlice.reducer;
