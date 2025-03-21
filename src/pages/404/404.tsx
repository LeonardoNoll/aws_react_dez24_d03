import { Link } from "react-router";
import tumbleWeed from "../../assets/images/tumbleweed.png";
import Arrow from "../../components/icons/arrow";

const Page404 = () => {
  return (
    <main className="flex flex-col gap-12 w-screen md:px-md justify-center items-center py-24">
      <h1>A little lost there, buddy?</h1>
      <img
        src={tumbleWeed}
        alt="Tumbleweed rolling in the desert"
        width={200}
      />
      <Link to="/" className="btn">
        The shop is this way
        <Arrow />
      </Link>
    </main>
  );
};

export default Page404;
