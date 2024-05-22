"use client";

import React, { useState } from "react";

const ClipText = () => {
  const [yPosition, setYPosition] = useState(105); // Default position

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const newYPosition = event.clientY - event.currentTarget.getBoundingClientRect().top;
    setYPosition(newYPosition);
  };

  return (
    <div
      className="relative flex flex-col items-center justify-center bg-transparent p-12 cursor-pointer"
      onMouseMove={handleMouseMove}
    >
      <h1 className="text-3xl font-bold">
        Clip paths
        <br />
        are super cool.
      </h1>
      <div
        className="scanline absolute top-0 w-full border-t-2 border-cyan-500"
        style={{ transform: `translateY(${yPosition}px)` }}
      ></div>
      <div
        className="scanner absolute inset-0 flex items-center p-12"
        style={{ clipPath: `inset(${yPosition}px 0 0)` }}
      >
        <div className="grad absolute inset-0 bg-gradient-to-b from-cyan-500 to-transparent"></div>
        <div className="outlineText text-3xl font-bold text-background">
          Clip paths
          <br />
          are super cool.
        </div>
      </div>
    </div>
  );
};

export default ClipText;
