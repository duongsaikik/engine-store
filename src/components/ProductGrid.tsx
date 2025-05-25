"use client";

import { fetchData } from "@/libs/data";
import { Product } from "@/types";
import { Divider, Skeleton } from "antd";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useEffect, useState } from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import ProductItem from "./ProductItem";

const ProductGrid = () => {
  const t = useTranslations();

  const [data, setData] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      const response = fetchData(1, 4);
      setData((prev) => [...prev, ...response.data]);
      setLoading(false);
    }, 500);
  }, []);

  const renderProduct = (product: Product) => {
    return (
      <div
        key={product.id}
        className="row bg-white sm:w-[334px] w-full rounded-[12px] p-[12px_16px] hover:scale-105 transition-all duration-300 cursor-pointer gap-[16px]"
      >
        <Image src="/productImage.jpg" width={70} height={70} alt="product" />
        <span className="font-[600] text-[16px] text-textPrimary">
          {product.name}
        </span>
      </div>
    );
  };

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
    <div className="p-[24px] bg-[#F4F6F8]">
      <div className="flex gap-[16px] flex-wrap">{data.map(renderProduct)}</div>
      {loading && <Skeleton />}
      <Divider />
      <div className="w-full">
        <div className="flex justify-between items-center">
          <h2 className="text-[24px] font-[600] mb-4 text-textPrimary">
            {t("sidebar.topSelling")}
          </h2>
          <div className="row gap-[8px] cursor-pointer">
            <span className="text-[#0373F3] text-[16px] font-[600]">
              {t("sidebar.viewAll")}
            </span>
            <MdKeyboardDoubleArrowRight
              color="#0373F3"
              className="!text-[#0373F3]"
            />
          </div>
        </div>
        <div className="flex flex-wrap gap-[16px]">
          {data.map(renderTopSelling)}
        </div>
        {loading && <Skeleton />}
      </div>
    </div>
  );
};

export default ProductGrid;
