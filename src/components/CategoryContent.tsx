"use client";

import { fetchClassifications, fetchData } from "@/libs/data";
import { Classification, Product } from "@/types";
import { Divider } from "antd";
import { useEffect, useState } from "react";
import ClassificationList from "./ClassificationList";
import TopSellingProducts from "./TopSellingProducts";

const CategoryContent = () => {
  const [data, setData] = useState<Product[]>([]);
  const [classification, setClassification] = useState<Classification[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      const response = fetchData(1, 4);
      setData((prev) => [...prev, ...response.data]);
      const classResponse = fetchClassifications(1, 4);
      setClassification((prev) => [...prev, ...classResponse.data]);
      setLoading(false);
    }, 500);
  }, []);

  return (
    <div className="p-[24px] bg-sidebarBg">
      <ClassificationList data={classification} loading={loading} />
      <Divider />
      <TopSellingProducts data={data} loading={loading} />
    </div>
  );
};

export default CategoryContent;
