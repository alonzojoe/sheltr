import React from "react";

type DiscoveryItemProps = {
  Icon: React.ElementType;
  label: string;
};

const DiscoveryItem = ({ Icon, label }: DiscoveryItemProps) => {
  return (
    <div className="flex items-center gap-3">
      <Icon className="text-3xl text-text-dark" />
      <span className="text-base text-text-sub">{label}</span>
    </div>
  );
};

export default DiscoveryItem;
