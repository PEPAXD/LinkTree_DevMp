import React from 'react';
import "./styles/SocialButton.scss";

import { FaLinkedinIn, FaInstagram, FaGithub, FaWhatsapp } from "react-icons/fa";
import { TbMailForward } from "react-icons/tb";

const SocialButton = ({ icon, onMouseOver, onMouseOut  }) => {
    let IconComponent;

    switch (icon) {
        case 'linkedin':
            IconComponent = FaLinkedinIn;
            break;
        case 'instagram':
            IconComponent = FaInstagram;
            break;
        case 'github':
            IconComponent = FaGithub;
            break;
        case 'whatsapp':
            IconComponent = FaWhatsapp;
            break;
        case 'mail':
            IconComponent = TbMailForward;
            break;
        default:
            IconComponent = null;
    }

    return (
        <button className='SocialButton' onMouseOver={onMouseOver} onMouseOut={onMouseOut}>
            {IconComponent && <IconComponent />}
        </button>
        
    );
};

export default SocialButton;
