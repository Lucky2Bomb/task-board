import { Close } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import React from 'react';

interface CloseButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
}

function CloseButton(props: CloseButtonProps) {
    return (
        <IconButton aria-label="close" onClick={props.onClick}>
            <Close />
        </IconButton>
    );
}

export default CloseButton;