import React from "react";
import Block from "./Block";

export default function Scene({ sceneInfo, onSceneClick }) {
  const blockClickHandler = (target) => onSceneClick(target);

  return (
    <div className="Scene">
      {sceneInfo.map((block) => (
        <Block onBlockClick={blockClickHandler} blockInfo={block} />
      ))}
    </div>
  );
}
