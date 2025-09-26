type SectionHeaderProps = {
  title: string;
  subTitle?: string;
};

const SectionHeader = ({ title, subTitle }: SectionHeaderProps) => {
  return (
    <div className="flex items-center justify-center flex-col space-y-7">
      <h1 className="text-4xl md:text-title font-bold text-center text-text-dark tracking-tighter leading-16 ">
        {title}
      </h1>
      <p className="text-body text-text-sub text-center">{subTitle}</p>
    </div>
  );
};

export default SectionHeader;
