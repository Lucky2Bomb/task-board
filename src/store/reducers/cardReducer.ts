import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CardModel } from "../../models/card";
export interface CardState {
  cards: CardModel[];
}

const initialState: CardState = {
  cards: [
    // {
    //   id: 1,
    //   title: "card 1",
    //   additional: "more information",
    //   author_id: 1,
    //   column_id: 1,
    // },
    // {
    //   id: 2,
    //   title: "card 2",
    //   additional: "more information",
    //   author_id: 1,
    //   column_id: 1,
    // },
    // {
    //   id: 3,
    //   title: "card 3",
    //   additional: "more information",
    //   author_id: 1,
    //   column_id: 2,
    // },
    // {
    //   id: 4,
    //   title: "card 4",
    //   additional: "more information",
    //   author_id: 1,
    //   column_id: 2,
    // },
    // {
    //   id: 5,
    //   title: "card 5",
    //   additional: "more information",
    //   author_id: 1,
    //   column_id: 2,
    // },
    // {
    //   id: 6,
    //   title: "card 6",
    //   additional: "more information",
    //   author_id: 1,
    //   column_id: 3,
    // },
    // {
    //   id: 7,
    //   title: "card 7",
    //   additional: "more information",
    //   author_id: 1,
    //   column_id: 3,
    // },
    // {
    //   id: 8,
    //   title: "card 8",
    //   additional: "more information",
    //   author_id: 1,
    //   column_id: 4,
    // },
  ],
};

export const cardSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    addCard: (state: CardState, action: PayloadAction<CardModel>) => {
      state.cards.push(action.payload);
    },
    removeCard: (state: CardState, action: PayloadAction<number>) => {
      state.cards.splice(
        state.cards.findIndex((card) => card.id === action.payload),
        1
      );
    },
    editCard: (state: CardState, action: PayloadAction<CardModel>) => {
      const findIndex = state.cards.findIndex((card) => card.id === action.payload.id);
      state.cards[findIndex] = action.payload;
    },
  },
});

export const { addCard, editCard, removeCard } = cardSlice.actions;
export default cardSlice.reducer;
