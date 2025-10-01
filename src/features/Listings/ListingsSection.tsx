import Wrapper from "@/components/Containers/Wrapper";
import SectionHeader from "@/components/shared/SectionHeader";
import Switcher from "./components/Switcher";
import { useQuery } from "@tanstack/react-query";
import { fetchRentals } from "@/services/api-calls/rentals";
import GridContainer from "@/components/Containers/GridContainer";
import { FaKitchenSet, FaWifi, FaTv } from "react-icons/fa6";
import { FaSwimmingPool } from "react-icons/fa";

const ListingsSection = () => {
  const { data } = useQuery({
    queryKey: ["rentals"],
    queryFn: fetchRentals,
  });

  console.log("rentals", data);

  return (
    <div>
      <Wrapper className="py-2 px-3 mt-30">
        <SectionHeader
          title={`Based on your location`}
          subTitle={`Start discover your liking future home`}
        />
        <Switcher />
        <GridContainer cols={4} className="mt-10 gap-8">
          {data?.map((rental) => (
            <div className="group cursor-pointer" key={rental.id}>
              <div className="relative aspect-square overflow-hidden rounded-xl mb-3">
                <img
                  className="h-auto w-full object-cover object-bottom transition-transform duration-300 group-hover:scale-105"
                  src={rental.images[0]}
                  alt={rental.name}
                />
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <p className="text-base text-text-dark font-semibold">
                    ₱{rental.price.perNight}{" "}
                    <small className="text-text-sub text-sm">/night</small>
                  </p>
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                    <span className="text-sm font-medium">
                      {rental.ratings}
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-sm text-gray-900">
                    {rental.name}
                  </h3>
                </div>

                <div className="flex items-center text-text-sub">
                  <p className=" text-sm">Quezon City</p>
                </div>
                {/* Amenities */}
                <GridContainer cols={4} className="items-center gap-1">
                  <div className="text-text-dark text-sm flex items-center gap-2">
                    <FaKitchenSet />
                    <span>Kitchen</span>
                  </div>
                  <div className="text-text-dark text-sm flex items-center gap-2">
                    <FaWifi />
                    <span>Wifi</span>
                  </div>
                  <div className="text-text-dark text-sm flex items-center gap-2">
                    <FaTv />
                    <span>TV</span>
                  </div>
                  <div className="text-text-dark text-sm flex items-center gap-2">
                    <FaSwimmingPool />
                    <span>Pool</span>
                  </div>
                </GridContainer>
              </div>
            </div>
          ))}
        </GridContainer>
      </Wrapper>
    </div>
  );
};

export default ListingsSection;
