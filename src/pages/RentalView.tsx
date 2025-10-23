import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { viewRental } from "@/services/api-calls/rentals";
import Wrapper from "@/components/Containers/Wrapper";
import { Navigate } from "react-router-dom";
import RentalViewHeder from "@/features/Rentals/components/RentalViewHeder";
import RentalImages from "@/features/Rentals/components/RentalImages";
import { GiCurlyWing } from "react-icons/gi";
import { FaStar } from "react-icons/fa6";
import HostImg from "@/assets/images/host.png";

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
        <RentalImages images={data.images} />
        <div className={"flex items-center mt-10"}>
          <div className="">
            <h2 className="text-text-dark text-3xl font-semibold">
              {data.location}
            </h2>
            <p className="text-text-sub font-semibold text-base">
              2 Guests • 1 bedroom • 1 bed • 1 bath
            </p>
            <div className="my-8 p-5 border border-gray-300 grid grid-cols-1 items-center md:grid-cols-3 rounded-lg">
              <div className="px-3">
                <div className="flex items-center gap-2 text-text-dark">
                  <GiCurlyWing className="text-2xl" />
                  <span className="text-center text-lg font-semibold leading-5">
                    Guest
                    <br className="my-0" />
                    Favorite
                  </span>
                  <GiCurlyWing className="text-2xl -scale-x-100" />
                </div>
              </div>
              <div className="px-3 border-l border-r border-gray-300">
                <div className="text-text-dark flex flex-col items-center justify-center">
                  <span className="text-center text-2xl font-semibold space-y-2">
                    {data.ratings}
                  </span>
                  <div className="flex gap-1">
                    {Array.from({ length: 5 })
                      .map((_, index) => index + 1)
                      .map((i) => (
                        <FaStar className="text-[10px]" key={i} />
                      ))}
                  </div>
                </div>
              </div>
              <div className="px-3">
                <div className="text-text-dark flex flex-col items-center justify-center">
                  <span className="text-center text-2xl font-semibold space-y-0">
                    25
                  </span>
                  <span className="text-[12px] font-semibold">Reviews</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <div className="relative">
                <div className="h-[50px] w-[50px] rounded-full overflow-hidden">
                  <img
                    className="h-full w-full object-cover object-center"
                    src={HostImg}
                    alt="host"
                  />
                </div>
                <FaStar className="text-[#E41C5B] absolute text-2xl top-6 -right-2 z-100" />
              </div>

              <div className="space-y-0">
                <p className="text-text-dark font-bold mb-0 text-body">
                  Hosted by Cristina
                </p>
                <span className="text-text-sub text-base font-semibold">
                  Host • 2 years hosting
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span></span>
            <span></span>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default RentalView;
