import { Card, CardActions, CardContent, CardHeader, Modal as ModalMUI } from "@mui/material";
import React from "react";
import CloseButton from "../buttons/CloseButton";
import "./Modal.css";

interface ModalProps {
  open: boolean;
  header?: any;
  content?: any;
  actions?: any;
  handleClose?: () => void;
}

function Modal({ header, content, actions, open = false, handleClose }: ModalProps) {
  return (
    <ModalMUI open={open} onClose={handleClose} className="modal__wrapper">
      <Card sx={{ minWidth: 275 }} className="modal__container">
        {header || handleClose ? (
          <CardHeader
            action={handleClose ? <CloseButton onClick={handleClose} /> : null}
            title={header}
            titleTypographyProps={{ variant: "inherit" }}
          />
        ) : null}

        <CardContent>{content}</CardContent>

        <CardActions>{actions}</CardActions>
      </Card>
    </ModalMUI>
  );
}

export default Modal;
