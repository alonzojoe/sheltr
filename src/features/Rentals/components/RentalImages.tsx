import { cn } from "@/lib/utils";

type RentalImages = {
  images: string[];
  className?: string;
};

const RentalImages = ({ images, className }: RentalImages) => {
  return (
    <div className={cn("my-7", className)}>
      <div className="grid grid-cols-7 grid-rows-6 gap-5">
        <div className="col-span-3 row-span-6">
          <div className="relative hover:bg-black/60 aspect-square overflow-hidden rounded-xl select-none mb-3">
            <img
              className="h-auto w-full object-cover object-bottom animate-fadeIn transition-all duration-300 ease-out group-hover:scale-105 animate-fade-in animate"
              src={images[0]}
              alt="image"
            />
          </div>
        </div>
        <div className="col-span-2 row-span-3 col-start-4">2</div>
        <div className="col-span-2 row-span-3 col-start-4 row-start-4">3</div>
        <div className="col-span-2 row-span-3 col-start-6 row-start-1">4</div>
        <div className="col-span-2 row-span-3 col-start-6 row-start-4">5</div>
      </div>
    </div>
  );
};

export default RentalImages;
