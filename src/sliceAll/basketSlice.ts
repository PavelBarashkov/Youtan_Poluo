import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

const basketData = localStorage.getItem("basket");
const products = basketData ? JSON.parse(basketData) : [];
let quantity = 0;
products.forEach((el: IProduct) => (quantity += el.quantity));

export interface IProduct {
  cardId: number;
  modelId: number;
  name: string;
  price: number;
  vendor_code: string;
  img: string;
  size: {
    id: number;
    name: string;
    productId: number;
  };
  color: string;
  quantity: number;
}

interface IBasketType {
  basket: IProduct[];
  menuCountOrder: number;
}

const initialState: IBasketType = {
  basket: basketData ? JSON.parse(basketData) : [],
  menuCountOrder: quantity,
};

export const basketSlice = createSlice({
  name: "types",
  initialState,
  reducers: {
    addInBasket: (state, action) => {
      const {
        cardId,
        modelId,
        size: { id },
      } = action.payload;

      const selectedProduct = state.basket.find(
        (product: any) =>
          product.cardId === cardId &&
          product.modelId === modelId &&
          product.size.id === id
      );
      if (selectedProduct) {
        selectedProduct.quantity += 1;
        state.menuCountOrder += 1;
      } else {
        state.basket = [...state.basket, action.payload];
        state.menuCountOrder += 1;
      }
      localStorage.setItem("basket", JSON.stringify(state.basket));
    },
    addQuantity: (state, action) => {
      const {
        cardId,
        modelId,
        size: { id },
      } = action.payload;

      const selectedProduct = state.basket.find(
        (product: any) =>
          product.cardId === cardId &&
          product.modelId === modelId &&
          product.size.id === id
      );

      if (selectedProduct) {
        if (selectedProduct.quantity === 10) {
          return;
        }
        selectedProduct.quantity += 1;
        state.menuCountOrder += 1;
        localStorage.setItem("basket", JSON.stringify(state.basket));
      }
    },
    reduceQuantity: (state, action) => {
      const {
        cardId,
        modelId,
        size: { id },
      } = action.payload;

      const selectedProduct = state.basket.find(
        (product: any) =>
          product.cardId === cardId &&
          product.modelId === modelId &&
          product.size.id === id
      );

      if (selectedProduct) {
        if (selectedProduct.quantity === 1) {
          return;
        }
        selectedProduct.quantity -= 1;
        state.menuCountOrder -= 1;

        localStorage.setItem("basket", JSON.stringify(state.basket));
      }
    },
    deleteItem: (state, action) => {
      state.basket = state.basket.filter(
        (item) => item.size.productId !== action.payload.size.productId
      );
      localStorage.setItem("basket", JSON.stringify(state.basket));
      state.menuCountOrder -= action.payload.quantity;
    },
  },
});

export const { addInBasket, addQuantity, reduceQuantity, deleteItem } =
  basketSlice.actions;
export default basketSlice.reducer;
