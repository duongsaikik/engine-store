import Image from "next/image";
import { Skeleton } from "antd";
import { Classification } from "@/types";

interface ProductListProps {
  data: Classification[];
  loading: boolean;
}

const ClassificationList = ({ data, loading }: ProductListProps) => {
  const renderProduct = (classification: Classification) => (
    <div
      key={classification.id}
      className="flex items-center bg-[#fcfcfc] lg:bg-white w-full rounded-[12px] p-[12px_16px] hover:scale-105 transition-all duration-300 cursor-pointer gap-[16px] lg:border-0 border"
    >
      <Image
        src="/productImage.jpg"
        width={70}
        height={70}
        className="sm:size-[70px] size-[40px]"
        alt="classification"
      />
      <span className="font-[600] text-[14px] sm:text-[16px] text-textPrimary whitespace-nowrap text-ellipsis overflow-hidden">
        {classification.name}
      </span>
    </div>
  );

  return (
    <div className="gap-[16px] grid grid-cols-2 sm:grid-cols-3">
      {data.map(renderProduct)}
      {loading && <Skeleton />}
    </div>
  );
};

export default ClassificationList;
