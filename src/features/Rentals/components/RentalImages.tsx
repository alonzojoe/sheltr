import ImageContainer from "@/components/shared/ImageContainer";
import { cn } from "@/lib/utils";

type RentalImages = {
  images: string[];
  className?: string;
};

const RentalImages = ({ images, className }: RentalImages) => {
  return (
    <div className={cn("my-7", className)}>
      <div className="grid grid-cols-4 grid-rows-4 gap-4">
        <div className="col-span-2 row-span-4">
          <ImageContainer
            className="cursor-pointer"
            image={images[0]}
            alt={`image-1`}
          />
        </div>
        <div className="row-span-2 col-start-3">
          <ImageContainer
            className="cursor-pointer"
            image={images[1]}
            alt={`image-2`}
          />
        </div>
        <div className="row-span-2 col-start-3 row-start-3">
          <ImageContainer
            className="cursor-pointer"
            image={images[2]}
            alt={`image-3`}
          />
        </div>
        <div className="row-span-2 col-start-4 row-start-1">
          <ImageContainer
            className="cursor-pointer"
            image={images[3]}
            alt={`image-4`}
          />
        </div>
        <div className="row-span-2 col-start-4 row-start-3">
          <ImageContainer
            className="cursor-pointer"
            image={images[4]}
            alt={`image-5`}
          />
        </div>
      </div>
    </div>
  );
};

export default RentalImages;
