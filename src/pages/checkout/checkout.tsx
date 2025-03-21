import { useUser } from "@clerk/clerk-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { BeatLoader } from "react-spinners";
import getCep from "../../utils/getCep";
import CheckOutSummary from "./checkout-summary";

const Checkout = () => {
  const { isLoaded, user } = useUser();
  const navigate = useNavigate();
  const zipCodeRegex = /^\d{5}-\d{3}$/;

  const [zipCode, setZipCode] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [fullName, setFullName] = useState(
    isLoaded ? user?.firstName + " " + user?.lastName : "",
  );
  const [email, setEmail] = useState(
    isLoaded ? user?.primaryEmailAddress?.emailAddress : "",
  );

  if (!isLoaded) return <BeatLoader />;
  if (!user) {
    navigate("/authentication");
    return null;
  }
  const handleCheckOut = () => {
    const checkoutDetails = {
      zipCode,
      country,
      city,
      state,
      streetAddress,
      fullName,
      email,
    };
  };

  const getZipCodeInfo = async (zipCode: string) => {
    const data = await getCep(zipCode);
    setCountry("Brazil");
    setCity(data.localidade);
    setState(data.uf);
    setStreetAddress(data.logradouro);
  };

  return (
    <main className="flex flex-col md:flex-row py-24 md:px-md  gap-12">
      <section className="flex-1/2">
        <form className="checkout-form">
          <div>
            <label htmlFor="zip-code">Zip Code</label>
            <input
              type="text"
              id="zip-code"
              value={zipCode}
              onChange={(e) => {
                setZipCode(e.target.value);
                if (zipCodeRegex.test(e.target.value)) {
                  getZipCodeInfo(e.target.value);
                }
              }}
            />
          </div>
          <div>
            <label htmlFor="country">Country</label>
            <input
              type="text"
              id="text"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="city">City</label>
            <input
              type="text"
              id="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="state">State</label>
            <input
              type="text"
              id="state"
              value={state}
              onChange={(e) => setState(e.target.value)}
            />
          </div>
          <div className="col-span-2">
            <label htmlFor="street-address">Street Address</label>
            <input
              type="text"
              id="street-address"
              value={streetAddress}
              onChange={(e) => setStreetAddress(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" disabled value={email} />
          </div>
          <div>
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" disabled value={fullName} />
          </div>
        </form>
      </section>
      <CheckOutSummary checkOut={handleCheckOut} />
    </main>
  );
};

export default Checkout;
