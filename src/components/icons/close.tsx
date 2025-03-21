const Close = ({
  color = "#5C5F6A",
  size = 24,
}: {
  color?: string;
  size?: number;
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17 7L7 17"
        stroke={color}
        stroke-width="1.7"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M7 7L17 17"
        stroke={color}
        stroke-width="1.7"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default Close;
