import React from "react";
import { cn } from "@/lib/utils";
import { FaCircle } from "react-icons/fa";

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
