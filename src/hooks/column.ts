import { CardModel } from "../models/card";
import { ColumnModel } from "../models/column";

export const useCardColumn = (columns: ColumnModel[]) => {
  return (card: CardModel) => {
    return columns.find((column) => column.id === card.column_id);
  }
};
