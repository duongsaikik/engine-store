"use client";

import { cn } from "@/utils/common";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

const categories = [
  {
    key: "oilFilter",
    icon: <Image src="/productImage.jpg" height={40} width={40} alt="icon" />,
    label: "oilFilter",
  },
  {
    key: "airFilter",
    icon: <Image src="/productImage.jpg" height={40} width={40} alt="icon" />,
    label: "airFilter",
  },
  {
    key: "fuelFilter",
    icon: <Image src="/productImage.jpg" height={40} width={40} alt="icon" />,
    label: "fuelFilter",
  },
  {
    key: "cabinFilter",
    icon: <Image src="/productImage.jpg" height={40} width={40} alt="icon" />,
    label: "cabinFilter",
  },
  {
    key: "airFilter2",
    icon: <Image src="/productImage.jpg" height={40} width={40} alt="icon" />,
    label: "airFilter",
  },
];

const CategorySidebar = () => {
  const t = useTranslations();

  const renderCategory = (category: (typeof categories)[0], index: number) => (
    <div
      key={category.key}
      className={cn(
        index === 0 && "bg-sidebarBg !border-l-[3px]",
        "mb-4 hover:bg-sidebarBg hover:border-l-[3px] border-l-0 border-sidebarBorder p-[16px] cursor-pointer"
      )}
    >
      <Link
        href={`/#`}
        className={cn(
          index === 0 && "text-sidebarText ",
          "flex items-center gap-[12px] hover:text-sidebarText text-textPrimary transition-colors"
        )}
      >
        {category.icon && <span className="mr-2">{category.icon}</span>}
        <span className="text-[16px] font-[600]">
          {t(`sidebar.${category.label}`)}
        </span>
        <span className="ml-auto">
          <IoIosArrowForward />
        </span>
      </Link>
    </div>
  );

  return (
    <div className="w-full bg-white">{categories.map(renderCategory)}</div>
  );
};

export default CategorySidebar;
