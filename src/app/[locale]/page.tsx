"use client";

import Banner from "@/components/Banner";
import Breadcrumb from "@/components/Breadcrumb";
import { registerDialogs } from "@/components/dialogs";
import ProductItem from "@/components/ProductItem";
import ClassificationList from "@/components/ClassificationList";
import ProductSortBar from "@/components/ProductSortBar";
import SideBar from "@/components/SideBar";
import { fetchClassifications, fetchData, initialProducts } from "@/libs/data";
import { cn } from "@/utils/common";
import { LIMIT } from "@/utils/constants";
import { Layout, Skeleton } from "antd";
import { useEffect, useRef, useState } from "react";
import { Classification, Product } from "../../types";

const { Content } = Layout;

export default function Home() {
  const [data, setData] = useState<Product[]>([]);
  const [classification, setClassification] = useState<Classification[]>([]);
  const [loading, setLoading] = useState(false);

  const currentPageRef = useRef(1);
  const hasMoreRef = useRef(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      const response = fetchData(1, LIMIT);
      setData((prev) => [...prev, ...response.data]);
      const classResponse = fetchClassifications(1, 4);
      setClassification((prev) => [...prev, ...classResponse.data]);
      setLoading(false);
    }, 500);
  }, []);

  const handleLoadMore = () => {
    if (hasMoreRef.current) {
      setLoading(true);
    }
    setTimeout(() => {
      currentPageRef.current = currentPageRef.current + 1;
      const response = fetchData(currentPageRef.current, LIMIT);
      hasMoreRef.current = response.hasMore;
      setData((prev) => [...prev, ...response.data]);
      setLoading(false);
    }, 500);
  };

  const renderProduct = (
    product: Product,
    index: number,
    products: Product[]
  ) => (
    <ProductItem
      index={index}
      total={products.length}
      key={product.id}
      product={product}
      className={cn(
        "sm:!w-[49%] md:!w-[49%] lg:!w-[32%] xl:!w-[24%] !w-[48%] [&_.ant-card-body]:p-[12px] [&_.ant-card-body]:sm:p-[24px]"
      )}
      loadMore={handleLoadMore}
    />
  );

  useEffect(() => {
    registerDialogs();
  }, []);

  return (
    <Layout rootClassName="bg-[#F4F6F8]">
      <Layout className="mx-auto container">
        <Breadcrumb />
        <Banner />
        <div className="lg:hidden mb-[8px]">
          <h1 className="text-[18px] font-[700] my-[8px] px-[16px]">
            Bộ lọc dầu
          </h1>
          <div className="bg-white rounded-[8px] p-[12px_16px]">
            <ClassificationList data={classification} loading={loading} />
          </div>
        </div>
      </Layout>
      <Layout className="min-h-screen container mx-auto bg-white rounded-[8px] lg:bg-[#F4F6F8]">
        <SideBar data={initialProducts} />
        <Content className="p-[12px] pb-[12px] lg:p-[0_0_0_20px] rounded-[8px] bg-white lg:bg-[#F4F6F8]">
          <ProductSortBar onSortChange={() => {}} />
          <div className="flex flex-wrap gap-[12px]" id="list">
            {data.map(renderProduct)}
          </div>
          {loading && <Skeleton className="mt-[24px]" />}
        </Content>
      </Layout>
    </Layout>
  );
}
