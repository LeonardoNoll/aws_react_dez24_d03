import { ReactNode, MouseEventHandler } from "react";

const Badge = ({
  children,
  onClick,
}: {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLParagraphElement>;
}) => {
  return (
    <p
      className="w-fit border py-1 px-2 rounded-4xl border-white-200 text-black-900"
      onClick={onClick}
    >
      {children}
    </p>
  );
};

export default Badge;
