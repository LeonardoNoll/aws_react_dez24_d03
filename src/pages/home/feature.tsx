import { ReactNode } from "react";

const Feature = ({
  icon,
  title,
  description,
}: {
  icon: ReactNode;
  title: string;
  description: string;
}) => {
  return (
    <div className="flex flex-col justify-start items-start gap-4 max-w-[218px]">
      <div className="bg-white-100 rounded-full flex justify-center p-2">
        {icon}
      </div>
      <h3 className="text-black-800 text-lg font-semibold">{title}</h3>
      <p className="text-black-600 ">{description}</p>
    </div>
  );
};

export default Feature;
