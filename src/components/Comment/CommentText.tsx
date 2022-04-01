import { Button, colors, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { CommentModel } from '../../models/comment';
import { editComment, removeComment } from '../../store/reducers/commentReducer';
import CloseButton from '../buttons/CloseButton';
import VerySmallButton from '../buttons/VerySmallButton/VerySmallButton';
import SecretInputText from '../inputs/SecretInputText/SecretInputText';

interface CommentTextProps {
    comment: CommentModel;
}

function CommentText({ comment }: CommentTextProps) {
    const dispatch = useDispatch();
    const [editMode, setEditMode] = useState(false);
    const [text, setText] = useState(comment.text);

    const onEdit = () => {
        const editedComment: CommentModel = {
            ...comment,
            text
        }

        dispatch(editComment(editedComment));
        setEditMode(false);
    }

    const onDelete = () => {
        dispatch(removeComment(comment.id));
    };

    return (
        <>
            {editMode ?
                <>
                    <Box p={1}>
                        <SecretInputText value={text} onChange={(e) => setText(e.target.value)} />
                    </Box>

                    <Box sx={{ display: "flex" }}>
                        <Button sx={{ flexGrow: 1 }} variant="contained" onClick={onEdit}>save</Button>
                        <CloseButton onClick={() => setEditMode(false)} />
                    </Box>
                </>
                : <Typography
                    bgcolor={colors.grey[100]}
                    borderRadius={1}
                    textAlign="justify"
                    p={1}
                >
                    {comment.text}
                </Typography>}

            {editMode ? null : <Box
                sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                    gap: 1,
                    pr: 1.5,
                    pt: 0.5
                }}
            >
                <VerySmallButton children={"edit"} onClick={() => setEditMode(!editMode)} />
                <VerySmallButton children={"delete"} onClick={onDelete} />
            </Box>}
        </>
    );
}

export default CommentText;