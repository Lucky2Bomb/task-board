import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CommentModel } from "../../models/comment";

export interface CommentState {
  comments: CommentModel[];
}

const initialState: CommentState = {
  comments: [
    // { id: 1, text: "comment 1", card_id: 1, author_id: 1 },
    // { id: 2, text: "comment 2", card_id: 5, author_id: 1 },
    // { id: 3, text: "comment 3", card_id: 1, author_id: 1 },
    // { id: 4, text: "comment 4", card_id: 2, author_id: 1 },
    // { id: 5, text: "comment 5", card_id: 2, author_id: 1 },
    // { id: 6, text: "comment 6", card_id: 1, author_id: 1 },
  ],
};

export const commentSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    addComment: (state: CommentState, action: PayloadAction<CommentModel>) => {
      state.comments.push(action.payload);
    },
    removeComment: (state: CommentState, action: PayloadAction<number>) => {
      state.comments.splice(
        state.comments.findIndex((comment) => comment.id === action.payload),
        1
      );
    },
    editComment: (state: CommentState, action: PayloadAction<CommentModel>) => {
      const findIndex = state.comments.findIndex(
        (comment) => comment.id === action.payload.id
      );
      state.comments[findIndex] = action.payload;
    },
  },
});

export const { addComment, editComment, removeComment } = commentSlice.actions;
export default commentSlice.reducer;
