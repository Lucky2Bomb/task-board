import React from 'react';
import { AuthorModel } from '../../models/author';
import { CommentModel } from '../../models/comment';
import Comment from './Comment';
import { memo } from 'react';

interface CommentListProps {
    comments: CommentModel[];
    authors: AuthorModel[];
}

function CommentList({ comments, authors }: CommentListProps) {

    return (
        <>
            {comments.map((comment) => (
                <Comment
                    key={`comment_${comment.id}`}
                    comment={comment}
                    author={authors.find((author) => author.id === comment.author_id)}
                />
            ))}
        </>
    );
}

export default memo(CommentList);