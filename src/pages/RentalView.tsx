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

  console.log("data", data);

  if (!data) return <p>Loading...</p>;

  return (
    <div className="pt-20 lg:pt-32 ">
      <Wrapper className="px-3 py-2">
        <div className="flex items-center">
          <div className="flex-1">
            <h2 className="text-text-dark text-3xl">{data.name}</h2>
          </div>
          <div className="bg-yellow-500">
            <span>A</span>
            <span>B</span>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default RentalView;
