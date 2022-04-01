import { Add } from "@mui/icons-material";
import { Box, Grid, Paper } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import useAppSelector from "../hooks/useAppSelector";
import { CardModel } from "../models/card";
import { ColumnModel } from "../models/column";
import { addCard } from "../store/reducers/cardReducer";
import { editColumn } from "../store/reducers/columnReducer";
import Card from "./card/Card";
import NewText from "./inputs/NewText/NewText";
import SecretInputText from "./inputs/SecretInputText/SecretInputText";

interface ColumnProps {
  column: ColumnModel;
}

function Column({ column }: ColumnProps) {
  const dispatch = useDispatch();

  const cards = useAppSelector((state) => state.card.cards);
  const currentAuthor = useAppSelector((state) => state.author.currentAuthor);

  const handlerAdd = (value: string) => {
    if (currentAuthor?.id) {
      const newCard: CardModel = {
        id: Date.now(),
        title: value,
        additional: "",
        author_id: currentAuthor?.id,
        column_id: column.id,
      };

      dispatch(addCard(newCard));
    }
  };

  return (
    <Grid item sx={{ width: 275 }}>
      <Paper>
        <Box sx={{ boxSizing: "border-box", p: 1 }}>
          <SecretInputText
            value={column.name}
            onChange={(e) => dispatch(editColumn({ ...column, name: e.target.value }))}
            style={{ fontSize: 22 }}
          />
        </Box>

        <Grid
          container
          direction="column"
          justifyContent="flex-start"
          alignItems="stretch"
          columnSpacing={0.5}
          rowSpacing={0.5}
          padding={1}
        >
          {cards.map((card) =>
            card.column_id === column.id ? <Card key={`${card.id}_${card.title}`} card={card} /> : null
          )}
        </Grid>
        <Box pl={1} pr={1} pb={0.5}>
          <NewText
            handlerAdd={handlerAdd}
            placeholder="enter new card..."
            buttonNewChildren={
              <>
                <Add />
                new card
              </>
            }
            buttonAddChildren="add"
          />
        </Box>
      </Paper>
    </Grid>
  );
}

export default Column;
