import React from "react";

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
    <>
      <img
        src={
          currentBackground
            ? currentBackground
            : "../../alpaca/backgrounds/green60.png"
        }
        alt="background"
        className="image-background"
      />
      <img
        src={currentEars ? currentEars : "../../alpaca/ears/default.png"}
        alt="ears"
        className="ears"
      />
      <img
        src={
          currentAccessories
            ? currentAccessories
            : "../../alpaca/accessories/headphone.png"
        }
        alt="accessories"
        className="accessories"
      />
      <img
        src={currentEyes ? currentEyes : "../../alpaca/eyes/default.png"}
        alt="eyes"
        className="eyes"
      />
      <img
        src={currentHair ? currentHair : "../../alpaca/hair/default.png"}
        alt="hair"
        className="hair"
      />
      <img
        src={currentLeg ? currentLeg : "../../alpaca/leg/default.png"}
        alt="leg"
        className="leg"
      />
      <img
        src={currentMouth ? currentMouth : "../../alpaca/mouth/default.png"}
        alt="mouth"
        className="mouth"
      />
      <img
        src={currentNeck ? currentNeck : "../../alpaca/neck/default.png"}
        alt="neck"
        className="neck"
      />
      <img src="../../alpaca/nose.png" alt="nose" className="nose" />
    </>
  );
};

export default Image;
