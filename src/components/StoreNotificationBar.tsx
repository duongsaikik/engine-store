"use client";

import MapIcon from "@/assets/icons/MapIcon";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

const StoreNotificationBar = () => {
  const t = useTranslations();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="bg-[#E6F1FF] rounded-lg shadow-sm h-[120px] animate-pulse" />
    );
  }

  return (
    <div className="bg-[#E6F1FF] rounded-lg shadow-sm">
      <div className="container m-auto flex-wrap gap-[24px] py-[36px] flex items-center">
        <div className="flex items-center flex-1 gap-[16px]">
          <div>
            <MapIcon />
          </div>
          <span className="text-[28px] font-[500] flex-1 min-w-[150px] text-textPrimary">
            {t("notification.storeInfo")}
          </span>
        </div>
        <Link href="/stores">
          <div className="cursor-pointer row gap-[12px] bg-white hover:bg-blue-600 hover:text-white transition-all duration-300 text-[#025FCA] text-[24px] font-[600] rounded-full p-[16px_24px]">
            <span>{t("notification.viewNow")}</span>
            <IoIosArrowRoundForward size={42} />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default StoreNotificationBar;
