import AppLogo from "@/assets/images/shelter-logo-text.png";
import { IoIosSearch } from "react-icons/io";
const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0">
      <div className="flex-between bg-white/60 backdrop-blur-md max-w-7xl mx-auto px-4 py-3">
        <img src={AppLogo} height={28} width={130} alt="sheltr-logo" />
        <ul className="hidden md:flex items-center text-primary font-semibold space-x-5 text-base">
          <li className="hover:text-text-sub">
            <a href="#home">Home</a>
          </li>
          <li className="hover:text-text-sub">
            <a href="#home">Rent</a>
          </li>
          <li className="hover:text-text-sub">
            <a href="#home">Buy</a>
          </li>
          <li className="hover:text-text-sub">
            <a href="#home">Sell</a>
          </li>
          <li className="hover:text-text-sub">
            <a href="#home">Get to know us</a>
          </li>
          <li className="hover:text-text-sub pl-3 border-l border-gray-200">
            <a href="#home">
              <IoIosSearch className="text-2xl text-text-dark" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
