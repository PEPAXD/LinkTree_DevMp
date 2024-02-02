import React, { useState } from "react";
import "./styles/App.scss";

import LinkButton from "./LinkButton";
import SocialButton from "./SocialButton";

import devImg from "../assets/devImg.png";

const socialNetworksData = [
  { icon: "linkedin", text: "mauro-pepa-dev" },
  { icon: "instagram", text: "@mauropepa97" },
  { icon: "github", text: "PEPAXD" },
  { icon: "whatsapp", text: "ARG +549 3541-628524" },
  { icon: "mail", text: "mauropepa1997oficial@gmail.com" },
];

function App() {

  // Print-SocialNetworks-Name
  const [socialNetwork, setSocialNetwork] = useState("CONTACT ME!");

  const handleMouseOver = (networkName) => {
    setSocialNetwork(networkName);
  };

  const handleMouseOut = () => {
    setSocialNetwork("CONTACT ME!");
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


              <LinkButton text={"Go to my website"} />
              <LinkButton text={"My Work Portfolio"} />
              <LinkButton text={"Download CV"} />


            <div className="socialNetworks">
              <h3>{socialNetwork}</h3>
              <div className="bottomLine"></div>
              <div className="containerSocialButtons">
                {socialNetworksData.map((network) => (
                  <SocialButton
                    key={network.icon}
                    icon={network.icon}
                    onMouseOver={() => handleMouseOver(network.text)}
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
