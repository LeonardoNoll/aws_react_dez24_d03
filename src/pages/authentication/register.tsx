import { useSignUp } from "@clerk/clerk-react";
import { useState } from "react";
import { Link } from "react-router";
import { BeatLoader } from "react-spinners";
import InvalidInputMessage from "../../components/ui/invalidInputMessage";
import {
  validateEmail,
  validatePassword,
  validateUserName,
} from "../../utils/validations";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const formValidation = {
    name: validateUserName(name),
    email: validateEmail(email),
    password: validatePassword(password),
  };
  //TODO: add error message
  const [errorMessage, setErrorMessage] = useState("");
  const [sucess, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const { isLoaded, signUp } = useSignUp();

  const handleSubmit = async (e: React.FormEvent) => {
    if (!isLoaded || loading) return;
    e.preventDefault();
    if (
      !(formValidation.name && formValidation.email && formValidation.password)
    ) {
      setErrorMessage("Please fill all fields correctly");
      return;
    }
    try {
      setErrorMessage("");
      setSuccess("");
      setLoading(true);
      await signUp.create({
        emailAddress: email.trim(),
        password: password.trim(),
        firstName: name.split(" ")[0],
        lastName: name.split(" ").slice(1).join(" ").trim(),
      });
      await signUp.prepareEmailAddressVerification({
        strategy: "email_link",
        redirectUrl: "http://localhost:5173/",
      });
      setSuccess("Confirmation link sent to your email!");
    } catch (error: any) {
      setErrorMessage(error.message);
      console.error(error);
    } finally {
      setLoading(false);
      setName("");
      setEmail("");
      setPassword("");
    }
  };

  if (!isLoaded) {
    return <BeatLoader />;
  }
  return (
    <form
      className="flex flex-col items-center justify-center gap-8 "
      onSubmit={handleSubmit}
    >
      <div className="w-full space-y-1 ">
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
        {name && !formValidation.name && (
          <InvalidInputMessage>
            Name must be at least 2 words long
          </InvalidInputMessage>
        )}
      </div>
      <div className="w-full space-y-1">
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
        {email && !formValidation.email && (
          <InvalidInputMessage>Please enter a valid email</InvalidInputMessage>
        )}
      </div>
      <div className="w-full space-y-1">
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
        {password && !formValidation.password && (
          <InvalidInputMessage>
            Password must contain 8 characters, 1 uppercase, 1 lowercase, 1
            number, and 1 special character
          </InvalidInputMessage>
        )}
      </div>
      <p className=" w-full">
        By creating an account you agree with our Terms of Service, Privacy
        Policy,
      </p>
      <button
        type="submit"
        className={sucess ? "btn w-full bg-green-700" : "btn w-full"}
      >
        {loading ? (
          <BeatLoader color="rgba(255, 255, 255, 1)" />
        ) : sucess ? (
          <>{sucess}</>
        ) : (
          "Create account"
        )}
      </button>
      {errorMessage && (
        <InvalidInputMessage>{errorMessage}</InvalidInputMessage>
      )}
      <Link to="/authentication" className="text-center w-full text-black-600">
        Already have an account? Login
      </Link>
    </form>
  );
};

export default Register;
