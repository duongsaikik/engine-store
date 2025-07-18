import ClockIcon from "@/assets/icons/ClockIcon";
import DeliveryIcon from "@/assets/icons/DeliveryIcon";
import TruckIcon from "@/assets/icons/TruckIcon";
import ExchangeIcon from "@/assets/icons/ExchangeIcon";

interface SupportBarProps {
  t: (key: string) => string;
}

const SupportBar = ({ t }: SupportBarProps) => (
  <div className="text-textPrimary flex flex-wrap lg:flex-nowrap 2xl:w-auto w-full justify-between lg:justify-end gap-[20px]">
    <div className="row gap-[8px]">
      <ClockIcon />
      <span className="text-[16px] font-[600] whitespace-nowrap">
        {t("header.menu.support")}
      </span>
    </div>
    <div className="row gap-[8px]">
      <DeliveryIcon />
      <span className="text-[16px] font-[600] whitespace-nowrap">
        {t("header.menu.freeShipping")}
      </span>
    </div>
    <div className="row gap-[8px]">
      <TruckIcon />
      <span className="text-[16px] font-[600] whitespace-nowrap">
        {t("header.menu.fastDelivery")}
      </span>
    </div>
    <div className="row gap-[8px]">
      <ExchangeIcon />
      <span className="text-[16px] font-[600] whitespace-nowrap">
        {t("header.menu.returns")}
      </span>
    </div>
  </div>
);

export default SupportBar;
