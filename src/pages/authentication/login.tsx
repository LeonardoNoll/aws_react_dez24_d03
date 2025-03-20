import { useSignIn } from "@clerk/clerk-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { BeatLoader } from "react-spinners";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errorMessage, setErrorMessage] = useState("");
  const [sucess, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const { isLoaded, signIn, setActive } = useSignIn();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    if (!isLoaded || loading) return;
    e.preventDefault();
    try {
      setErrorMessage("");
      setSuccess("");
      setLoading(true);
      const result = await signIn.create({
        identifier: email.trim(),
        password: password.trim(),
      });
      console.log(result);
      if (result.status === "complete") {
        console.log("Logged in");
        await setActive({ session: result.createdSessionId });
        setSuccess("Logged in");
        navigate("/");
      }
    } catch (error: any) {
      setErrorMessage(error.message);
      console.error(error);
    } finally {
      setLoading(false);
      setEmail("");
      setPassword("");
    }
  };

  if (!isLoaded) {
    return <BeatLoader />;
  }

  return (
    <>
      <div className="w-full ">
        <label htmlFor="email" className="text-black-900">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full "
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="w-full ">
        <label htmlFor="password" className="text-black-900">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          className="w-full"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {/* <p className="text-end w-full">Forgot password?</p> */}
      <button className="btn w-full" onClick={handleSubmit}>
        {loading ? <BeatLoader color="rgba(255, 255, 255, 1)" /> : "Login"}
      </button>
      <Link
        to="/authentication/register"
        className="text-center w-full text-black-600"
      >
        Don't have an account? Sign up
      </Link>
    </>
  );
};

export default Login;
