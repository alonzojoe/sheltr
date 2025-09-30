import Wrapper from "@/components/Containers/Wrapper";
import SectionHeader from "@/components/shared/SectionHeader";
import Switcher from "./components/Switcher";
import { useQuery } from "@tanstack/react-query";
import { fetchRentals } from "@/services/api-calls/rentals";
import GridContainer from "@/components/Containers/GridContainer";

const ListingsSection = () => {
  const { data } = useQuery({
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
        <GridContainer colsCount={4} className="mt-10 gap-8">
          <div className="bg-red-500">A</div>
          <div className="bg-blue-500">B</div>
          <div className="bg-green-500">C</div>
          <div className="bg-yellow-500">D</div>
        </GridContainer>
      </Wrapper>
    </div>
  );
};

export default ListingsSection;
