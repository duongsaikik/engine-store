import { Product } from "@/types";
import { Skeleton } from "antd";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import ProductItem from "./ProductItem";
import { useTranslations } from "next-intl";

interface TopSellingProductsProps {
  data: Product[];
  loading: boolean;
}

const TopSellingProducts = ({ data, loading }: TopSellingProductsProps) => {
  const t = useTranslations();

  const renderTopSelling = (product: Product) => (
    <ProductItem
      key={product.id}
      product={product}
      isView
      showHighLight={false}
      className="!w-[200px]"
    />
  );

  return (
    <div className="w-full">
      <div className="flex justify-between items-center">
        <h2 className="text-[24px] font-[600] mb-4 text-textPrimary">
          {t("sidebar.topSelling")}
        </h2>
        <div className="row gap-[8px] cursor-pointer">
          <span className="text-highlight text-[16px] font-[600]">
            {t("sidebar.viewAll")}
          </span>
          <MdKeyboardDoubleArrowRight
            color="#0373F3"
            className="!text-highlight"
          />
        </div>
      </div>
      <div className="flex flex-wrap gap-[16px]">
        {data.map(renderTopSelling)}
      </div>
      {loading && <Skeleton />}
    </div>
  );
};

export default TopSellingProducts;
