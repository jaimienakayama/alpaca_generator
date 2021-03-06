import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./styles/styles.css";
import Image from "./Image.jsx";
import Options from "./Options.jsx";
import { toPng } from "dom-to-image";
import { saveAs } from "file-saver";

const App = () => {
  const [currentBackground, setCurrentBackground] = useState(null);
  const [currentEars, setCurrentEars] = useState(null);
  const [currentEyes, setCurrentEyes] = useState(null);
  const [currentHair, setCurrentHair] = useState(null);
  const [currentLeg, setCurrentLeg] = useState(null);
  const [currentMouth, setCurrentMouth] = useState(null);
  const [currentNeck, setCurrentNeck] = useState(null);
  const [currentAccessories, setCurrentAccessories] = useState(null);

  const downloadImage = () => {
    toPng(document.getElementById("alpaca")).then((d) => {
      saveAs(d, "my-alpaca.png");
    });
  };

  return (
    <div className="container">
      <div className="header-container header">
        Alpaca Image Generator{" "}
        <span className="author">by Jaimie Nakayama ⚡️</span>
      </div>
      <div className="content-container">
        <Image
          currentBackground={currentBackground}
          currentEars={currentEars}
          currentEyes={currentEyes}
          currentHair={currentHair}
          currentLeg={currentLeg}
          currentMouth={currentMouth}
          currentNeck={currentNeck}
          currentAccessories={currentAccessories}
        />
        <Options
          setCurrentBackground={setCurrentBackground}
          setCurrentEars={setCurrentEars}
          setCurrentEyes={setCurrentEyes}
          setCurrentHair={setCurrentHair}
          setCurrentLeg={setCurrentLeg}
          setCurrentMouth={setCurrentMouth}
          setCurrentNeck={setCurrentNeck}
          setCurrentAccessories={setCurrentAccessories}
        />
      </div>
      <div className="download-btn-container">
        <button className="btn" onClick={() => downloadImage()}>
          Download
        </button>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
