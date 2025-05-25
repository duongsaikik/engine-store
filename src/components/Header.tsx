"use client";

import ClockIcon from "@/assets/icons/ClockIcon";
import DeliveryIcon from "@/assets/icons/DeliveryIcon";
import ExchangeIcon from "@/assets/icons/ExchangeIcon";
import SaleIcon from "@/assets/icons/SaleIcon";
import TruckIcon from "@/assets/icons/TruckIcon";
import { carts } from "@/libs/data";
import { cn } from "@/utils/common";
import { MENU, SUPPORTED_LANGUAGES } from "@/utils/constants";
import NiceModal from "@ebay/nice-modal-react";
import { Button, Dropdown, Input, Layout, MenuProps, Popover } from "antd";
import { Content } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";
import { FiSearch } from "react-icons/fi";
import { IoIosMenu } from "react-icons/io";
import { IoCameraOutline } from "react-icons/io5";
import { MdOutlineMenu, MdOutlinePhoneAndroid } from "react-icons/md";
import { SlArrowRight } from "react-icons/sl";
import CategorySidebar from "./CategorySidebar";
import ProductGrid from "./ProductGrid";
import ProductItem from "./ProductItem";
import styles from "./styles.module.css";

const useScrollDirection = () => {
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const lastScrollY = useRef(0);

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    setIsScrollingDown(currentScrollY > lastScrollY.current);
    lastScrollY.current = currentScrollY;
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return isScrollingDown;
};

