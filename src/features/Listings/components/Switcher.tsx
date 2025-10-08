import { useAppSelector, useAppDispatch } from "@/store/hooks/hook";
import { updateRate } from "@/store/slices/rental-slice";
import { cn } from "@/lib/utils";
import { MdCalendarMonth } from "react-icons/md";
import { FiSun } from "react-icons/fi";

const Switcher = () => {
  const dispatch = useAppDispatch();
  const { rateType } = useAppSelector((state) => state.rentals);

  const rate = rateType.charAt(0).toUpperCase() + rateType.slice(1);

  return (
    <>
      <div className="flex items-center my-10">
        <div className="flex items-center bg-accent">
          <span
            onClick={() => dispatch(updateRate("daily"))}
            className={cn(
              `cursor-pointer text-primary text-base px-3 py-2, ${
                rateType === "daily" && "text-white bg-primary"
              }`
            )}
          >
            <FiSun className="my-1" />
          </span>
          <span
            onClick={() => dispatch(updateRate("monthly"))}
            className={cn(
              `cursor-pointer text-primary text-base px-3 py-2, ${
                rateType === "monthly" && "text-white bg-primary"
              }`
            )}
          >
            <MdCalendarMonth className="my-1" />
          </span>
        </div>
        <span className="mx-3 text-text-sub text-sm">{rate}</span>
      </div>
    </>
  );
};

export default Switcher;
