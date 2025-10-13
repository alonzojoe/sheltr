import { type ComponentProps, type ElementType } from "react";
import { cn } from "@/lib/utils";

type IconButton = {
  Icon: ElementType;
  title: string;
} & ComponentProps<"button">;

const IconButton = ({ title, Icon, className, ...props }: IconButton) => {
  return (
    <button
      className={cn(
        "cursor-pointer flex items-center gap-1 bg-white px-2 py-1 rounded-md",
        className
      )}
      {...props}
    >
      <Icon />
      {title}
    </button>
  );
};

export default IconButton;
