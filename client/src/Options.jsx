import React, { useState } from "react";
import Button from "../src/Button.jsx";
import blue50 from "../dist/alpaca/backgrounds/blue50.png";
import blue60 from "../dist/alpaca/backgrounds/blue60.png";
import blue70 from "../dist/alpaca/backgrounds/blue70.png";
import darkblue30 from "../dist/alpaca/backgrounds/darkblue30.png";
import darkblue50 from "../dist/alpaca/backgrounds/darkblue50.png";
import darkblue70 from "../dist/alpaca/backgrounds/darkblue70.png";
import green50 from "../dist/alpaca/backgrounds/green50.png";
import green60 from "../dist/alpaca/backgrounds/green60.png";
import green70 from "../dist/alpaca/backgrounds/green70.png";
import grey40 from "../dist/alpaca/backgrounds/grey40.png";
import grey70 from "../dist/alpaca/backgrounds/grey70.png";
import grey80 from "../dist/alpaca/backgrounds/grey80.png";
import red50 from "../dist/alpaca/backgrounds/red50.png";
import red60 from "../dist/alpaca/backgrounds/red60.png";
import red70 from "../dist/alpaca/backgrounds/red70.png";
import yellow50 from "../dist/alpaca/backgrounds/yellow50.png";
import yellow60 from "../dist/alpaca/backgrounds/yellow60.png";
import yellow70 from "../dist/alpaca/backgrounds/yellow70.png";
import defaultEars from "../dist/alpaca/ears/default.png";
import tiltBackEars from "../dist/alpaca/ears/tilt-backward.png";
import tiltForEars from "../dist/alpaca/ears/tilt-forward.png";
import defaultEyes from "../dist/alpaca/eyes/default.png";
import angryEyes from "../dist/alpaca/eyes/angry.png";
import naughtyEyes from "../dist/alpaca/eyes/naughty.png";
import pandaEyes from "../dist/alpaca/eyes/panda.png";
import smartEyes from "../dist/alpaca/eyes/smart.png";
import starEyes from "../dist/alpaca/eyes/star.png";
import defaultHair from "../dist/alpaca/hair/default.png";
import bangHair from "../dist/alpaca/hair/bang.png";
import curlsHair from "../dist/alpaca/hair/curls.png";
import elegantHair from "../dist/alpaca/hair/elegant.png";
import fancyHair from "../dist/alpaca/hair/fancy.png";
import shortHair from "../dist/alpaca/hair/short.png";
import defaultLeg from "../dist/alpaca/leg/default.png";
import bubbleTeaLeg from "../dist/alpaca/leg/bubble-tea.png";
import cookieLeg from "../dist/alpaca/leg/cookie.png";
import gameConsoleLeg from "../dist/alpaca/leg/game-console.png";
import tiltBackLeg from "../dist/alpaca/leg/tilt-backward.png";
import tiltForLeg from "../dist/alpaca/leg/tilt-forward.png";
import defaultMouth from "../dist/alpaca/mouth/default.png";
import astonishedMouth from "../dist/alpaca/mouth/astonished.png";
import eatingMouth from "../dist/alpaca/mouth/eating.png";
import laughMouth from "../dist/alpaca/mouth/laugh.png";
import tongueMouth from "../dist/alpaca/mouth/tongue.png";
import defaultNeck from "../dist/alpaca/neck/default.png";
import bendBackNeck from "../dist/alpaca/neck/bend-backward.png";
import bendForNeck from "../dist/alpaca/neck/bend-forward.png";
import earringsAccess from "../dist/alpaca/accessories/earings.png";
import flowerAccess from "../dist/alpaca/accessories/flower.png";
import glassesAccess from "../dist/alpaca/accessories/glasses.png";
import headphoneAccess from "../dist/alpaca/accessories/headphone.png";

