import React from "react";

export default function Block({ blockInfo, onBlockClick }) {
  const txt = blockInfo.text;

  const onClickHandler = () => onBlockClick(blockInfo.changeSceneTarget);

  if (blockInfo.type === "h1") return <h1>{txt}</h1>;
  if (blockInfo.type === "p") return <p>{txt}</p>;
  if (blockInfo.type === "button") return <button onClick={onClickHandler}>{txt}</button>;
}
