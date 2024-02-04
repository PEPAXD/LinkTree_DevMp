import React from 'react';
import "./styles/LinkButton.scss";

const LinkButton = ({ text, href, onClick }) => {
  if (text === "Download CV") {
    return (
      <a className='LinkButton' onClick={onClick}>
        {text}
      </a>
    );
  } else {
    return (
      <a className='LinkButton' href={href} target="_blank" rel="noopener noreferrer">
        {text}
      </a>
    );
  }
};

export default LinkButton;
