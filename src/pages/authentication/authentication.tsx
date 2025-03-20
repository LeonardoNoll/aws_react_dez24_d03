import { Outlet } from "react-router";
import Google from "../../components/icons/google";
import Line from "../../components/ui/line";

const Authentication = () => {
  return (
    <main className="flex flex-col items-center justify-center w-[320px] mx-auto h-full py-24 gap-8">
      <button className="flex items-center justify-center gap-2 h-12 bg-white-900 border border-black-200 px-6 py-3 rounded-md w-full ">
        <Google />
        <p>Continue with Google</p>
      </button>
      <div className="flex items-center gap-4 ">
        <Line />
        <p className="text-black-600">or</p>
        <Line />
      </div>
      <Outlet />
    </main>
  );
};

export default Authentication;
