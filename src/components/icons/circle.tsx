import React from "react";

const Circle = ({ color = "#A8B2FF" }: { color?: string }) => {
  return (
    <svg
      width="12"
      height="13"
      viewBox="0 0 12 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect y="0.5" width="12" height="12" rx="6" fill={color} />
    </svg>
  );
};

export default Circle;
