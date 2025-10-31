import IconButton from "@/components/UI/IconButton";
import { FiShare, FiHeart } from "react-icons/fi";
import { cn } from "@/lib/utils";

type RentalViewHeaderProps = {
  name: string;
  className?: string;
};

const RentalViewHeder = ({ name, className }: RentalViewHeaderProps) => {
  return (
    <div className={cn("flex items-center", className)}>
      <div className="flex-1">
        <h2 className="text-text-dark text-2xl font-semibold">{name}</h2>
      </div>
      <div className="flex items-center gap-2">
        <IconButton
          className="text-sm text-text-dark font-semibold"
          title="Share"
          Icon={FiShare}
        />
        <IconButton
          className="text-sm text-text-dark font-semibold"
          title="Save"
          Icon={FiHeart}
        />
      </div>
    </div>
  );
};

export default RentalViewHeder;
