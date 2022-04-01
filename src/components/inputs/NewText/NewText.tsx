import { Box, Button, Grid, TextField } from "@mui/material";
import React, { useState } from "react";
import CloseButton from "../../buttons/CloseButton";

interface NewTextProps {
  placeholder?: string;
  buttonNewChildren?: any;
  buttonAddChildren?: any;
  handlerAdd?: (title: string) => void;
}

function NewText({ handlerAdd, placeholder, buttonNewChildren, buttonAddChildren }: NewTextProps) {
  const [showInputNewText, setShowInputNewText] = useState(false);
  const [text, setText] = useState("");

  const add = () => {
    if (handlerAdd) {
      handlerAdd(text);
    }
    close();
  };

  const close = () => {
    setShowInputNewText(false);
    setText("");
  };

  const keyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    e.key === "Enter" && Boolean(text) && add();
    e.key === "Escape" && close();
  };

  return (
    <div onKeyDown={keyDown} style={{ width: "100%" }}>
      <Grid container direction="column" justifyContent="flex-start" alignItems="stretch">

        {showInputNewText ? (
          <>
            <TextField
              value={text}
              onChange={(e) => setText(e.target.value)}
              size="small"
              placeholder={placeholder ? placeholder : ""}
            />

            <Box pt={1} pb={0.5} style={{ display: "flex" }}>
              <Box sx={{ flexGrow: 1 }} pr={0.5}>
                <Button onClick={add} variant="contained" disabled={text.length < 1} fullWidth>
                  {buttonAddChildren}
                </Button>
              </Box>
              <CloseButton onClick={close} />
            </Box>
          </>
        ) : (
          <Button onClick={() => setShowInputNewText(!showInputNewText)} fullWidth>
            {buttonNewChildren}
          </Button>
        )}
      </Grid>
    </div>
  );
}

export default NewText;
