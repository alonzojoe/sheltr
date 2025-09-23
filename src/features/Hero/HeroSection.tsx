import Button from "@/components/UI/Button";
import FeatureStar from "@/features/Hero/components/FeatureStar";
import Wrapper from "@/components/Containers/Wrapper";
import HeroImg from "@/assets/images/hero.png";
import { FaArrowRight } from "react-icons/fa6";
const HeroSection = () => {
  return (
    <section id="home" className="pt-20 lg:pt-32">
      <Wrapper className="px-0 pl-0 md:pl-10 py-2 bg-accent grid items-center grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col space-y-7 order-2 md:order-1">
          <h1 className="text-center mt-10 md:mt-0 md:text-left text-4xl md:text-title text-text-dark font-bold md:leading-16 whitespace-normal">
            Your home to find, our comfort achieved
          </h1>
          <p className="text-text-sub text-center md:text-left text-base md:text-body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt
          </p>
          <div className="flex flex-col md:flex-row items-center gap-7">
            <FeatureStar value={5} />
            <FeatureStar value={4} />
            <FeatureStar value={4} />
          </div>
          <div className="flex justify-center md:justify-start items-center gap-5 mb-10">
            <Button className="bg-primary border border-primary text-white text-base py-3 px-4 hover:opacity-95">
              Envision your next home
            </Button>
            <Button className="border border-primary text-primary text-base py-3 px-4 hover:bg-primary hover:text-white transition-all duration-300 ease-in-out">
              Contact us
            </Button>
          </div>
        </div>
        <div className="flex items-center justify-end relative order-1 md:order-2">
          <img
            className="h-auto w-[553px] xl:w-[753px]"
            src={HeroImg}
            alt="hero-img"
          />
          <Button className="absolute bottom-5 right-10 bg-white px-4 py-3 flex items-center gap-2 text-base">
            <span>Interested in this home?</span>
            <span className="font-semibold">Check it out!</span>
            <FaArrowRight />
          </Button>
        </div>
      </Wrapper>
    </section>
  );
};

export default HeroSection;
