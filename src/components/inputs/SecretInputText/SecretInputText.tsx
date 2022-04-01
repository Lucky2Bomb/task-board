import React from 'react';
import './SecretInputText.css';

interface SecretInputTextProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
}

function SecretInputText(props: SecretInputTextProps) {
    return (
        <input
            type="text"
            className='secret__input-text'
            {...props}
        />
    );
}

export default SecretInputText;