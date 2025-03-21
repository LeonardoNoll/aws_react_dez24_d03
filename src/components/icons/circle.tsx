const Circle = ({ color = "Blue" }: { color?: string }) => {
  const colors: Record<string, string> = {
    Green: "#A8FFB5",
    Black: "#000000",
    Blue: "#A8B2FF",
    Red: "#FFA8A8",
    Yellow: "#FFD780",
  };
  return (
    <svg
      width="12"
      height="13"
      viewBox="0 0 12 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect y="0.5" width="12" height="12" rx="6" fill={colors[color]} />
    </svg>
  );
};

export default Circle;
