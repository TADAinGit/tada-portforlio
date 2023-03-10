"use client";
import React, { useEffect } from "react";

const HyperCard = ({ children, onClick }) => {
  useEffect(() => {
    const cards = document.getElementById("cards");

    cards.onmousemove = (e) => {
      for (const card of document.getElementsByClassName("card")) {
        const rect = card.getBoundingClientRect(),
          x = e.clientX - rect.left,
          y = e.clientY - rect.top;

        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
      }
    };
  }, []);
  return (
    <div className="card" onClick={onClick}>
      <div className="card-content">{children}</div>
    </div>
  );
};

export default HyperCard;
