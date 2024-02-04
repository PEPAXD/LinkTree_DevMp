import React from "react";
import "./styles/SocialButton.scss";

import {
  FaLinkedinIn,
  FaInstagram,
  FaGithub,
  FaWhatsapp,
} from "react-icons/fa";
import { TbMailForward } from "react-icons/tb";

const SocialButton = ({ icon, onMouseOver, onMouseOut }) => {
  let IconComponent;
  let buttonClass = "SocialButton";
  let href;

  switch (icon) {
    case "linkedin":
      IconComponent = FaLinkedinIn;
      buttonClass += " linkedin";
      href = "https://www.linkedin.com/in/mauro-pepa-dev";
      break;
    case "instagram":
      IconComponent = FaInstagram;
      buttonClass += " instagram";
      href = "https://www.instagram.com/mauropepa97";
      break;
    case "github":
      IconComponent = FaGithub;
      buttonClass += " github";
      href = "https://github.com/PEPAXD";
      break;
    case "whatsapp":
      IconComponent = FaWhatsapp;
      buttonClass += " whatsapp";
      href = "https://wa.me/5493541628524";
      break;
    case "mail":
      IconComponent = TbMailForward;
      buttonClass += " mail";
      href =
        "https://mail.google.com/mail/?view=cm&fs=1&to=mauropepa1997oficial@gmail.com&body=TextMe!&subject=yourSubject";
      break;
    default:
      IconComponent = null;
  }

  return (
    <a
      className={buttonClass}
      href={href}
      target="_blank"
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
    >
      {IconComponent && <IconComponent />}
    </a>
  );
};

export default SocialButton;
