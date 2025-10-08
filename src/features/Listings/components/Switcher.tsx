import { useState } from "react";
import { MdCalendarMonth } from "react-icons/md";
import { cn } from "@/lib/utils";
import { FiSun } from "react-icons/fi";

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
            <FiSun className="my-1" />
          </span>
          <span
            onClick={() => setMode("rentals")}
            className={cn(
              `cursor-pointer text-primary text-base px-3 py-2, ${
                mode === "rentals" && "text-white bg-primary"
              }`
            )}
          >
            <MdCalendarMonth className="my-1" />
          </span>
        </div>
        <span className="mx-3 text-text-sub text-sm">{MODE[mode]}</span>
      </div>
    </>
  );
};

export default Switcher;
