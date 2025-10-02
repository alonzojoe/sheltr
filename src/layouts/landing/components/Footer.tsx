import Wrapper from "@/components/Containers/Wrapper";
import GridContainer from "@/components/Containers/GridContainer";
import Logo from "@/assets/images/shelter-logo-text.png";
import { MdLocalPhone, MdMail } from "react-icons/md";

const Footer = () => {
  return (
    <Wrapper className="px-3 py-2 border-t border-gray-300 mt-30">
      <div className="pt-10 flex-between flex-wrap gap-10">
        <div className="space-y-7">
          <img src={Logo} alt="shelter-logo" height={28} width={130} />
          <p className="text-text-dark text-sm">
            Got a question or concern? Feel free to reach out to us anytime via
            email or phone—we’re here to help!
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
      </div>
    </Wrapper>
  );
};

export default Footer;
