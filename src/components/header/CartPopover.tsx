import { Product } from "@/types";
import { Popover } from "antd";
import { FaShoppingBag } from "react-icons/fa";
import ProductItem from "../ProductItem";

interface CartPopoverProps {
  count: number;
  product: Product;
  label?: string;
}

const CartPopover = ({ count, product, label = "Cart" }: CartPopoverProps) => {
  return (
    <Popover title={<ProductItem product={product} className="!w-[214px]" />}>
      <span className="flex items-center gap-[8px] hover:bg-hover cursor-pointer p-[4px] rounded-[8px] transition-all duration-200">
        <div className="relative">
          <FaShoppingBag className="text-[#0154C5] xl:size-[32px] sm:size-[28px] size-[24px]" />
          <div className="absolute top-[-16px] right-[-14px] bg-[#FF5630]  rounded-full size-[24px] text-center">
            <span className="text-center p-[6px] text-[12px] leading-[14px] text-white font-[500]">
              {count}
            </span>
          </div>
        </div>
        <span className="lg:inline-block hidden text-[16px] font-[500] text-textPrimary">
          {label}
        </span>
      </span>
    </Popover>
  );
};

export default CartPopover;
