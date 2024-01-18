import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

const basketData = localStorage.getItem("basket");
const products = basketData ? JSON.parse(basketData) : [];

interface IProductType {
  product: {
    cardId: number;
    modelId: number;
    sizeId: number;
    color: number;
  };
}

interface IBasketType {
  products: IProductType[];
  menuCountOrder: number;
}

const initialState: IBasketType = {
  products: products,
  menuCountOrder: products.length,
};

export const basketSlice = createSlice({
  name: "types",
  initialState,
  reducers: {},
});

export const {} = basketSlice.actions;
export default basketSlice.reducer;
