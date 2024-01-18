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
  basket: IProductType[];
  menuCountOrder: number;
}

const initialState: IBasketType = {
  basket: products,
  menuCountOrder: products.length,
};

export const basketSlice = createSlice({
  name: "types",
  initialState,
  reducers: {
    addInBasket: (state, action) => {
      state.menuCountOrder += 1
      state.basket = [...state.basket, action.payload];
      localStorage.setItem("basket", JSON.stringify(state.basket));
    },
  },
});

export const { addInBasket } = basketSlice.actions;
export default basketSlice.reducer;
