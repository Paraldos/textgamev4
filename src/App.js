import "./App.css";
import React, { useState } from "react";

import Scene from "./components/Scene/Scene";

function App() {
  const [currentScene, setCurrentScene] = useState("room1");

  const content = {
    room1: [
      { text: "This is Room 1", type: "h1" },
      { text: "This is some paragraph", type: "p" },
      { text: "This is some paragraph", type: "p" },
      { text: "This is some button", type: "button" },
      { text: "This is some button", type: "button" },
      { text: "This is some button", type: "button" },
    ],
    room2: [
      { text: "This is Room 2", type: "h1" },
      { text: "This is some paragraph", type: "p" },
      { text: "This is some paragraph", type: "p" },
      { text: "This is some button", type: "button" },
      { text: "This is some button", type: "button" },
      { text: "This is some button", type: "button" },
    ],
  };

  return (
    <div className="App">
      <Scene scene={content[currentScene]}></Scene>
    </div>
  );
}

export default App;
