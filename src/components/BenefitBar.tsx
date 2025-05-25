"use client";

import BoxIcon from "@/assets/icons/BoxIcon";
import DeliveryIcon1 from "@/assets/icons/DeliveryIcon1";
import SupportIcon from "@/assets/icons/SupportIcon";
import WalletIcon from "@/assets/icons/WalletIcon";
import BenefitBadge from "./BenefitBadge";

const BenefitBar = () => {
  const benefits = [
    {
      icon: <WalletIcon />,
      titleKey: "freeShipping",
      subtitleKey: "freeShippingSubtitle",
    },
    {
      icon: <SupportIcon />,
      titleKey: "support24_7",
      subtitleKey: "support24_7Subtitle",
    },
    {
      icon: <DeliveryIcon1 />,
      titleKey: "fastDelivery",
      subtitleKey: "fastDeliverySubtitle",
    },
    {
      icon: <BoxIcon />,
      titleKey: "return30Days",
      subtitleKey: "return30DaysSubtitle",
    },
  ];

  return (
    <div className="bg-gray-100 p-[72px_0_40px_0]">
      <div className="row !justify-between gap-[32px] flex-wrap container mx-auto">
        {benefits.map((benefit) => (
          <BenefitBadge
            key={benefit.titleKey}
            icon={benefit.icon}
            titleKey={benefit.titleKey}
            subtitleKey={benefit.subtitleKey}
          />
        ))}
      </div>
    </div>
  );
};

export default BenefitBar;
