"use client";

import useScrollDirection from "@/hooks/useScrollDirection";
import { carts } from "@/libs/data";
import { cn } from "@/utils/common";
import { MENU, SUPPORTED_LANGUAGES } from "@/utils/constants";
import NiceModal from "@ebay/nice-modal-react";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import { MdOutlineMenu } from "react-icons/md";
import AccountLink from "./AccountLink";
import CartPopover from "./CartPopover";
import CategoryMenuButton from "./CategoryMenuButton";
import LanguageDropdown from "./LanguageDropdown";
import PromoBar from "./PromoBar";
import SearchBar from "./SearchBar";
import SupportBar from "./SupportBar";
import styles from "./styles.module.css";

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
      <PromoBar />
      <div className="container mx-auto">
        <div className="flex justify-between flex-wrap items-center px-[12px] xl:px-[4px]">
          <div className="flex items-center gap-[12px]">
            <MdOutlineMenu
              size={28}
              className="text-textPrimary cursor-pointer lg:hidden block"
              onClick={handleOpenMenu}
            />
            <AccountLink label={t("account")} className="lg:hidden block" />
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
            <SearchBar variant="desktop" />
          </div>

          <div className="flex items-center gap-[18px] xl:gap-[30px]">
            <LanguageDropdown
              locale={locale}
              supportedLanguages={SUPPORTED_LANGUAGES as unknown as string[]}
              changeLanguage={changeLanguage}
            />
            <CartPopover count={12} product={carts[0]} label={t("cart")} />
            <AccountLink label={t("account")} className="lg:block hidden" />
          </div>
        </div>
        <div className="block lg:hidden w-full pb-[24px] px-[8px] sm:px-0">
          <SearchBar variant="mobile" />
        </div>
        <div className="pt-2 pb-[16px] px-[8px] lg:flex hidden">
          <div className="flex justify-between flex-wrap items-center w-full gap-[12px]">
            <div className="w-1/2 gap-[24px] flex">
              <CategoryMenuButton
                isOpenCategory={isOpenCategory}
                handleOpenCategory={(open) => setIsOpenCategory(open)}
                t={t}
              />
              <div className="hidden lg:flex flex-1">
                <div className="flex items-center gap-[20px] flex-1">
                  {MENU.map(renderMenu)}
                </div>
              </div>
            </div>
            <SupportBar t={t} />
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
