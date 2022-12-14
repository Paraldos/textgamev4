import React from "react";

export default function Block({ block }) {
  if (block.type === "h1") return <h1>{block.text}</h1>;
  if (block.type === "p") return <p>{block.text}</p>;
  if (block.type === "button") return <button>{block.text}</button>;
}
