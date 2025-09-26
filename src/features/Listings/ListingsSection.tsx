import Wrapper from "@/components/Containers/Wrapper";
import SectionHeader from "@/components/shared/SectionHeader";
const ListingsSection = () => {
  return (
    <div>
      <Wrapper className="py-2 px-3 mt-30">
        <SectionHeader
          title={`Based on your location`}
          subTitle={`Start discover your liking future home`}
        />
      </Wrapper>
    </div>
  );
};

export default ListingsSection;
