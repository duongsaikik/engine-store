"use client";

import DiscountIcon from "@/assets/icons/DiscountIcon";
import { Product } from "@/types";
import { calculateDiscount, cn } from "@/utils/common";
import { Button, Card } from "antd";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useEffect, useRef } from "react";

type Props = {
  product: Product;
  className?: string;
  isView?: boolean;
  showHighLight?: boolean;
  ref?: React.Ref<HTMLDivElement>;
  total?: number;
  index?: number;
  loadMore?: () => void;
  hasMore?: boolean;
};

const ProductItem: React.FC<Props> = ({
  product,
  isView = false,
  showHighLight = true,
  className,
  total,
  index,
  loadMore,
}) => {
  const t = useTranslations();
  const lastItemRef = useRef<HTMLDivElement>(null);
  const callback = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        loadMore?.();
      }
    });
  };
  useEffect(() => {
    const observer = new IntersectionObserver(callback);
    if (lastItemRef.current) observer.observe(lastItemRef.current);

    return () => {
      if (lastItemRef.current) observer.disconnect();
    };
  }, []);

  return (
    <Card
      ref={index && total ? (index + 1 === total ? lastItemRef : null) : null}
      hoverable
      cover={
        <Image
          alt="/productImage.jpg"
          src="/productImage.jpg"
          width={200}
          height={200}
          className="object-contain mx-auto"
        />
      }
      className={cn(className, "rounded-lg w-[252px] shadow-md [&_.ant-card-body]:p-[12px] [&_.ant-card-body]:sm:p-[24px]")}
    >
      <Card.Meta
        title={
          showHighLight && (
            <div className="row w-max gap-[6px] !justify-start bg-gradient-to-r from-warningLight to-warningMain rounded-full p-[0px_10px]">
              <DiscountIcon />
              <span className="text-errorDarker text-[14px] font-[600]">
                {t("product.shockPrice")}
              </span>
            </div>
          )
        }
        description={
          <div className="text-left">
            <p className="text-[16px] text-textPrimary font-[600] line-clamp-2">
              {product.name}
            </p>
            <p className="text-errorDark font-[600] text-[20px]">
              {product.price.toLocaleString("vi-VN")} đ
            </p>
            <div className="row !justify-start gap-[10px]">
              <p className="text-gray-500 line-through">
                {product.originalPrice.toLocaleString("vi-VN")} đ
              </p>
              <span className="text-errorDark font-[500] text-[12px]">
                {calculateDiscount(product.price, product.originalPrice)}%
              </span>
            </div>
            <Button
              hidden={isView}
              type="primary"
              className="mt-2 w-full bg-buttonBgLight text-buttonBg font-[700] text-[14px] hover:bg-blue-600"
            >
              {t("product.buyNow")}
            </Button>
          </div>
        }
      />
    </Card>
  );
};
export default ProductItem;
