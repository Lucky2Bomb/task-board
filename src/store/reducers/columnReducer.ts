import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ColumnModel } from "../../models/column";

export interface ColumnState {
  columns: ColumnModel[];
}

const initialState: ColumnState = {
  columns: [],
};

export const columnSlice = createSlice({
  name: "columns",
  initialState,
  reducers: {
    addColumn: (state: ColumnState, action: PayloadAction<ColumnModel>) => {
      state.columns.push(action.payload);
    },
    removeColumn: (state: ColumnState, action: PayloadAction<number>) => {
      state.columns.splice(
        state.columns.findIndex((column) => column.id === action.payload),
        1
      );
    },
    editColumn: (state: ColumnState, action: PayloadAction<ColumnModel>) => {
      const findIndex = state.columns.findIndex((column) => column.id === action.payload.id);
      state.columns[findIndex] = action.payload;
    },
  },
});

export const { addColumn, editColumn, removeColumn } = columnSlice.actions;
export default columnSlice.reducer;
