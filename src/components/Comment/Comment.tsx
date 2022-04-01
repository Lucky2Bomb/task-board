import { Person } from "@mui/icons-material";
import { Avatar, Grid } from "@mui/material";
import React from "react";
import { AuthorModel } from "../../models/author";
import { CommentModel } from "../../models/comment";
import CommentText from "./CommentText";

interface CommentProps {
  comment: CommentModel;
  author?: AuthorModel;
}

function Comment({ comment, author }: CommentProps) {
  return (
    <Grid container wrap="nowrap" sx={{ maxWidth: "100%", pt: 1 }} spacing={1}>

      <Grid item>
        <Avatar>
          <Person />
        </Avatar>
      </Grid>

      <Grid item xs zeroMinWidth>

        <h4 style={{ margin: 0, textAlign: "left" }}>
          {author?.firstname} {author?.lastname}
        </h4>

        <CommentText comment={comment} />
      </Grid>
    </Grid>
  );
}

export default Comment;
