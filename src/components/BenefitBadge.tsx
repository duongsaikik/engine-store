"use client";

import { Card } from "antd";
import { useTranslations } from "next-intl";
import { ReactNode } from "react";

interface BenefitBadgeProps {
  icon: ReactNode;
  titleKey: string;
  subtitleKey: string;
}

const BenefitBadge = ({ icon, titleKey, subtitleKey }: BenefitBadgeProps) => {
  const t = useTranslations();

  return (
    <Card className="[&_.ant-card-body]:w-full w-full sm:w-[352px] h-[116px] bg-white rounded-[12px] shadow-md flex items-center p-[16px] hover:shadow-lg transition-shadow">
      <div className="flex items-center w-full h-full">
        <div className="flex justify-center">{icon}</div>
        <div className="pl-[16px] text-left">
          <p className="text-[16px] font-[700] text-textPrimary">
            {t(`benefit.${titleKey}`)}
          </p>
          <p className="text-[14px] font-[500] text-textSecondary">
            {t(`benefit.${subtitleKey}`)}
          </p>
        </div>
      </div>
    </Card>
  );
};

export default BenefitBadge;
