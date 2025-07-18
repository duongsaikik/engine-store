import { Input } from "antd";
import { FiSearch } from "react-icons/fi";
import { IoCameraOutline } from "react-icons/io5";
import { useTranslations } from "next-intl";

interface SearchBarProps {
  variant: "desktop" | "mobile";
}

const SearchBar = ({ variant }: SearchBarProps) => {
  const t = useTranslations();
  if (variant === "desktop") {
    return (
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
    );
  }
  return (
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
  );
};

export default SearchBar; 