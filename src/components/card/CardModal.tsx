import { Button, colors, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useCardAuthor } from "../../hooks/author";
import { useCardColumn } from "../../hooks/column";
import useAppSelector from "../../hooks/useAppSelector";
import { CardModel } from "../../models/card";
import { removeCard } from "../../store/reducers/cardReducer";
import { addComment } from "../../store/reducers/commentReducer";
import CommentList from "../Comment/CommentList";
import NewText from "../inputs/NewText/NewText";
import SecretInputText from "../inputs/SecretInputText/SecretInputText";
import SecretTextArea from "../inputs/SecretTextArea/SecretTextArea";
import Modal from "../modal/Modal";

interface CardModalProps {
  open: boolean;
  handleClose: () => void;
  handleSave: (card: CardModel) => void;
  card: CardModel;
}

function CardModal({ handleClose, handleSave, open, card }: CardModalProps) {
  const dispatch = useDispatch();

  const [title, setTitle] = useState(card.title);
  const [additional, setAdditional] = useState(card.additional);

  const { currentAuthor, authors } = useAppSelector((state) => state.author);
  const { columns } = useAppSelector((state) => state.column);

  const cardAuthor = useCardAuthor(authors)(card);
  const cardColumn = useCardColumn(columns)(card);

  const comments = useAppSelector((state) => state.comment.comments).filter((comment) => comment.card_id === card.id);

  const onAddComment = (value: string) => {
    if (currentAuthor) {
      dispatch(
        addComment({
          id: Date.now(),
          text: value,
          author_id: currentAuthor.id,
          card_id: card.id,
        })
      );
    }
  };

  const onSave = () => {
    handleSave({
      ...card,
      title,
      additional,
    });
  };

  const onDelete = () => {
    dispatch(removeCard(card.id));
  }

  return (
    <Modal
      handleClose={handleClose}
      open={open}
      header={<SecretInputText value={title} onChange={(e) => setTitle(e.target.value)} />}
      content={
        <Box sx={{ width: "300px" }}>
          <Box mt={-4.5} mb={1}>
            <Typography fontSize={12} color={colors.grey[400]}>
              author: <b>{`${cardAuthor?.firstname} ${cardAuthor?.lastname}`}</b> from column <b>{cardColumn?.name}</b>
            </Typography>
          </Box>
          <Box pb={1} pt={2}>
            <b>Additional:</b>
          </Box>

          <Box>
            <SecretTextArea
              placeholder="enter additional of card..."
              value={additional}
              onChange={(e) => setAdditional(e.target.value)}
            />
          </Box>

          {card.title !== title || card.additional !== additional ? (
            <Box>
              <Button variant="contained" onClick={onSave} fullWidth>
                save
              </Button>
            </Box>
          ) : null}

          <Box pb={1} pt={2}>
            <b>Comments:</b>
          </Box>

          <Box>
            <CommentList authors={authors} comments={comments} />
          </Box>

          <Box pt={1}>
            <NewText
              buttonAddChildren="send"
              buttonNewChildren="add comment"
              placeholder="enter your text..."
              handlerAdd={onAddComment}
            />
          </Box>
        </Box>
      }
      actions={
        <Button
          variant="contained"
          color="error"
          fullWidth
          onClick={onDelete}
        >
          delete card
        </Button>
      }
    />
  );
}

export default CardModal;
