import FilterIcon from "@/assets/icons/FilterIcon";
import { Product } from "@/types";
import { cn } from "@/utils/common";
import {
  BRANDS,
  CATEGORIES,
  ORIGINS,
  PRICE_RANGES,
  YEARS,
} from "@/utils/constants";
import { Checkbox, Collapse, Divider } from "antd";
import Sider from "antd/es/layout/Sider";
import { useTranslations } from "next-intl";
import { useRouter, useSearchParams } from "next/navigation";
import { useMemo } from "react";
import styles from "./styles.module.css";

type Props = {
  width?: string | number;
  data: Product[];
  isModal?: boolean;
  hideHeader?: boolean;
};

const SideBar: React.FC<Props> = ({
  width = 315,
  isModal = false,
  hideHeader = false,
}) => {
  const t = useTranslations();
  const router = useRouter();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);

  const handleSelect = (
    name: string,
    category: string,
    isMultiSelect?: boolean
  ) => {
    if ((!isMultiSelect && params.has(name)) || params.has(name, category)) {
      params.delete(name, category);
      router.push(`?${params.toString()}`);
      if (isMultiSelect) return;
    }
    if (isMultiSelect) {
      params.append(name, category);
    } else {
      params.set(name, category);
    }
    router.push(`?${params.toString()}`);
  };

  const productTypes = useMemo(
    () => [
      {
        key: "1",
        label: t("sidebar.categories"),
        children: CATEGORIES.map((category) => (
          <Checkbox
            key={category.label}
            checked={params.getAll("category").includes(category.value)}
            onChange={() => handleSelect("category", category.value, true)}
            className="flex mt-2"
          >
            {category.label} (24)
          </Checkbox>
        )),
      },
    ],
    [params.toString()]
  );

  const priceRangeItems = useMemo(
    () => [
      {
        key: "1",
        label: t("sidebar.priceRange"),
        children: (
          <div className="flex flex-col gap-[8px]">
            {PRICE_RANGES.map((range) => (
              <span
                key={range.value}
                className={cn(
                  range.value === params.get("priceRange") &&
                    "bg-[#E6F1FF] border-none !text-[#025FCA]",
                  "border border-[#919EAB3D] text-center py-[8px] text-[14px] text-textPrimary cursor-pointer hover:border-blue-500"
                )}
                onClick={() => handleSelect("priceRange", range.value)}
              >
                {t(range.label)}
              </span>
            ))}
          </div>
        ),
      },
    ],
    [params.toString()]
  );

  const brandItems = useMemo(
    () => [
      {
        key: "1",
        label: t("sidebar.brands"),
        children: BRANDS.map((brand) => (
          <Checkbox
            key={brand.value}
            checked={params.getAll("brand").includes(brand.value)}
            onChange={() => handleSelect("brand", brand.value, true)}
            className="flex mt-2"
          >
            {brand.label} (24)
          </Checkbox>
        )),
      },
    ],
    [params.toString()]
  );

  const yearItems = useMemo(
    () => [
      {
        key: "1",
        label: t("sidebar.years"),
        children: YEARS.map((year) => (
          <Checkbox
            key={year}
            checked={params.getAll("year").includes(year)}
            onChange={() => handleSelect("year", year, true)}
            className="flex mt-2"
          >
            {year} (24)
          </Checkbox>
        )),
      },
    ],
    [params.toString()]
  );

  const originItems = useMemo(
    () => [
      {
        key: "1",
        label: t("sidebar.origins"),
        children: ORIGINS.map((origin) => (
          <Checkbox
            key={origin.value}
            checked={params.getAll("origin").includes(origin.value)}
            onChange={() => handleSelect("origin", origin.value, true)}
            className="flex mt-2"
          >
            {origin.label} ({origin.count})
          </Checkbox>
        )),
      },
    ],
    [params.toString()]
  );

  return (
    <Sider
      width={width}
      className={cn(
        isModal ? "block" : "sticky left-0 top-0 overflow-auto lg:block hidden",
        "bg-white rounded-[8px] h-[calc(100vmin-45px)]"
      )}
    >
      {!hideHeader && (
        <h3 className="mb-4 px-[12px] flex gap-[12px] items-center border-b border-[#919EAB33] py-[24px]">
          <FilterIcon />
          <span className="font-[700] text-[24px] text-[#0373F3] mt-[-4px]">
            {t("sidebar.filter")}
          </span>
        </h3>
      )}
      <Collapse
        defaultActiveKey="1"
        className={styles.customCollapse}
        expandIconPosition="end"
        ghost
        items={productTypes}
      />
      <Divider className="!my-0" />
      <Collapse
        defaultActiveKey="1"
        className={styles.customCollapse}
        expandIconPosition="end"
        ghost
        items={priceRangeItems}
      />
      <Divider className="!my-0" />
      <Collapse
        defaultActiveKey="1"
        className={styles.customCollapse}
        expandIconPosition="end"
        ghost
        items={brandItems}
      />
      <Collapse
        defaultActiveKey="1"
        className={styles.customCollapse}
        expandIconPosition="end"
        ghost
        items={yearItems}
      />
      <Divider className="!my-0" />
      <Collapse
        defaultActiveKey="1"
        className={styles.customCollapse}
        expandIconPosition="end"
        ghost
        items={originItems}
      />
    </Sider>
  );
};
export default SideBar;
