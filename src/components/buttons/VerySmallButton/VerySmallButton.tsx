import React from 'react';
import "./VerySmallButton.css";

interface VerySmallButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
}

function VerySmallButton(props: VerySmallButtonProps) {
    return (
        <button {...props} className="very-small-button" />
    );
}

export default VerySmallButton;