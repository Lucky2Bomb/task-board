import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthorModel } from "../../models/author";

export interface AuthorState {
  authors: AuthorModel[];
  currentAuthor: AuthorModel | null;
}

const initialState: AuthorState = {
  authors: [],
  currentAuthor: null,
};

export const authorSlice = createSlice({
  name: "authors",
  initialState,
  reducers: {
    addAuthor: (state: AuthorState, action: PayloadAction<AuthorModel>) => {
      state.authors.push(action.payload);
    },
    removeAuthor: (state: AuthorState, action: PayloadAction<number>) => {
      state.authors.splice(
        state.authors.findIndex((author) => author.id === action.payload),
        1
      );
    },
    editAuthor: (state: AuthorState, action: PayloadAction<AuthorModel>) => {
      const findIndex = state.authors.findIndex(
        (author) => author.id === action.payload.id
      );
      state.authors[findIndex] = action.payload;
    },

    addCurrentAuthor: (
      state: AuthorState,
      action: PayloadAction<AuthorModel>
    ) => {
      state.currentAuthor = action.payload;
    },
  },
});

export const { addAuthor, editAuthor, removeAuthor, addCurrentAuthor } =
  authorSlice.actions;
export default authorSlice.reducer;
