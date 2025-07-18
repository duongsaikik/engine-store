"use client";

import { SUPPORTED_LANGUAGES } from "@/utils/constants";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, MenuProps } from "antd";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaApple, FaGooglePlay, FaMinus } from "react-icons/fa";
import BenefitBar from "./BenefitBar";
import StoreNotificationBar from "./StoreNotificationBar";

const Footer = () => {
  const t = useTranslations();
  const router = useRouter();
  const locale = useLocale();

  const changeLanguage = (locale: string) => {
    const currentPath = window.location.pathname.replace(/^\/[a-z]{2}/, "");
    router.push(`/${locale}${currentPath}`);
  };

  const languageMenu: MenuProps = {
    items: SUPPORTED_LANGUAGES?.map((loc: string) => ({
      key: loc,
      label: loc.toUpperCase(),
      onClick: () => changeLanguage(loc),
    })),
  };

  return (
    <footer className="bg-blue50 text-gray700 mx-auto">
      <BenefitBar />
      <StoreNotificationBar />
      <div className=" relative">
        <div className="absolute w-full h-full bg-[url(/footer.jpg)] bg-cover bg-center opacity-35 z-1" />
        <div className="z-10 py-[96px] px-[8px] relative row !items-start !justify-between flex-wrap gap-[24px] container mx-auto">
          <div className="flex flex-col !items-start gap-[32px] sm:w-max w-full">
            <h3 className="font-[600] text-[16px] text-buttonText">
              {t("footer.company")}
            </h3>
            <div>
              <p className="text-[16px] text-textSecondary">
                {t.rich("footer.taxCode", {
                  value: (value) => <span className="font-[600]">{value}</span>,
                })}
              </p>
              <p className="text-[16px] text-textSecondary">
                {t.rich("footer.address", {
                  value: (value) => <span className="font-[600]">{value}</span>,
                })}
              </p>
              <p className="text-[16px] text-textSecondary">
                {t.rich("footer.phone", {
                  value: (value) => <span className="font-[600]">{value}</span>,
                })}
              </p>
              <p className="text-[16px] text-textSecondary">
                {t.rich("footer.hours", {
                  value: (value) => <span className="font-[600]">{value}</span>,
                })}
              </p>
            </div>
            <Image src="/mark.png" width={200} height={75} alt="certificate" />
          </div>
          <div>
            <h3 className="font-[600] text-[24px] text-[#013065] mb-[20px]">
              {t("footer.sitemap")}
            </h3>
            <div className="flex flex-col gap-[12px]">
              <Link
                href="/about"
                className="font-[400] text-[16px] text-textSecondary"
              >
                {t("footer.about")}
              </Link>
              <Link
                href="/article"
                className="font-[400] text-[16px] text-textSecondary"
              >
                {t("footer.article")}
              </Link>
              <Link
                href="/cart"
                className="font-[400] text-[16px] text-textSecondary"
              >
                {t("footer.cart")}
              </Link>
              <Link
                href="/contact"
                className="font-[400] text-[16px] text-textSecondary"
              >
                {t("footer.contact")}
              </Link>
            </div>
          </div>
          <div>
            <h3 className="font-[600] text-[24px] text-[#013065] mb-[20px]">
              {t("footer.legal")}
            </h3>
            <div className="flex flex-col gap-[12px]">
              <Link
                href="/about"
                className="flex items-center gap-[8px] font-[600] text-[16px] text-textPrimary"
              >
                <FaMinus /> {t("footer.privacy")}
              </Link>
              <Link
                href="/article"
                className="font-[400] text-[16px] text-textSecondary"
              >
                {t("footer.cookie")}
              </Link>
              <Link
                href="/cart"
                className="font-[400] text-[16px] text-textSecondary"
              >
                {t("footer.delivery")}
              </Link>
              <Link
                href="/contact"
                className="font-[400] text-[16px] text-textSecondary"
              >
                {t("footer.faqs")}
              </Link>
            </div>
          </div>
          <div className="sm:w-max w-full">
            <h3 className="font-[600] text-[24px] text-[#013065] mb-[20px]">
              {t("footer.download")}
            </h3>
            <div className="flex flex-col gap-[12px]">
              <div className="cursor-pointer row bg-black w-full sm:w-[230px] gap-[16px] p-[11px_20px] rounded-[12px]">
                <FaGooglePlay size={30} color="white" />
                <div className="flex flex-col">
                  <span className="text-white text-[14px] font-[400]">
                    {t("footer.getItOn")}
                  </span>
                  <span className="text-white text-[16px] font-[600]">
                    {t("footer.googlePlay")}
                  </span>
                </div>
              </div>
              <div className="cursor-pointer row bg-[#0373F3] w-full sm:w-[230px] gap-[16px] p-[11px_20px] rounded-[12px]">
                <FaApple size={30} color="white" />
                <div className="flex flex-col">
                  <span className="text-white text-[14px] font-[400]">
                    {t("footer.getItOn")}
                  </span>
                  <span className="text-white text-[16px] font-[600]">
                    {t("footer.appStore")}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-end gap-[8px]  mt-[20px]">
              <Image
                className="cursor-pointer rounded-full"
                src={
                  locale === "en" ? "/england-flag.png" : "/vietnam-flag.png"
                }
                width={36}
                height={36}
                alt="flag"
              />
              <Dropdown
                menu={languageMenu}
                trigger={["click"]}
                className="text-textPrimary "
              >
                <span className="flex items-center space-x-1 cursor-pointer">
                  <span className="text-textPrimary">
                    {locale?.toUpperCase()}
                  </span>
                  <DownOutlined />
                </span>
              </Dropdown>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
