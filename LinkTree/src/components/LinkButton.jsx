import React from 'react';
import "./styles/LinkButton.scss";

const LinkButton = ({ text }) => {
    return (
        <button className='LinkButton'>
            {text}
        </button>
    );
};

export default LinkButton;
