import React from 'react';
import { useCommentAuthor } from '../../hooks/author';
import { AuthorModel } from '../../models/author';
import { CommentModel } from '../../models/comment';
import Comment from './Comment';

interface CommentListProps {
    comments: CommentModel[];
    authors: AuthorModel[];
}

function CommentList({ comments, authors }: CommentListProps) {

    const authorComment = useCommentAuthor(authors);

    return (
        <>
            {comments.map((comment) => (
                <Comment
                    key={`comment_${comment.id}`}
                    comment={comment}
                    author={authorComment(comment)}
                />
            ))}
        </>
    );
}

export default CommentList;