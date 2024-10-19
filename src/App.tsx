import "./App.css";
import { useState } from "react";
import HappyBear from "./components/HappyBear";
// import SpeechBubble from "./components/SpeechBubble";

function App() {
  const [color, setColor] = useState("#000000");
  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColor(e.target.value);
  };
  return (
    <>
      <input type='color' value={color} onChange={handleColorChange} />
      <HappyBear color={color} />
      {/* <SpeechBubble /> */}
    </>
  );
}

export default App;
