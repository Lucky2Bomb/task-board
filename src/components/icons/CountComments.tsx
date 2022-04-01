import { Comment } from '@mui/icons-material';
import React from 'react';

interface CountCommentsProps {
    count: number;
}

function CountComments({ count }: CountCommentsProps) {
    return (
        <>
            <span>{count}</span>
            <Comment sx={{ pl: 0.3 }} fontSize="small" color="primary" />
        </>
    );
}

export default CountComments;