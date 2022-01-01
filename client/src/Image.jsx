import React from "react";
import defaultBg from "../dist/alpaca/backgrounds/green60.png";
import defaultEars from "../dist/alpaca/ears/default.png";
import defaultAccessories from "../dist/alpaca/accessories/headphone.png";
import defaultEyes from "../dist/alpaca/eyes/default.png";
import defaultHair from "../dist/alpaca/hair/default.png";
import defaultLeg from "../dist/alpaca/leg/default.png";
import defaultMouth from "../dist/alpaca/mouth/default.png";
import defaultNeck from "../dist/alpaca/neck/default.png";
import nose from "../dist/alpaca/nose.png";

const Image = ({
  currentBackground,
  currentEars,
  currentEyes,
  currentHair,
  currentLeg,
  currentMouth,
  currentNeck,
  currentAccessories,
}) => {
  return (
    <div id="alpaca" className="alpaca">
      <img
        src={currentBackground ? currentBackground : defaultBg}
        alt="background"
        className="image-background"
      />
      <img
        src={currentEars ? currentEars : defaultEars}
        alt="ears"
        className="ears"
      />
      <img
        src={currentAccessories ? currentAccessories : defaultAccessories}
        alt="accessories"
        className="accessories"
      />
      <img
        src={currentEyes ? currentEyes : defaultEyes}
        alt="eyes"
        className="eyes"
      />
      <img
        src={currentHair ? currentHair : defaultHair}
        alt="hair"
        className="hair"
      />
      <img
        src={currentLeg ? currentLeg : defaultLeg}
        alt="leg"
        className="leg"
      />
      <img
        src={currentMouth ? currentMouth : defaultMouth}
        alt="mouth"
        className="mouth"
      />
      <img
        src={currentNeck ? currentNeck : defaultNeck}
        alt="neck"
        className="neck"
      />
      <img src={nose} alt="nose" className="nose" />
    </div>
  );
};

export default Image;
