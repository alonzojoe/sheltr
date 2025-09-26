import { useState } from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { TiHomeOutline } from "react-icons/ti";
import { cn } from "@/lib/utils";

const MODE = {
  rentals: "Rentals",
  recent: "Recent",
} as const;

type Mode = keyof typeof MODE;

const Switcher = () => {
  const [mode, setMode] = useState<Mode>("recent");

  return (
    <>
      <div className="flex items-center my-10">
        <div className="flex items-center bg-accent">
          <span
            onClick={() => setMode("recent")}
            className={cn(
              `cursor-pointer text-primary text-base px-3 py-2, ${
                mode === "recent" && "text-white bg-primary"
              }`
            )}
          >
            <AiOutlineClockCircle className="my-1" />
          </span>
          <span
            onClick={() => setMode("rentals")}
            className={cn(
              `cursor-pointer text-primary text-base px-3 py-2, ${
                mode === "rentals" && "text-white bg-primary"
              }`
            )}
          >
            <TiHomeOutline className="my-1" />
          </span>
        </div>
        <span className="mx-3 text-text-sub text-sm">{MODE[mode]}</span>
      </div>
    </>
  );
};

export default Switcher;
