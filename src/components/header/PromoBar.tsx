import SaleIcon from "@/assets/icons/SaleIcon";
import { useTranslations } from "next-intl";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdOutlinePhoneAndroid } from "react-icons/md";

const PromoBar = () => {
  const t = useTranslations();
  return (
    <div className="bg-gradient-to-r from-[#0D57C6] via-[#37CFFF] to-[#0F5ED6]">
      <div className="flex justify-between items-center py-1 text-sm mx-auto container">
        <div className="flex items-center space-x-2">
          <SaleIcon />
          <span className="text-white text-[14px]">
            {t.rich("promo", {
              p: (chunks) => <span className="text-[#FACA4A]">{chunks}</span>,
            })}
          </span>
        </div>
        <div className="items-center space-x-4 lg:flex hidden">
          <div className="row gap-[8px]">
            <BsFillTelephoneFill />
            <div>
              <span>{t("hotline")}: </span>
              <span className="text-[#FACA4A]">0283 760 7607</span>
            </div>
          </div>
          <div className="row gap-[8px]">
            <MdOutlinePhoneAndroid />
            <div>
              <span>{t("download")}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoBar; 