import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { viewRental } from "@/services/api-calls/rentals";
import Wrapper from "@/components/Containers/Wrapper";
import IconButton from "@/components/UI/IconButton";
import { Navigate } from "react-router-dom";
import { FiShare, FiHeart } from "react-icons/fi";
import RentalViewHeder from "@/features/Rentals/components/RentalViewHeder";

type Params = {
  slug: string;
};

const RentalView = () => {
  const { slug } = useParams<Params>();

  if (!slug) return <Navigate to="/" />;

  const { data, isFetching, error } = useQuery({
    queryKey: ["rentals", slug],
    queryFn: () => viewRental(slug),
  });

  console.log("data", data);

  if (!data) return <p>Loading...</p>;

  return (
    <div className="pt-20 lg:pt-32 ">
      <Wrapper className="px-3 py-2">
        <RentalViewHeder name={data.name} />
      </Wrapper>
    </div>
  );
};

export default RentalView;
