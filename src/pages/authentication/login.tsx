import { Link } from "react-router";

const Login = () => {
  return (
    <>
      <div className="w-full ">
        <label htmlFor="email" className="text-black-900">
          Email
        </label>
        <input type="email" id="email" name="email" className="w-full " />
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
        />
      </div>
      <p className="text-end w-full">Forgot password?</p>
      <button className="btn w-full">Login</button>
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
