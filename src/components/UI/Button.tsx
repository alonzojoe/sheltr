import React from "react";
import { cn } from "@/lib/utils";

type ButtonProps = React.ComponentProps<"button">;

const Button = ({ className, children, ...props }: ButtonProps) => {
  return (
    <button
      className={cn("inline-flex cursor-pointer px-4 py-2", className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
