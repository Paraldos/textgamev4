import "./App.css";
import React, { useState } from "react";
import Scene from "./components/Scene/Scene";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [currentScene, setCurrentScene] = useState("room1");

  const sceneClickHandler = (target) => setCurrentScene(target);

  const content = {
    room1: [
      { text: "This is Room 1", type: "h1" },
      {
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        type: "p",
      },
      {
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        type: "p",
      },

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
      <Navbar></Navbar>
      <Scene onSceneClick={sceneClickHandler} sceneInfo={content[currentScene]}></Scene>
    </div>
  );
}

export default App;
