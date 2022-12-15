import React from "react";
import "./Scene.css";
import Block from "./Block";

export default function Scene({ sceneInfo, onSceneClick }) {
  const blockClickHandler = (target) => onSceneClick(target);

  return (
    <div className="scene">
      {sceneInfo.map((block) => (
        <Block onBlockClick={blockClickHandler} blockInfo={block} />
      ))}
    </div>
  );
}
