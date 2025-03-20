import { useSignUp } from "@clerk/clerk-react";
import { useState } from "react";
import { Link } from "react-router";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errorMessage, setErrorMessage] = useState("");
  const [sucess, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const { isLoaded, signUp } = useSignUp();

  const handleSubmit = async (e: React.FormEvent) => {
    if (!isLoaded) return;
    e.preventDefault();
    try {
      setErrorMessage("");
      setSuccess("");
      setLoading(true);
      await signUp.create({
        emailAddress: email,
        password: password,
        firstName: name.split(" ")[0],
        lastName: name.split(" ").slice(1).join(" "),
      });
      await signUp.prepareEmailAddressVerification({
        strategy: "email_link",
        redirectUrl: "http://localhost:5173/",
      });
      setSuccess("Sign up successfull Check your email for verification link.");
    } catch (error: any) {
      setErrorMessage(error.message);
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (!isLoaded) {
    return <p>Loading...</p>;
  }
  return (
    <>
      <div className="w-full ">
        <label htmlFor="name" className="text-black-900">
          Name
        </label>
        <input
          type="name"
          id="name"
          name="name"
          className="w-full "
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
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
      <p className=" w-full">
        By creating an account you agree with our Terms of Service, Privacy
        Policy,
      </p>
      <button className="btn w-full">Create account</button>
      <Link to="/authentication" className="text-center w-full text-black-600">
        Already have an account? Login
      </Link>
    </>
  );
};

export default Register;
