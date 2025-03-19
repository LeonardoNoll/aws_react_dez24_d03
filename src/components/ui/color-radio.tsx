import React from "react";

const ColorRadio = ({ color }: { color: string }) => {
  return (
    <div className="inline-flex items-center">
      <label
        className="relative flex items-center cursor-pointer"
        htmlFor={color}
      >
        <input
          name="color"
          type="radio"
          className={`peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-300  transition-all checked:bg-red-500`}
          value={color}
          id={color}
        />
        <span
          className={`absolute w-3 h-3 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 checked:bg-red-500`}
        />
      </label>
    </div>
  );
};

export default ColorRadio;
