import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { cardsSlice } from "../modules/MainCollection";
import { allCardsSlice, typesSlice } from "../modules/Shope";
import { cardSlice } from "../modules/ProductInfo";
import { basketSlice } from "../sliceAll/basketSlice";

export const store = configureStore({
  reducer: {
    cardsFavorite: cardsSlice.reducer,
    allCards: allCardsSlice.reducer,
    types: typesSlice.reducer,
    cardInfo: cardSlice.reducer,
    basket: basketSlice.reducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
