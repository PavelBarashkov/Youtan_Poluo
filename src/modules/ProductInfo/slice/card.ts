import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCard } from "../API/getCard";
import { ICardState } from "../interface/ICardState";
import { IGetCardInfoProps } from "../interface/IGetCardInfoProps";
import { IColor } from "../interface/IColor";

const initialState: ICardState = {
  card: [],
  selected: {
    color: {
      modelId: 0,
      color: "",
    },
    size: {
      id: 0,
      name: "",
    },
  },
  countPrev: 1,
  loading: false,
  error: "",
};

export const getCardInfo = createAsyncThunk(
  "card/getCard",
  async (id: number) => {
    const response = await getCard(id);
    return response.data;
  }
);

const fun = (obj: any, color: string) => {
  let result: any = {};
  obj.forEach((item: any) => {
      if ( item.color === color) {
          result = item;
      }
  })
  return {
    modelId: result.modelId,
    color: result.color
  };
}

export const cardSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    setSelectedColor: (state, action) => {
      state.selected.color = action.payload;
    },
    setSelectedSize: (state, action) => {
      state.selected.size = action.payload;
    },
    setCountPrev: (state, action) => {
      if( action.payload === 'next') {
        state.countPrev += 1;
        console.log(state.countPrev)
      } 
      if(action.payload === 'reset') {
        state.countPrev = 1;
      } 
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCardInfo.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(getCardInfo.fulfilled, (state, action) => {
        state.card = action.payload;

        state.selected.color.modelId = action.payload.id;
        // state.selected.color.color = action.payload.color;
        state.selected.color = fun(action.payload.colors, action.payload.color)
        state.selected.size.id = action.payload.size[0]?.id;
        state.selected.size.name = action.payload.size[0]?.name;

        state.loading = false;
        state.error = "";
      })
      .addCase(getCardInfo.rejected, (state, action) => {
        console.log("Error:", JSON.stringify(action.payload));
        state.loading = false;
        if (action.error.message === "Request failed with status code 404") {
          state.error = "Продукт не найден";
        } else {
          state.error = action.error.message ?? "Произошла ошибка";
        }
      });
  },
});

export const { setSelectedColor, setSelectedSize, setCountPrev } = cardSlice.actions;
export default cardSlice.reducer;
