import React from "react";

const LineDisplay = () => {
  return (
    <div className="rotate-90 bg-transparent grid place-items-center">
      <main className="flex">
        {Array.from({ length: 50 }).map((_, index) => (
          <label key={index} className="line relative h-24 px-1 transition-transform duration-300">
            <input type="radio" name="line" className="absolute w-0 h-0 m-0 p-0" />
            <div className="h-full w-0.5 bg-gray-800 transition-all duration-300"></div>
          </label>
        ))}
      </main>
    </div>
  );
};

export default LineDisplay;
