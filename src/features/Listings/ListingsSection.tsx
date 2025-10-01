import Wrapper from "@/components/Containers/Wrapper";
import SectionHeader from "@/components/shared/SectionHeader";
import Switcher from "./components/Switcher";
import { useQuery } from "@tanstack/react-query";
import { fetchRentals } from "@/services/api-calls/rentals";
import Rentals from "@/features/Listings/components/Rentals";

const ListingsSection = () => {
  const { data, isFetching, error } = useQuery({
    queryKey: ["rentals"],
    queryFn: fetchRentals,
  });

  console.log("rentals", data);

  return (
    <div>
      <Wrapper className="py-2 px-3 mt-30">
        <SectionHeader
          title={`Based on your location`}
          subTitle={`Start discover your liking future home`}
        />
        <Switcher />
        {error ? (
          <div>{error?.message || "Something went wrong"}</div>
        ) : isFetching ? (
          <div>Loading</div>
        ) : (
          <Rentals rentals={data} />
        )}
      </Wrapper>
    </div>
  );
};

export default ListingsSection;
