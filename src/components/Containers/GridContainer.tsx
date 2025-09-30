import React from "react";
import { cn } from "@/lib/utils";

type GridContainerProps = React.ComponentProps<"div"> & {
  colsCount: 1 | 2 | 3 | 4 | 6 | 8;
};

const GridContainer = ({
  className,
  children,
  colsCount,
  ...props
}: GridContainerProps) => {
  const cols = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
    6: "grid-cols-2 md:grid-cols-3 lg:grid-cols-6",
    8: "grid-cols-2 md:grid-cols-4 lg:grid-cols-8",
  } as const;

  return (
    <div className={cn("grid", cols[colsCount], className)} {...props}>
      {children}
    </div>
  );
};

export default GridContainer;
