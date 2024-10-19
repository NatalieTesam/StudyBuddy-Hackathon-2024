import "./App.css";
import { useState } from "react";
import HappyBear from "./components/HappyBear";
import SpeechBubble from "./components/SpeechBubble";
import Features from "./components/Features";

const quote = "motivational";

function App() {
  const [color, setColor] = useState("#000000");
  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColor(e.target.value);
  };
  return (
    <>
      <input type='color' value={color} onChange={handleColorChange} />
      <SpeechBubble category={quote} />
      <HappyBear color={color} />
      <Features/>
      
      
    </>
  );
}

export default App;