const Header = () => {
  const t = useTranslations();
  const router = useRouter();
  const locale = useLocale();
  const isScrollingDown = useScrollDirection();
  const [isOpenCategory, setIsOpenCategory] = useState(false);

  const changeLanguage = useCallback(
    (locale: string) => {
      const currentPath = window.location.pathname.replace(/^\/[a-z]{2}/, "");
      router.push(`/${locale}${currentPath}`);
    },
    [router]
  );

  const languageMenu: MenuProps = {
    items: SUPPORTED_LANGUAGES?.map((loc: string) => ({
      key: loc,
      label: loc.toUpperCase(),
      onClick: () => changeLanguage(loc),
    })),
  };

  const handleOpenCategory = useCallback(() => {
    setIsOpenCategory((prev) => !prev);
  }, []);

  const handleOpenMenu = useCallback(() => {
    NiceModal.show("sidebar");
  }, []);

  const renderMenu = (item: (typeof MENU)[0]) => {
    return (
      <Link
        key={item.label}
        href="/#"
        className={cn(
          "text-textPrimary whitespace-nowrap font-[500]",
          styles.hightLight
        )}
      >
        {t(item.label)}
      </Link>
    );
  };

  return (
    <header
      id="header"
      className={cn(
        "text-white transition-all duration-300 p-0 sticky top-0 w-[100%] bg-white z-[99]",
        isScrollingDown && "collapse"
      )}
    >
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
      <div className="container mx-auto">
        <div className="flex justify-between flex-wrap items-center px-[12px] xl:px-[4px]">
          <div className="flex items-center gap-[12px]">
            <MdOutlineMenu
              size={28}
              className="text-textPrimary cursor-pointer lg:hidden block"
              onClick={handleOpenMenu}
            />
            <Link href="/#" className="lg:hidden block">
              <span className="flex items-center gap-[8px]">
                <FaCircleUser className="lg:size-[32px] size-[28px] text-[#0154C5]" />
                <span className="lg:inline-block hidden font-[500] text-textPrimary">
                  {t("account")}
                </span>
              </span>
            </Link>
          </div>
          <Image
            src={"/logo.png"}
            style={{
              clipPath: "ellipse(45% 40% at 50% 50%)",
            }}
            width={1700}
            height={883}
            alt="logo"
            className="w-[100px] sm:w-[160px] lg:w-[278px] cursor-pointer"
          />
          <div className="hidden lg:flex flex-1 mx-8">
            <Input
              placeholder={t("searchPlaceholder")}
              suffix={
                <div className="row gap-[25px]">
                  <IoCameraOutline className="size-[25px] cursor-pointer" />
                  <div className="p-[12px_25px] bg-[#0373F3] rounded-[999px] cursor-pointer">
                    <FiSearch className="size-[25px] text-white" />
                  </div>
                </div>
              }
              className="rounded-full pl-[20px] pr-[8px] sm:h-[64px] h-[34px] outline-[#0373F3] border-[#0373F3]"
            />
          </div>

          <div className="flex items-center gap-[12px] xl:gap-[34px]">
            <Dropdown
              menu={languageMenu}
              trigger={["click"]}
              className="text-textPrimary "
            >
              <div className="row gap-[8px]">
                <Image
                  className="cursor-pointer rounded-full lg:size-[36px] size-[32px]"
                  src={
                    locale === "en" ? "/england-flag.png" : "/vietnam-flag.png"
                  }
                  width={36}
                  height={36}
                  alt="flag"
                />
                <span className="hidden lg:flex items-center space-x-1 cursor-pointer">
                  <span className="text-textPrimary font-[500]">
                    {locale?.toUpperCase()}
                  </span>
                </span>
              </div>
            </Dropdown>
            <Popover
              title={<ProductItem product={carts[0]} className="!w-[214px]" />}
            >
              <span className="flex items-center gap-[8px] cursor-pointer">
                <div className="relative">
                  <FaShoppingCart className="text-[#0154C5] lg:size-[32px] size-[28px]" />
                  <span className="absolute text-center top-[-12px] right-[-12px] bg-[#FF5630] rounded-full p-[2px_4px] text-[12px] leading-[16px] text-white font-[500]">
                    12
                  </span>
                </div>
                <span className="lg:inline-block hidden text-[16px] font-[500] text-textPrimary">
                  {t("cart")}
                </span>
              </span>
            </Popover>
            <Link href="/#" className="lg:block hidden">
              <span className="flex items-center gap-[8px]">
                <FaCircleUser className="sm:size-[32px] size-[22px] text-[#0154C5]" />
                <span className="lg:inline-block hidden font-[500] text-textPrimary">
                  {t("account")}
                </span>
              </span>
            </Link>
          </div>
        </div>
        <div className="block lg:hidden w-full pb-[24px] px-[8px] sm:px-0">
          <Input
            placeholder={t("searchPlaceholder")}
            suffix={
              <div className="row gap-[14px] sm:gap-[25px]">
                <IoCameraOutline className="size-[22px] sm:size-[25px] cursor-pointer text-black" />
                <div className="sm:p-[12px_25px] sm:bg-[#0373F3] rounded-[999px] cursor-pointer">
                  <FiSearch className="size-[22px] sm:size-[25px] text-black sm:text-white" />
                </div>
              </div>
            }
            className="rounded-full px-[20px] pr-[8px] sm:h-[64px] h-[36px] outline-[#0373F3] border-[#0373F3]"
          />
        </div>
        <div className="pt-2 pb-[16px] px-[8px] sm:px-[4px] lg:flex hidden">
          <div className="flex justify-between items-center w-full gap-[30px]">
            <Popover
              trigger={["hover"]}
              rootClassName="container"
              placement="bottomLeft"
              onOpenChange={handleOpenCategory}
              content={
                <Layout className="container m-auto hidden lg:flex bg-[bg-[#F4F6F8]">
                  <Sider width={263} className="bg-white">
                    <CategorySidebar />
                  </Sider>
                  <Content className="h-[714px] overflow-auto">
                    <ProductGrid />
                  </Content>
                </Layout>
              }
              title=""
            >
              <Button
                type="primary"
                className="bg-[#0155C6] border-none h-[50px] rounded-[8px]"
              >
                <IoIosMenu size={18} />
                <span className="text-[16px] font-[700] mr-[8px]">
                  {t("header.menu.category")}
                </span>
                <SlArrowRight
                  className={cn(
                    isOpenCategory ? "rotate-90" : "rotate-[-90deg]",
                    "transition-all duration-300"
                  )}
                />
              </Button>
            </Popover>
            <div className="hidden lg:flex flex-1">
              <div className="flex items-center gap-[20px] flex-1">
                {MENU.map(renderMenu)}
              </div>
            </div>
            <div className="text-textPrimary hidden lg:flex  flex-wrap !justify-end gap-[10px] 2xl:gap-[20px]">
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
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
