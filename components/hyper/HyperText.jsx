"use client";
import React from "react";

const HyperText = ({
  text = "Hyper Text",
  toText = "",
  className,
  delay = 30,
  rate = 2,
  onClick,
}) => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let interval = null;
  let fromText = text;

  const getHyperText = (e) => {
    let iterations = 0;
    clearInterval(interval);

    interval = setInterval(() => {
      e.target.innerText = fromText
        .split("")
        .map((_, index) => {
          if (index < iterations) {
            return fromText[index];
          }
          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");

      if (iterations >= fromText.length) {
        clearInterval(interval);
      }
      iterations += 1 / rate;
    }, delay);
  };

  return (
    <span
      className={className}
      onMouseOver={getHyperText}
      onClick={onClick}
      {...(toText && {
        onMouseEnter: () => {
          fromText = fromText === text ? toText : text;
        },
      })}
    >
      {text}
    </span>
  );
};

export default HyperText;
