import Wrapper from "@/components/Containers/Wrapper";
const StatsSection = () => {
  return (
    <section id="stats">
      <Wrapper className="px-3 py-2 mt-20 grid items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <StatItem title={`340+`} subTitle="Clients helped in their search " />
      </Wrapper>
    </section>
  );
};

type StatItemProps = {
  title: string;
  subTitle: string;
};

const StatItem = ({ title, subTitle }: StatItemProps) => {
  return (
    <div className="flex items-center flex-col space-y-4">
      <h2 className="font-bold text-2xl md:text-3xl text-text-dark">{title}</h2>
      <p className="text-base text-text-sub">{subTitle}</p>
    </div>
  );
};

export default StatsSection;
