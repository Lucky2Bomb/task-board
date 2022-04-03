import { Box, Divider, Grid, Paper } from "@mui/material";
import React, { memo, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import useAppSelector from "../../hooks/useAppSelector";
import { CardModel } from "../../models/card";
import { editCard } from "../../store/reducers/cardReducer";
import CountComments from "../icons/CountComments";
import CardModal from "./CardModal";

interface CardProps {
  card: CardModel;
}

function Card({ card }: CardProps) {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const comments = useAppSelector((state) => state.comment.comments);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSave = (card: CardModel) => {
    dispatch(editCard(card));
  };

  const countComments = useMemo(() => comments.filter((comment) => comment.card_id === card.id).length, [card.id, comments]);

  return (
    <Grid item>
      <Paper variant="outlined" style={{ cursor: "pointer" }} onClick={handleOpen}>
        <Box padding={1.5} fontFamily={"inherit"} >
          {card?.title}
        </Box>
        {countComments ?
          <>
            <Divider />
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                bgcolor: "background.paper",
                borderRadius: 1,
                p: 1,
                pt: 0,
                mt: 1
              }}
            >
              <CountComments count={countComments} />
            </Box>
          </> : null}
      </Paper>

      {card && <CardModal open={open} handleClose={handleClose} handleSave={handleSave} card={card} />}
    </Grid>
  );
}

export default memo(Card);
