import React, { useState } from "react";
import Input from "../src/Input.jsx";

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
        url: "../../alpaca/backgrounds/blue50.png",
        onChange: setCurrentBackground,
      },
      {
        style: "Blue 60",
        url: "../../alpaca/backgrounds/blue60.png",
        onChange: setCurrentBackground,
      },
      {
        style: "Blue 70",
        url: "../../alpaca/backgrounds/blue70.png",
        onChange: setCurrentBackground,
      },
      {
        style: "Dark Blue 30",
        url: "../../alpaca/backgrounds/darkblue30.png",
        onChange: setCurrentBackground,
      },
      {
        style: "Dark Blue 50",
        url: "../../alpaca/backgrounds/darkblue50.png",
        onChange: setCurrentBackground,
      },
      {
        style: "Dark Blue 70",
        url: "../../alpaca/backgrounds/darkblue70.png",
        onChange: setCurrentBackground,
      },
      {
        style: "Green 50",
        url: "../../alpaca/backgrounds/green50.png",
        onChange: setCurrentBackground,
      },
      {
        style: "Green 60",
        url: "../../alpaca/backgrounds/green60.png",
        onChange: setCurrentBackground,
      },
      {
        style: "Green 70",
        url: "../../alpaca/backgrounds/green70.png",
        onChange: setCurrentBackground,
      },
      {
        style: "Grey 40",
        url: "../../alpaca/backgrounds/grey40.png",
        onChange: setCurrentBackground,
      },
      {
        style: "Grey 70",
        url: "../../alpaca/backgrounds/grey70.png",
        onChange: setCurrentBackground,
      },
      {
        style: "Grey 80",
        url: "../../alpaca/backgrounds/grey80.png",
        onChange: setCurrentBackground,
      },
      {
        style: "Red 50",
        url: "../../alpaca/backgrounds/red50.png",
        onChange: setCurrentBackground,
      },
      {
        style: "Red 60",
        url: "../../alpaca/backgrounds/red60.png",
        onChange: setCurrentBackground,
      },
      {
        style: "Red 70",
        url: "../../alpaca/backgrounds/red70.png",
        onChange: setCurrentBackground,
      },
      {
        style: "Yellow 50",
        url: "../../alpaca/backgrounds/yellow50.png",
        onChange: setCurrentBackground,
      },
      {
        style: "Yellow 60",
        url: "../../alpaca/backgrounds/yellow60.png",
        onChange: setCurrentBackground,
      },
      {
        style: "Yellow 70",
        url: "../../alpaca/backgrounds/yellow70.png",
        onChange: setCurrentBackground,
      },
    ],
    ears: [
      {
        style: "Default",
        url: "../../alpaca/ears/default.png",
        onChange: setCurrentEars,
      },
      {
        style: "Tilt Backward",
        url: "../../alpaca/ears/tilt-backward.png",
        onChange: setCurrentEars,
      },
      {
        style: "Tilt Forward",
        url: "../../alpaca/ears/tilt-forward.png",
        onChange: setCurrentEars,
      },
    ],
    eyes: [
      {
        style: "Default",
        url: "../../alpaca/eyes/default.png",
        onChange: setCurrentEyes,
      },
      {
        style: "Angry",
        url: "../../alpaca/eyes/angry.png",
        onChange: setCurrentEyes,
      },
      {
        style: "Naughty",
        url: "../../alpaca/eyes/naughty.png",
        onChange: setCurrentEyes,
      },
      {
        style: "Panda",
        url: "../../alpaca/eyes/panda.png",
        onChange: setCurrentEyes,
      },
      {
        style: "Smart",
        url: "../../alpaca/eyes/smart.png",
        onChange: setCurrentEyes,
      },
      {
        style: "Star",
        url: "../../alpaca/eyes/star.png",
        onChange: setCurrentEyes,
      },
    ],
    hair: [
      {
        style: "Default",
        url: "../../alpaca/hair/default.png",
        onChange: setCurrentHair,
      },
      {
        style: "Bang",
        url: "../../alpaca/hair/bang.png",
        onChange: setCurrentHair,
      },
      {
        style: "Curls",
        url: "../../alpaca/hair/curls.png",
        onChange: setCurrentHair,
      },
      {
        style: "Elegant",
        url: "../../alpaca/hair/elegant.png",
        onChange: setCurrentHair,
      },
      {
        style: "Fancy",
        url: "../../alpaca/hair/fancy.png",
        onChange: setCurrentHair,
      },
      {
        style: "Quiff",
        url: "../../alpaca/hair/quiff.png",
        onChange: setCurrentHair,
      },
      {
        style: "Short",
        url: "../../alpaca/hair/short.png",
        onChange: setCurrentHair,
      },
    ],
    leg: [
      {
        style: "Default",
        url: "../../alpaca/leg/default.png",
        onChange: setCurrentLeg,
      },
      {
        style: "Bubble Tea",
        url: "../../alpaca/leg/bubble-tea.png",
        onChange: setCurrentLeg,
      },
      {
        style: "Cookie",
        url: "../../alpaca/leg/cookie.png",
        onChange: setCurrentLeg,
      },
      {
        style: "Game Console",
        url: "../../alpaca/leg/game-console.png",
        onChange: setCurrentLeg,
      },
      {
        style: "Tilt Backward",
        url: "../../alpaca/leg/tilt-backward.png",
        onChange: setCurrentLeg,
      },
      {
        style: "Tilt Forward",
        url: "../../alpaca/leg/tilt-forward.png",
        onChange: setCurrentLeg,
      },
    ],
    mouth: [
      {
        style: "Default",
        url: "../../alpaca/mouth/default.png",
        onChange: setCurrentMouth,
      },
      {
        style: "Astonished",
        url: "../../alpaca/mouth/astonished.png",
        onChange: setCurrentMouth,
      },
      {
        style: "Eating",
        url: "../../alpaca/mouth/eating.png",
        onChange: setCurrentMouth,
      },
      {
        style: "Laugh",
        url: "../../alpaca/mouth/laugh.png",
        onChange: setCurrentMouth,
      },
      {
        style: "Tongue",
        url: "../../alpaca/mouth/tongue.png",
        onChange: setCurrentMouth,
      },
    ],
    neck: [
      {
        style: "Default",
        url: "../../alpaca/neck/default.png",
        onChange: setCurrentNeck,
      },
      {
        style: "Bend Backward",
        url: "../../alpaca/neck/bend-backward.png",
        onChange: setCurrentNeck,
      },
      {
        style: "Bend Forward",
        url: "../../alpaca/neck/bend-forward.png",
        onChange: setCurrentNeck,
      },
    ],
    accessories: [
      {
        style: "Earrings",
        url: "../../alpaca/accessories/earings.png",
        onChange: setCurrentAccessories,
      },
      {
        style: "Flower",
        url: "../../alpaca/accessories/flower.png",
        onChange: setCurrentAccessories,
      },
      {
        style: "Glasses",
        url: "../../alpaca/accessories/glasses.png",
        onChange: setCurrentAccessories,
      },
      {
        style: "Headphone",
        url: "../../alpaca/accessories/headphone.png",
        onChange: setCurrentAccessories,
      },
    ],
  };

  const optionsOnChange = (e) => {
    setCurrentView(e.target.value);
  };

  return (
    <div className="options-container">
      <div className="options-header">Accessorize Your Alpaca</div>
      <div className="btns-container">
        <Input
          id="radioBackground"
          value="background"
          onChange={() => setCurrentView("background")}
        />
        <Input value="ears" onChange={() => setCurrentView("ears")} />
        <Input value="eyes" onChange={() => setCurrentView("eyes")} />
        <Input value="hair" onChange={() => setCurrentView("hair")} />
        <Input value="leg" onChange={() => setCurrentView("leg")} />
        <Input value="mouth" onChange={() => setCurrentView("mouth")} />
        <Input value="neck" onChange={() => setCurrentView("neck")} />
        <Input
          value="accessories"
          onChange={() => setCurrentView("accessories")}
        />
      </div>
      <hr className="solid"></hr>
      <div className="options-header">Styles</div>
      <div className="btns-container styles">
        {currentView &&
          options[currentView].map((o) => {
            return (
              <Input
                value={o.style}
                onChange={() => {
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
