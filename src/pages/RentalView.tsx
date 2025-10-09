import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { viewRental } from "@/services/api-calls/rentals";
import Wrapper from "@/components/Containers/Wrapper";
import { Navigate } from "react-router-dom";

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

  return (
    <div className="pt-20 lg:pt-32 ">
      <Wrapper className="px-3 py-2">{slug}</Wrapper>
    </div>
  );
};

export default RentalView;
