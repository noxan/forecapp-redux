import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
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
  async (url, thunkAPI) => {
    console.log(url);
    // const response = await client.get("/fakeApi/posts");
    // return response.data;
    function wait(milliseconds: number) {
      return new Promise((resolve) => setTimeout(resolve, milliseconds));
    }
    await wait(3000);
    return [{ hi: "world" }];
  }
);

// export const { loadDataset } = datasetSlice.actions;

export default datasetSlice.reducer;
