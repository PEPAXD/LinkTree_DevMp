import React from "react";
import "./styles/App.scss";

import LinkButton from "./LinkButton";
import SocialButton from "./SocialButton";

import devImg from "../assets/devImg.png";

function App() {
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
            <LinkButton text={"My Work Portfoli"} />
            <LinkButton text={"Download CV"} />

            <div className="socialNetworks">
              <h3>Follow Me!</h3>
              <div className="containerSocialButtons">
                <SocialButton text={"A"} />
                <SocialButton text={"B"} />
                <SocialButton text={"C"} />
                <SocialButton text={"D"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
