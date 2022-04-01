import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AuthorModel } from "../models/author";
import { addAuthor, addCurrentAuthor } from "../store/reducers/authorReducer";
import Modal from "./modal/Modal";

interface AuthorModalProps {
  open: boolean;
}

function AuthorModal({ open }: AuthorModalProps) {
  const dispatch = useDispatch();

  const [openModal, setOpenModal] = useState(open);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");

  const onCreateAuthorClick = () => {
    const author: AuthorModel = {
      id: Date.now(),
      firstname,
      lastname,
    };

    dispatch(addAuthor(author));
    dispatch(addCurrentAuthor(author));
    setOpenModal(false);
  };

  return (
    <div onKeyDown={(e) => (firstname && lastname && e.key === "Enter" ? onCreateAuthorClick() : null)}>
      <Modal
        content={
          <Box sx={{ boxSizing: "border-box", pl: 0.5, pr: 0.5 }}>
            <Box>
              <h3>Please enter author:</h3>
            </Box>

            <Box>
              <TextField
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
                id="firstname"
                label="firstname"
                variant="standard"
                fullWidth
              />
            </Box>
            <Box pt={1}>
              <TextField
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
                id="lastname"
                label="lastname"
                variant="standard"
                fullWidth
              />
            </Box>
          </Box>
        }
        open={openModal}
        actions={
          <Box sx={{ boxSizing: "border-box", pl: 1, pr: 1, mb: 1, mt: 2, width: "100%" }}>
            <Button
              variant="contained"
              onClick={onCreateAuthorClick}
              disabled={!Boolean(firstname && lastname)}
              fullWidth
            >
              ok
            </Button>
          </Box>
        }
      />
    </div>
  );
}

export default AuthorModal;