const Options = ({
  setCurrentBackground,
  setCurrentEars,
  setCurrentEyes,
  setCurrentHair,
  setCurrentLeg,
  setCurrentMouth,
  setCurrentNeck,
  setCurrentAccessories,
}) => {
  const [currentView, setCurrentView] = useState(null);

  const options = {
    background: [
      {
        style: "Blue 50",
        url: blue50,
        onChange: setCurrentBackground,
      },
      {
        style: "Blue 60",
        url: blue60,
        onChange: setCurrentBackground,
      },
      {
        style: "Blue 70",
        url: blue70,
        onChange: setCurrentBackground,
      },
      {
        style: "Dark Blue 30",
        url: darkblue30,
        onChange: setCurrentBackground,
      },
      {
        style: "Dark Blue 50",
        url: darkblue50,
        onChange: setCurrentBackground,
      },
      {
        style: "Dark Blue 70",
        url: darkblue70,
        onChange: setCurrentBackground,
      },
      {
        style: "Green 50",
        url: green50,
        onChange: setCurrentBackground,
      },
      {
        style: "Green 60",
        url: green60,
        onChange: setCurrentBackground,
      },
      {
        style: "Green 70",
        url: green70,
        onChange: setCurrentBackground,
      },
      {
        style: "Grey 40",
        url: grey40,
        onChange: setCurrentBackground,
      },
      {
        style: "Grey 70",
        url: grey70,
        onChange: setCurrentBackground,
      },
      {
        style: "Grey 80",
        url: grey80,
        onChange: setCurrentBackground,
      },
      {
        style: "Red 50",
        url: red50,
        onChange: setCurrentBackground,
      },
      {
        style: "Red 60",
        url: red60,
        onChange: setCurrentBackground,
      },
      {
        style: "Red 70",
        url: red70,
        onChange: setCurrentBackground,
      },
      {
        style: "Yellow 50",
        url: yellow50,
        onChange: setCurrentBackground,
      },
      {
        style: "Yellow 60",
        url: yellow60,
        onChange: setCurrentBackground,
      },
      {
        style: "Yellow 70",
        url: yellow70,
        onChange: setCurrentBackground,
      },
    ],
    ears: [
      {
        style: "Default",
        url: defaultEars,
        onChange: setCurrentEars,
      },
      {
        style: "Tilt Backward",
        url: tiltBackEars,
        onChange: setCurrentEars,
      },
      {
        style: "Tilt Forward",
        url: tiltForEars,
        onChange: setCurrentEars,
      },
    ],
    eyes: [
      {
        style: "Default",
        url: defaultEyes,
        onChange: setCurrentEyes,
      },
      {
        style: "Angry",
        url: angryEyes,
        onChange: setCurrentEyes,
      },
      {
        style: "Naughty",
        url: naughtyEyes,
        onChange: setCurrentEyes,
      },
      {
        style: "Panda",
        url: pandaEyes,
        onChange: setCurrentEyes,
      },
      {
        style: "Smart",
        url: smartEyes,
        onChange: setCurrentEyes,
      },
      {
        style: "Star",
        url: starEyes,
        onChange: setCurrentEyes,
      },
    ],
    hair: [
      {
        style: "Default",
        url: defaultHair,
        onChange: setCurrentHair,
      },
      {
        style: "Bang",
        url: bangHair,
        onChange: setCurrentHair,
      },
      {
        style: "Curls",
        url: curlsHair,
        onChange: setCurrentHair,
      },
      {
        style: "Elegant",
        url: elegantHair,
        onChange: setCurrentHair,
      },
      {
        style: "Fancy",
        url: fancyHair,
        onChange: setCurrentHair,
      },
      {
        style: "Short",
        url: shortHair,
        onChange: setCurrentHair,
      },
    ],
    leg: [
      {
        style: "Default",
        url: defaultLeg,
        onChange: setCurrentLeg,
      },
      {
        style: "Bubble Tea",
        url: bubbleTeaLeg,
        onChange: setCurrentLeg,
      },
      {
        style: "Cookie",
        url: cookieLeg,
        onChange: setCurrentLeg,
      },
      {
        style: "Game Console",
        url: gameConsoleLeg,
        onChange: setCurrentLeg,
      },
      {
        style: "Tilt Backward",
        url: tiltBackLeg,
        onChange: setCurrentLeg,
      },
      {
        style: "Tilt Forward",
        url: tiltForLeg,
        onChange: setCurrentLeg,
      },
    ],
    mouth: [
      {
        style: "Default",
        url: defaultMouth,
        onChange: setCurrentMouth,
      },
      {
        style: "Astonished",
        url: astonishedMouth,
        onChange: setCurrentMouth,
      },
      {
        style: "Eating",
        url: eatingMouth,
        onChange: setCurrentMouth,
      },
      {
        style: "Laugh",
        url: laughMouth,
        onChange: setCurrentMouth,
      },
      {
        style: "Tongue",
        url: tongueMouth,
        onChange: setCurrentMouth,
      },
    ],
    neck: [
      {
        style: "Default",
        url: defaultNeck,
        onChange: setCurrentNeck,
      },
      {
        style: "Bend Backward",
        url: bendBackNeck,
        onChange: setCurrentNeck,
      },
      {
        style: "Bend Forward",
        url: bendForNeck,
        onChange: setCurrentNeck,
      },
    ],
    accessories: [
      {
        style: "Earrings",
        url: earringsAccess,
        onChange: setCurrentAccessories,
      },
      {
        style: "Flower",
        url: flowerAccess,
        onChange: setCurrentAccessories,
      },
      {
        style: "Glasses",
        url: glassesAccess,
        onChange: setCurrentAccessories,
      },
      {
        style: "Headphone",
        url: headphoneAccess,
        onChange: setCurrentAccessories,
      },
    ],
  };

  const addClass = (e) => {
    const selectedProperty = document.querySelectorAll(".property-selected");
    if (selectedProperty.length === 0) {
      e.target.classList.toggle("property-selected");
    } else {
      selectedProperty[0].classList.toggle("property-selected");
      e.target.classList.toggle("property-selected");
    }

    const currentSelectedStyles = document.querySelectorAll(".styles-selected");
    if (currentSelectedStyles.length > 0) {
      currentSelectedStyles[0].classList.toggle("styles-selected");
    }
  };

  return (
    <div className="options-container">
      <div className="options-header">Accessorize Your Alpaca</div>
      <div className="btns-container">
        <Button
          value="background"
          onChange={(e) => {
            addClass(e);
            setCurrentView("background");
          }}
        />
        <Button
          value="ears"
          onChange={(e) => {
            addClass(e);
            setCurrentView("ears");
          }}
        />
        <Button
          value="eyes"
          onChange={(e) => {
            addClass(e);
            setCurrentView("eyes");
          }}
        />
        <Button
          value="hair"
          onChange={(e) => {
            addClass(e);
            setCurrentView("hair");
          }}
        />
        <Button
          value="leg"
          onChange={(e) => {
            addClass(e);
            setCurrentView("leg");
          }}
        />
        <Button
          value="mouth"
          onChange={(e) => {
            addClass(e);
            setCurrentView("mouth");
          }}
        />
        <Button
          value="neck"
          onChange={(e) => {
            addClass(e);
            setCurrentView("neck");
          }}
        />
        <Button
          value="accessories"
          onChange={(e) => {
            addClass(e);
            setCurrentView("accessories");
          }}
        />
      </div>
      <hr className="solid"></hr>
      <div className="options-header">Styles</div>
      <div className="btns-container styles">
        {currentView &&
          options[currentView].map((o) => {
            return (
              <Button
                value={o.style}
                onChange={(e) => {
                  const selectedStyles =
                    document.querySelectorAll(".styles-selected");
                  if (selectedStyles.length === 0) {
                    e.target.classList.toggle("styles-selected");
                  } else {
                    selectedStyles[0].classList.toggle("styles-selected");
                    e.target.classList.toggle("styles-selected");
                  }
                  o.onChange(o.url);
                }}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Options;
