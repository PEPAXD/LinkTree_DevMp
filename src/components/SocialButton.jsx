import React from 'react';
import "./styles/SocialButton.scss";

import { FaLinkedinIn, FaInstagram, FaGithub, FaWhatsapp } from "react-icons/fa";
import { TbMailForward } from "react-icons/tb";

const SocialButton = ({ icon, onMouseOver, onMouseOut  }) => {

    let IconComponent;
    let buttonClass = 'SocialButton';
    
    switch (icon) {
        case 'linkedin':
            IconComponent = FaLinkedinIn;
            buttonClass += ' linkedin';
            break;
        case 'instagram':
            IconComponent = FaInstagram;
            buttonClass += ' instagram';
            break;
        case 'github':
            IconComponent = FaGithub;
            buttonClass += ' github';
            break;
        case 'whatsapp':
            IconComponent = FaWhatsapp;
            buttonClass += ' whatsapp';
            break;
        case 'mail':
            IconComponent = TbMailForward;
            buttonClass += ' mail';
            break;
        default:
            IconComponent = null;
    }

    return (
        <button className={buttonClass} onMouseOver={onMouseOver} onMouseOut={onMouseOut} >
            {IconComponent && <IconComponent />}
        </button>
        
    );
};

export default SocialButton;
