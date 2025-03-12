import { ReactNode } from "react";

const Badge = ({ children }: { children: ReactNode }) => {
  return (
    <p className="w-fit border py-1 px-2 rounded-4xl border-white-200 text-black-900">
      {children}
    </p>
  );
};
export default Badge;
