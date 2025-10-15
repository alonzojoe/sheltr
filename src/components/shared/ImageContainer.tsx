import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";

type ImageContainerProps = {
  image: string;
  className: string;
} & ComponentProps<"img">;

const ImageContainer = ({
  image,
  className,
  ...props
}: ImageContainerProps) => {
  return (
    <div
      className={cn(
        "relative aspect-square overflow-hidden rounded-xl mb-3",
        className
      )}
    >
      <img
        className="h-auto w-full object-cover object-bottom animate-fadeIn transition-all duration-300 ease-out group-hover:scale-105 animate-fade-in animate"
        src={image}
        {...props}
      />
    </div>
  );
};

export default ImageContainer;
