import Wrapper from "@/components/Containers/Wrapper";
import Logo from "@/assets/images/shelter-logo-text.png";
import { MdLocalPhone, MdMail } from "react-icons/md";
import { TbWorld } from "react-icons/tb";
import { FaPesoSign, FaXTwitter } from "react-icons/fa6";
import { FaFacebook, FaInstagram } from "react-icons/fa";
const Footer = () => {
  const date = new Date();

  const year = date.getFullYear();

  return (
    <Wrapper className="px-3 py-2 border-t border-gray-300 mt-30">
      <div className="pt-10 flex justify-between flex-wrap gap-10">
        <div className="space-y-7">
          <img src={Logo} alt="shelter-logo" height={28} width={130} />
          <p className="text-text-dark text-sm">
            Feel free to reach out to us anytime via email or phone—we’re here
            to help!
          </p>
          <div className="flex items-center gap-2 text-sm text-text-sub">
            <MdMail className="text-lg" />
            <span>supportsheltr@sheltr.com</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <MdLocalPhone className="text-lg" />
            <span>(888) 6548-8562</span>
          </div>
        </div>
        <div className="flex justify-between flex-wrap gap-10">
          <ul className="flex flex-col space-y-4">
            <li>
              <span className="font-bold text-sm">Support</span>
            </li>
            <li className="text-text-sub text-sm">
              <a href="#">Help Center</a>
            </li>
            <li className="text-text-sub text-sm">
              <a href="#">Get help with a safety issue</a>
            </li>
            <li className="text-text-sub text-sm">
              <a href="#">AirCover</a>
            </li>
            <li className="text-text-sub text-sm">
              <a href="#">Anti-discrimination</a>
            </li>
            <li className="text-text-sub text-sm">
              <a href="#">Disability support</a>
            </li>
            <li className="text-text-sub text-sm">
              <a href="#">Cancellation options</a>
            </li>
            <li className="text-text-sub text-sm">
              <a href="#">Report neighborhood concern</a>
            </li>
          </ul>
          <ul className="flex flex-col space-y-4">
            <li>
              <span className="font-bold text-sm">Hosting</span>
            </li>
            <li className="text-text-sub text-sm">
              <a href="#">Sheltr your home</a>
            </li>
            <li className="text-text-sub text-sm">
              <a href="#">Sheltr your experience</a>
            </li>
            <li className="text-text-sub text-sm">
              <a href="#">Sheltr your service</a>
            </li>
            <li className="text-text-sub text-sm">
              <a href="#">Hosting resources</a>
            </li>
            <li className="text-text-sub text-sm">
              <a href="#">Community forum</a>
            </li>
            <li className="text-text-sub text-sm">
              <a href="#">Hosting responsibly</a>
            </li>
          </ul>
          <ul className="flex flex-col space-y-4">
            <li>
              <span className="font-bold text-sm">Sheltr</span>
            </li>
            <li className="text-text-sub text-sm">
              <a href="#">2025 Summer Release</a>
            </li>
            <li className="text-text-sub text-sm">
              <a href="#">Newsroom</a>
            </li>
            <li className="text-text-sub text-sm">
              <a href="#">Careers</a>
            </li>
            <li className="text-text-sub text-sm">
              <a href="#">Investors</a>
            </li>
            <li className="text-text-sub text-sm">
              <a href="#">Gift cards</a>
            </li>
            <li className="text-text-sub text-sm">
              <a href="#">Sheltr emergency stays</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex-between flex-wrap gap-5 pt-10">
        <div className="flex flex-wrap gap-5 sm:gap-10">
          <p className="text-sm text-text-sub">&copy; Sheltr, Inc. {year}</p>

          <ul className="list-disc text-sm text-text-sub flex items-center gap-10">
            <li>
              <a href="">Terms</a>
            </li>
            <li>
              <a href="">Sitemap</a>
            </li>
            <li>
              <a href="">Privacy</a>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex gap-2 items-center text-sm text-text-sub">
            <TbWorld /> Philippines
          </div>
          <div className="flex gap-2 items-center text-sm text-text-sub">
            <FaPesoSign /> PHP
          </div>
          <div className="text-sm text-text-sub">
            <a href="#">
              <FaFacebook />
            </a>
          </div>
          <div className="text-sm text-text-sub">
            <a href="#">
              <FaXTwitter />
            </a>
          </div>
          <div className="text-sm text-text-sub">
            <a href="#">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Footer;
