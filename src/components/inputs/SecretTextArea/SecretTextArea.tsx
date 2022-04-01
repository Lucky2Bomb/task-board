import React from 'react';
import "./SecretTextArea.css";

interface SecretTextAreaProps extends React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
}

function SecretTextArea(props: SecretTextAreaProps) {
    return (
        <textarea
            className='secret__textarea'
            {...props}
            rows={props.rows || 6}
        />
    );
}

export default SecretTextArea;