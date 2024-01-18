import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface MenuCountType {
  countOrder: number;
}

const initialState: MenuCountType = {
  countOrder: 0,
};

export const typesSlice = createSlice({
  name: "types",
  initialState,
  reducers: {
    addCountOrder: (state) => {
      state.countOrder += 1;
    },
    reduceCountOrder: (state) => {
      if (state.countOrder === 0) {
        return;
      }
      state.countOrder -= 1;
    },
  },
});

export const { addCountOrder, reduceCountOrder} = typesSlice.actions;
export default typesSlice.reducer;
