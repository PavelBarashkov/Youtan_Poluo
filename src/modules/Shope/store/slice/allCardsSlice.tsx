import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchCards } from "../../API/fetchCards";
import { getPageCount } from "../../../helpers/pages";
import { IType } from "../../interfaces/IType";

interface ICard {
  cardId: number;
  modelId: number;
  name: string;
  price: number;
  colors: string[];
  sizes: string[];
  imgs: string[];
}

interface CardsState {
  cards: ICard[];
  typeId: IType[];
  bySort: string;
  page: number;
  limit: number;
  totalPages: number;
  loading: boolean;
  error: string;
  prevUrl?: string;
}

const initialState: CardsState = {
  cards: [],
  page: 1,
  totalPages: 0,
  limit: 9,
  typeId: [],
  bySort: "default",
  prevUrl: undefined,
  loading: false,
  error: "",
};

interface fetchCardsProps {
  bySort: string;
  page: number;
  typeId?: number;
}

export const fetchCard = createAsyncThunk(
  "cars/fetchCards",
  async (params: fetchCardsProps) => {
    const { bySort, page, typeId } = params;
    const response = await fetchCards(bySort, page, typeId);
    return response.data;
  }
);

const params = (arr: IType[], number: any) => {
  if (arr.includes(number)) {
    return arr.splice(arr.indexOf(number), 1);
  }
  arr.push(number);
};

function resultUrl(url: string) {
  const urlArr = url.split("/");
  return urlArr.slice(-2).slice(0, 1)[0];
}

export const allCardsSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    setTypeId: (state, action) => {
      state.page = 1;
      state.totalPages = 0;
      state.cards = [];
      params(state.typeId, action.payload);
    },
    setBySort: (state, action) => {
      if (state.bySort === action.payload) {
        state.bySort = action.payload;
      } else {
        state.page = 1;
        state.totalPages = 0;
        state.cards = [];
        state.bySort = action.payload;
      }
    },
    setPage: (state) => {
      state.page = state.page + 1;
    },
    setPrevUrl: (state, action) => {
      if(action.payload === undefined) {
        state.prevUrl = undefined;
      } else {
        const url = resultUrl(action.payload);
        state.prevUrl = url;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCard.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(fetchCard.fulfilled, (state, action) => {
        if (state.page === 1) {
          state.cards = action.payload.rows;
        } else {
          state.cards = [...state.cards, ...action.payload.rows];
        }
        const totalCount = action.payload.count;
        state.totalPages = getPageCount(totalCount, state.limit);
        state.loading = false;
        state.error = "";
      })
      .addCase(fetchCard.rejected, (state, action) => {
        console.log("Error:", action.payload);
        state.loading = false;

        if (action.payload instanceof Error) {
          state.error = action.payload.message;
        } else if (typeof action.payload === "string") {
          try {
            const errorData = JSON.parse(action.payload);
            if (errorData.message) {
              state.error = errorData.message;
            } else {
              state.error = "Произошла ошибка при загрузке.";
            }
          } catch (error) {
            state.error = "Произошла ошибка при загрузке.";
          }
        } else {
          state.error = "Произошла ошибка при загрузке.";
        }
      });
  },
});

export const { setTypeId, setBySort, setPage, setPrevUrl } = allCardsSlice.actions;
export default allCardsSlice.reducer;
