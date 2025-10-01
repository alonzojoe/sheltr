import React from "react";
import { cn } from "@/lib/utils";
import { FaCircle } from "react-icons/fa";
import { PiCaretCircleLeftFill, PiCaretCircleRightFill } from "react-icons/pi";

type ImageCarouselProps = React.ComponentProps<"div"> & {
  images: string[];
  active: number;
  onSelectImg: React.Dispatch<React.SetStateAction<number>>;
};

export const ImageCarousel = ({
  className,
  images,
  active,
  onSelectImg,
  ...props
}: ImageCarouselProps) => {
  return (
    <div
      className={cn("flex items-center justify-center gap-[5px]", className)}
      {...props}
    >
      {images.map((_, index) => (
        <FaCircle
          onClick={() => onSelectImg(index)}
          className={cn(
            "text-white/50 text-[8px]",
            active === index && "text-white"
          )}
          key={index}
        />
      ))}
    </div>
  );
};

type ImageSelectorProps = React.ComponentProps<"div"> & {
  images: string[];
  active: number;
  onSelectImg: React.Dispatch<React.SetStateAction<number>>;
};

export const ImageSelector = ({
  className,
  images,
  active,
  onSelectImg,
  ...props
}: ImageSelectorProps) => {
  const moveLeft = () => {
    if (active > 0) {
      onSelectImg((prev) => prev - 1);
      return;
    }
  };

  const moveRight = () => {
    if (active < images.length - 1) {
      onSelectImg((prev) => prev + 1);
      return;
    }
  };

  return (
    <div
      className={cn("flex items-center justify-between h-[80%]", className)}
      {...props}
    >
      <PiCaretCircleLeftFill
        onClick={moveLeft}
        className="text-white text-4xl ml-2 transition-transform duration-300 hover:shadow-2xl hover:scale-110"
      />
      <PiCaretCircleRightFill
        onClick={moveRight}
        className="text-white text-4xl mr-2 transition-transform duration-300 hover:shadow-2xl hover:scale-110"
      />
    </div>
  );
};
