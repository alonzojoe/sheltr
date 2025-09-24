import Wrapper from "@/components/Containers/Wrapper";
import Button from "@/components/UI/Button";
import HouseImg from "@/assets/images/house.png";
import { FaArrowRight } from "react-icons/fa6";
import { DISCOVERY_ITEMS } from "@/constants";
import DiscoveryItem from "@/features/Discovery/components/DiscoveryItem";

const DiscoverySection = () => {
  return (
    <section>
      <Wrapper className="px-3 py-2 mt-30 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="flex justify-start">
          <img
            className="h-auto w-[553px] xl:753px"
            src={HouseImg}
            alt="house-model"
          />
        </div>
        <div className="flex flex-col space-y-10">
          <h1 className="text-4xl md:text-title font-bold text-text-dark md:leading-16">
            Discover our new way of searching
          </h1>
          <p className="text-base text-text-sub">
            Trough the help of advanced videocameras we’re bringing you the
            possibility to experience your next house like your on google maps!
          </p>
          <div className="flex items-center gap-10">
            {DISCOVERY_ITEMS.map((item, index) => (
              <DiscoveryItem
                key={index + 1}
                Icon={item.Icon}
                label={item.label}
              />
            ))}
          </div>
          <div className="flex items-center gap-5">
            <Button className="bg-primary border border-primary text-white text-base py-3 px-4 hover:opacity-95 flex items-center gap-2">
              Browse propeties <FaArrowRight className="text-sm" />
            </Button>
            <Button className="border border-primary text-primary text-base py-3 px-4 hover:bg-primary hover:text-white transition-all duration-300 ease-in-out">
              Start the experience
            </Button>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default DiscoverySection;
