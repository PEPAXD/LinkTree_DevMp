import React, { useState } from "react";
import "./styles/App.scss";

import LinkButton from "./LinkButton";
import SocialButton from "./SocialButton";

import devImg from "../assets/devImg.png";

const socialNetworksData = [
  { icon: "linkedin", text: "mauro-pepa-dev", color: "#0077B5"},
  { icon: "instagram", text: "@mauropepa97", color: "#C13584" },
  { icon: "github", text: "PEPAXD", color: "#333" },
  { icon: "whatsapp", text: "ARG +549 3541-628524", color: "#25D366" },
  { icon: "mail", text: "mauropepa1997oficial@gmail.com", color: "#D44638" },
];

const linkA = "https://www.mauropepacvwebsite.com";
const linkB = "https://github.com/PEPAXD?tab=stars";

function App() {

  //View PDF
  function viewPDF() {
    console.log("View PDF");
    const urlPDF = '/CV PEPA.pdf';
    window.open(urlPDF, '_blank');
}

  // Print-SocialNetworks-Name
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
    <>
      <div className="shadowWallpaper">
        <div className="container">
          <div className="card">
            <div className="devData">
              <img src={devImg} alt="MyPhoto" className="DevImg" />
              <h1>Mauro Exequiel Pepa</h1>
              <p>Frontend Developer - Digital Designer</p>
            </div>

            <div className="containersLinks">
              <LinkButton text={"Go to my website"} href={linkA}/>
              <LinkButton text={"My Work Portfolio"} href={linkB} />
              <LinkButton text={"Download CV"} onClick={viewPDF} />
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
    </>
  );
}

export default App;
