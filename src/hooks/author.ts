import { AuthorModel } from "../models/author";
import { CardModel } from "../models/card";
import { CommentModel } from "../models/comment";

export const useCardAuthor = (authors: AuthorModel[]) => {
  return (card: CardModel) => {
    return authors.find((author) => author.id === card.author_id);
  };
};

export const useCommentAuthor = (authors: AuthorModel[]) => {
  return (comment: CommentModel) => {
    return authors.find((author) => author.id === comment.author_id);
  };
};
