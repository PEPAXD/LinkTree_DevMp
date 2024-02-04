import React, { useState } from "react";
import "./styles/App.scss";
import LinkButton from "./LinkButton";
import SocialButton from "./SocialButton";
import devImg from "../assets/devImg.png";

const linksButtons = [
  { text: "Go to my website", href: "https://www.mauropepacvwebsite.com" },
  { text: "My Work Portfolio", href: "https://github.com/PEPAXD?tab=stars" },
  {
    text: "Download CV",
    onClick: () =>
      window.open(import.meta.env.BASE_URL + "CV PEPA.pdf", "_blank"),
  },
];

const socialNetworksData = [
  { icon: "linkedin", text: "mauro-pepa-dev", color: "#0077B5" },
  { icon: "instagram", text: "@mauropepa97", color: "#C13584" },
  { icon: "github", text: "PEPAXD", color: "#333" },
  { icon: "whatsapp", text: "ARG +549 3541-628524", color: "#25D366" },
  { icon: "mail", text: "mauropepa1997oficial@gmail.com", color: "#D44638" },
];

function App() {
  const [socialNetwork, setSocialNetwork] = useState("CONTACT ME!");
  const [color, setColor] = useState("#000");

  const handleMouseOver = (networkName, networkColor) => {
    setSocialNetwork(networkName);
    setColor(networkColor);
  };

  const handleMouseOut = () => {
    setSocialNetwork("CONTACT ME!");
    setColor("#000");
  };

  return (
    <div className="shadowWallpaper">
      <div className="container">
        <div className="card">
          <div className="devData">
            <img src={devImg} alt="MyPhoto" className="DevImg" />
            <h1>Mauro Exequiel Pepa</h1>
            <p>Frontend Developer - Digital Designer</p>
          </div>

          <div className="containersLinks">
            {linksButtons.map((button, index) => (
              <LinkButton key={index} {...button} />
            ))}
          </div>

          <div className="socialNetworks">
            <h3 style={{ color: color }}>{socialNetwork}</h3>
            <div className="bottomLine"></div>
            <div className="containerSocialButtons">
              {socialNetworksData.map((network) => (
                <SocialButton
                  key={network.icon}
                  icon={network.icon}
                  onMouseOver={() =>
                    handleMouseOver(network.text, network.color)
                  }
                  onMouseOut={handleMouseOut}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
