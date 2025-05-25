"use client";

import { cn } from "@/utils/common";
import { DownOutlined } from "@ant-design/icons";
import NiceModal from "@ebay/nice-modal-react";
import { Button, Divider, Dropdown, MenuProps } from "antd";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { IoFilterOutline } from "react-icons/io5";
import styles from "./styles.module.css";

const sortOptions1 = [
  {
    key: "relevance",
    label: "sortBar.relevance",
  },
  {
    key: "bestsellers",
    label: "sortBar.bestsellers",
  },
  {
    key: "newest",
    label: "sortBar.newest",
  },
  {
    key: "featured",
    label: "sortBar.featured",
  },
];

interface ProductSortBarProps {
  onSortChange: (sortBy: string) => void;
}

const ProductSortBar = ({ onSortChange }: ProductSortBarProps) => {
  const t = useTranslations();
  const [selectedSort1, setSelectedSort1] = useState<string>("");
  const [selectedSort, setSelectedSort] = useState<string>("priceLowToHigh");

  const sortOptions: MenuProps["items"] = [
    {
      key: "priceLowToHigh",
      label: t("sortBar.priceLowToHigh"),
    },
  ];

  const handleMenuClick: MenuProps["onClick"] = (e) => {
    setSelectedSort(e.key);
    onSortChange(e.key);
  };

  const menu: MenuProps = {
    items: sortOptions,
    onClick: handleMenuClick,
    selectable: true,
    selectedKeys: [selectedSort],
  };

  const handleChangeSort = (
    e: React.MouseEvent<HTMLElement, MouseEvent>,
    value: string
  ) => {
    e.stopPropagation();
    setSelectedSort1(value);
    onSortChange(value);
  };

  const handleOpenFilter = () => {
    NiceModal.show("product-filter");
  };

  const renderButton = (value: (typeof sortOptions1)[0]) => {
    return (
      <div className="relative" key={value.key}>
        <Button
          className={cn(
            selectedSort1 === value.key
              ? "border-[#0373F3]"
              : "border-gray-200 lg:border-none",
            styles.customSortButton
          )}
          onClick={(e) => handleChangeSort(e, value.key)}
        >
          {t(value.label)}
        </Button>
        <Button
          className={cn(
            selectedSort1 === value.key ? "visible" : "hidden",
            styles.buttonOutline,
            "h-[40px] absolute top-0 left-0 w-full"
          )}
          onClick={() => onSortChange(value.key)}
        >
          {t(value.label)}
        </Button>
        {selectedSort1 === value.key && (
          <FaCheck
            className="absolute right-[2px] top-[4px] z-[88]"
            size={8}
            color="white"
          />
        )}
      </div>
    );
  };

  return (
    <div className="pt-[12px] pb-[34px] flex items-center justify-between flex-wrap gap-2">
      <span className="text-textPrimary text-[20px] font-[600]">
        {t("sortBar.productList")}
      </span>
      <Divider className="my-[8px] lg:hidden block" />
      <div
        className="lg:hidden items-center flex gap-[8px] border-gray-200 border rounded-[8px] p-[8px_16px] cursor-pointer hover:text-[#025FCA] hover:border-[#025FCA]"
        onClick={handleOpenFilter}
      >
        <span className="font-[600]">{t("sidebar.filter")}</span>
        <IoFilterOutline size={20} />
      </div>
      <div className="flex items-center gap-[20px] flex-wrap">
        <span className="text-[16px] text-textPrimary font-[500] mr-[20px]">
          {t("sortBar.sortBy")}
        </span>
        <div className="row flex-wrap !justify-start gap-[8px]">{sortOptions1.map(renderButton)}</div>
        <Dropdown menu={menu} trigger={["click"]}>
          <div className="cursor-pointer">
            <span className="text-[14px] font-[500] text-textPrimary">
              {t(`sortBar.${selectedSort}`)}
            </span>
            <DownOutlined className="ml-1" />
          </div>
        </Dropdown>
      </div>
    </div>
  );
};

export default ProductSortBar;
