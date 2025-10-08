import { useState } from "react";
import { useAppSelector } from "@/store/hooks/hook";
import GridContainer from "@/components/Containers/GridContainer";
import { ImageCarousel, ImageSelector } from "./ImageChanger";
import { FaKitchenSet, FaWifi, FaTv } from "react-icons/fa6";
import { FaSwimmingPool } from "react-icons/fa";

import { type Rental } from "@/types";

type RentalProps = {
  rentals?: Rental[];
};

const Rentals = ({ rentals }: RentalProps) => {
  if (rentals?.length === 0) {
    return (
      <div className="text-primary text-center font-semibold text-lg py-8">
        No rentals found.
      </div>
    );
  }

  return (
    <GridContainer cols={4} className="mt-10 gap-8">
      {rentals?.map((rental) => (
        <RentalItem rental={rental} key={rental.id} />
      ))}
    </GridContainer>
  );
};

type RentalItemProps = {
  rental: Rental;
};

export const RentalItem = ({ rental }: RentalItemProps) => {
  const { rateType } = useAppSelector((state) => state.rentals);
  const [activeImage, setActiveImage] = useState<number>(0);

  return (
    <div className="group cursor-pointer">
      <div className="relative aspect-square overflow-hidden rounded-xl select-none mb-3">
        <ImageSelector
          className="w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-100"
          images={rental.images}
          active={activeImage}
          onSelectImg={setActiveImage}
        />
        <img
          key={activeImage}
          className="h-auto w-full object-cover object-bottom animate-fadeIn transition-all duration-300 ease-out group-hover:scale-105 animate-fade-in animate"
          src={rental.images[activeImage]}
          alt={rental.name}
        />
        <ImageCarousel
          active={activeImage}
          onSelectImg={setActiveImage}
          className="bottom-3 left-1/2 -translate-x-1/2  absolute z-100"
          images={rental.images}
        />
      </div>

      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <p className="text-base text-text-dark font-semibold">
            ₱{rental.price[rateType]}{" "}
            <small className="text-text-sub text-sm">/night</small>
          </p>
          <div className="flex items-center gap-1">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <span className="text-sm font-medium">{rental.ratings}</span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-sm text-gray-900">{rental.name}</h3>
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
  );
};

export default Rentals;
