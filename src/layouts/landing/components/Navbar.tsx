import AppLogo from "@/assets/images/shelter-logo-text.png";
import { IoIosSearch } from "react-icons/io";
import { RiMenuFold4Fill, RiMenuUnfold4Fill } from "react-icons/ri";
const Navbar = () => {
  const togg = true;
  return (
    <nav className="fixed top-0 left-0 right-0">
      <div className="flex-between bg-white/60 backdrop-blur-md max-w-7xl mx-auto px-4 py-3">
        <img src={AppLogo} height={28} width={130} alt="sheltr-logo" />
        <ul className="hidden md:flex items-center text-primary font-semibold space-x-5 text-base">
          <li className="hover:text-text-sub">
            <a href="#home">Home</a>
          </li>
          <li className="hover:text-text-sub">
            <a href="#rent">Rent</a>
          </li>
          <li className="hover:text-text-sub">
            <a href="#buy">Buy</a>
          </li>
          <li className="hover:text-text-sub">
            <a href="#sell">Sell</a>
          </li>
          <li className="hover:text-text-sub">
            <a href="#know">Get to know us</a>
          </li>
          <li className="hover:text-text-sub pl-3 border-l border-gray-200">
            <a href="#search">
              <IoIosSearch className="text-2xl text-text-dark" />
            </a>
          </li>
        </ul>
        <div className="md-hidden">
          <RiMenuFold4Fill className="text-dark cursor-pointer text-4xl" />
        </div>
      </div>
      <div
        className={`md:hidden grid transition-all ease-in-out duration-300 ${
          togg
            ? "grid-rows-[1fr] opacity-100 translate-y-0 scale-100"
            : "grid-rows-[0fr] opacity-0 -translate-y-2 scale-95"
        }`}
      >
        <div className="overflow-hidden">
          <div className="p-4 bg-white/60 backdrop-blur-md border border-gray-300 rounded-xl mt-2 mx-2">
            <ul className="flex flex-col text-primary font-semibold text-md space-y-4">
              <li className="hover:text-text-sub">
                <a href="#home">Home</a>
              </li>
              <li className="hover:text-text-sub">
                <a href="#rent">Rent</a>
              </li>
              <li className="hover:text-text-sub">
                <a href="#buy">Buy</a>
              </li>
              <li className="hover:text-text-sub">
                <a href="#sell">Sell</a>
              </li>
              <li className="hover:text-text-sub">
                <a href="#know">Get to know us</a>
              </li>
              <li className="hover:text-text-sub">
                <a href="#search">
                  <IoIosSearch className="text-2xl text-text-dark" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
