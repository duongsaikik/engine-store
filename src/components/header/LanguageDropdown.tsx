import { Dropdown, MenuProps } from "antd";
import Image from "next/image";

interface LanguageDropdownProps {
  locale: string;
  supportedLanguages: string[];
  changeLanguage: (locale: string) => void;
}

const LanguageDropdown = ({ locale, supportedLanguages, changeLanguage }: LanguageDropdownProps) => {
  const languageMenu: MenuProps = {
    items: supportedLanguages?.map((loc: string) => ({
      key: loc,
      label: loc.toUpperCase(),
      onClick: () => changeLanguage(loc),
    })),
  };
  return (
    <Dropdown menu={languageMenu} trigger={["click"]} className="text-textPrimary ">
      <div className="row gap-[8px]">
        <Image
          className="cursor-pointer rounded-full lg:size-[36px] size-[24px]"
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