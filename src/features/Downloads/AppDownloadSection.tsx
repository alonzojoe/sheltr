import Wrapper from "@/components/Containers/Wrapper";
import Button from "@/components/UI/Button";
import PhoneImg from "@/assets/images/phone-twin.png";
import AppStore from "@/assets/images/appst.png";
import PlayStore from "@/assets/images/playst.png";
const AppDownloadSection = () => {
  return (
    <section id="download" className="bg-accent mt-30">
      <Wrapper className="pt-15 pb-0 px-3 grid items-center grid-cols-1 md:grid-cols-2 gap-10">
        <div className="flex flex-col space-y-10">
          <h1 className="text-text-dark tracking-tight font-bold text-4xl md:text-title md:leading-16">
            Check out Sheltr app too, don't miss it!
          </h1>
          <p className="text-base text-text-sub">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="flex items-center space-x-4">
            <a href="#">
              <img
                className="h-auto w-[100px]"
                src={PlayStore}
                alt="playstore"
              />
            </a>
            <a href="#">
              <img className="h-auto w-[100px]" src={AppStore} alt="appstore" />
            </a>
          </div>
          <div className="flex flex-col space-y-3">
            <p className="text-body text-text-sub">
              Don’t loose it when it will come out!
            </p>
            <div className="flex gap-5 items-center">
              <input
                className="px-4 py-3 bg-white text-body text-dark ring-0 outline-0 w-90 border border-accent focus:border-primary"
                placeholder="Your Email"
                type="text"
              />
              <Button className="bg-primary border border-primary text-white text-base py-3 px-5 hover:opacity-95">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-end">
          <img
            className="h-auto w-[553px] xl:[753px]"
            src={PhoneImg}
            alt="phone"
          />
        </div>
      </Wrapper>
    </section>
  );
};

export default AppDownloadSection;
