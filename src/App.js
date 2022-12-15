import "./App.css";
import React, { useState } from "react";
import Scene from "./components/Scene/Scene";

function App() {
  const [currentScene, setCurrentScene] = useState("room1");

  const sceneClickHandler = (target) => setCurrentScene(target);

  const content = {
    room1: [
      { text: "This is Room 1", type: "h1" },
      { text: "This is some paragraph", type: "p" },
      { text: "Go to Room 2", type: "button", changeSceneTarget: "room2" },
    ],
    room2: [
      { text: "This is Room 2", type: "h1" },
      { text: "This is some paragraph", type: "p" },
      { text: "Go to Room 1", type: "button", changeSceneTarget: "room1" },
    ],
  };

  return (
    <div className="App">
      <Scene onSceneClick={sceneClickHandler} sceneInfo={content[currentScene]}></Scene>
    </div>
  );
}

export default App;
