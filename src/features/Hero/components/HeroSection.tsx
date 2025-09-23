import Wrapper from "@/components/Containers/Wrapper";
import HeroImg from "@/assets/images/hero.png";
import { FaStar } from "react-icons/fa6";
const HeroSection = () => {
  return (
    <section id="home" className="pt-20 lg:pt-32">
      <Wrapper className="px-0 py-2 bg-accent grid items-center grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col space-y-7 pl-10">
          <h1 className="text-title text-text-dark font-bold leading-16 whitespace-normal">
            Your home to find, our comfort achieved
          </h1>
          <p className="text-text-sub">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt
          </p>
          <div className="flex items-center gap-7">
            <div className="flex flex-col space-y-1 items-center">
              <div className="flex items-center gap-2">
                {Array.from({ length: 5 })
                  .map((_, index) => index + 1)
                  .map((item) => (
                    <FaStar className="text-primary" key={item} />
                  ))}
              </div>
              <span className="text-text-sub text-base">Lorem ipsum</span>
            </div>

            <div className="flex flex-col space-y-1 items-center">
              <div className="flex items-center gap-2">
                {Array.from({ length: 5 })
                  .map((_, index) => index + 1)
                  .map((item) => (
                    <FaStar className="text-primary" key={item} />
                  ))}
              </div>
              <span className="text-text-sub text-base">Lorem ipsum</span>
            </div>

            <div className="flex flex-col space-y-1 items-center">
              <div className="flex items-center gap-2">
                {Array.from({ length: 5 })
                  .map((_, index) => index + 1)
                  .map((item) => (
                    <FaStar className="text-primary" key={item} />
                  ))}
              </div>
              <span className="text-text-sub text-base">Lorem ipsum</span>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-end relative">
          <img
            className="h-auto w-[553px] xl:w-[753px]"
            src={HeroImg}
            alt="hero-img"
          />
        </div>
      </Wrapper>
    </section>
  );
};

export default HeroSection;
