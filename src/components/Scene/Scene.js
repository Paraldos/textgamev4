import React from "react";
import "./Scene.css";
import Block from "./Block";

export default function Scene({ scene }) {
  return (
    <div className="scene">
      {scene.map((block) => (
        <Block block={block} />
      ))}
    </div>
  );
}
