import React from 'react';
import "./styles/SocialButton.scss";

const SocialButton = ({ text }) => {
    return (
        <button className='SocialButton'>
            {text}
        </button>
    );
};

export default SocialButton;
