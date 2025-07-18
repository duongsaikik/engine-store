import { Dropdown, MenuProps } from "antd";
import Image from "next/image";

interface LanguageDropdownProps {
  locale: string;
  supportedLanguages: string[];
  changeLanguage: (locale: string) => void;
}

const LanguageDropdown = ({
  locale,
  supportedLanguages,
  changeLanguage,
}: LanguageDropdownProps) => {
  const languageMenu: MenuProps = {
    items: supportedLanguages?.map((loc: string) => ({
      key: loc,
      label: loc.toUpperCase(),
      onClick: () => changeLanguage(loc),
    })),
  };
  return (
    <Dropdown
      menu={languageMenu}
      trigger={["click"]}
      className="text-textPrimary hover:bg-hover cursor-pointer p-[4px] rounded-[8px] transition-all duration-200"
    >
      <div className="row gap-[8px]">
        <Image
          className="cursor-pointer rounded-full xl:size-[36px] sm:size-[28px] size-[24px]"
          src={locale === "en" ? "/england-flag.png" : "/vietnam-flag.png"}
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
  );
};

export default LanguageDropdown;
