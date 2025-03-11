import logoFooter from "../assets/icons/logo-footer.svg";
import github from "../assets/icons/github.svg";
import instagram from "../assets/icons/instagram.svg";
import youtube from "../assets/icons/youtube.svg";
import mastercard from "../assets/icons/mastercard.svg";
import visa from "../assets/icons/visa.svg";
import amex from "../assets/icons/amex.svg";
const Footer = ({ newsletter = false }: { newsletter?: boolean }) => {
  return (
    <footer className="text-black-500 w-screen">
      {newsletter && (
        <div
          id="newsletter"
          className="flex justify-between items-center bg-white-100 md:px-md py-12"
        >
          <aside className="space-y-2">
            <h2 className="text-2xl text-black-900 font-bold ">
              Join Our Newsletter
            </h2>
            <p>We love to surprise our subscribers with occasional gifts</p>
          </aside>
          <form action="POST" className="flex gap-4">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
            />
            <button type="submit" className="btn">
              Subscribe
            </button>
          </form>
        </div>
      )}
      {/* <div className="md:px-md py-8 grid grid-cols-1 md:grid-cols-3 gap-4"> */}
      <div className="md:px-md py-12 flex justify-between">
        <section id="social-media" className="space-y-2">
          <div className="flex items-center gap-2">
            <img src={logoFooter} alt="Ecommerce Logo" />
            <h3 className="text-black-900 font-extrabold">Ecommerce</h3>
          </div>
          <p>
            DevCut is a YouTube channel for practical project-based learning.
          </p>
          <div className="flex gap-6 mt-4 items-center">
            <a href="https://www.github.com" target="_blank">
              <img src={github} alt="Github Logo" />
            </a>
            <a href="https://www.instagram.com" target="_blank">
              <img src={instagram} alt="Instragram Logo" />
            </a>
            <a href="https://www.youtube.com" target="_blank">
              <img src={youtube} alt="YouTube Logo" />
            </a>
          </div>
        </section>
        <table id="links" className="text-start ">
          <tr>
            <th>SUPPORT</th>
            <th>COMPANY</th>
            <th>SHOP</th>
          </tr>
          <tr>
            <td>
              <a href="/faq">FAQ</a>
            </td>
            <td>
              <a href="/faq">Terms of use</a>
            </td>
            <td>
              <a href="/faq">Privacy Policy</a>
            </td>
          </tr>
          <tr>
            <td>
              <a href="/faq">About us</a>
            </td>
            <td>
              <a href="/faq">Contact</a>
            </td>
            <td>
              <a href="/faq">Careers</a>
            </td>
          </tr>
          <tr>
            <td>
              <a href="/faq">My Account</a>
            </td>
            <td>
              <a href="/faq">Checkout</a>
            </td>
            <td>
              <a href="/faq">Cart</a>
            </td>
          </tr>
        </table>
        <section id="payments" className="text-center">
          <h3>ACCEPTED PAYMENTS</h3>
          <div className="flex gap-4 mt-4 grayscale">
            <img src={mastercard} alt="Mastercard Logo" />
            <img src={amex} alt="Amex Logo" />
            <img src={visa} alt="Visa Logo" />
          </div>
        </section>
      </div>
      <p className="text-center py-12 border-t-white-200 border-t-1">
        © 2023 DevCut. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
