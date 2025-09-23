import { FaStar } from "react-icons/fa6";

type FeatureStarProps = { label?: string; value?: number };

const FeatureStar = ({
  label = "Lorem ipsum",
  value = 0,
}: FeatureStarProps) => {
  return (
    <div className="flex flex-col space-y-1 items-center">
      <div className="flex items-center gap-2">
        {Array.from({ length: 5 })
          .map((_, index) => index + 1)
          .map((item) => (
            <FaStar
              className={item <= value ? "text-primary" : "text-text-sub"}
              key={item}
            />
          ))}
      </div>
      <span className="text-text-sub text-base">{label}</span>
    </div>
  );
};

export default FeatureStar;
