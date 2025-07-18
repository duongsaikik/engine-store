import { Popover } from "antd";
import { FaShoppingCart } from "react-icons/fa";
import ProductItem from "../ProductItem";

interface CartPopoverProps {
  count: number;
  product: any;
  label?: string;
}

const CartPopover = ({ count, product, label = "Cart" }: CartPopoverProps) => {
  return (
    <Popover title={<ProductItem product={product} className="!w-[214px]" />}>
      <span className="flex items-center gap-[8px] cursor-pointer">
        <div className="relative">
          <FaShoppingCart className="text-[#0154C5] lg:size-[32px] size-[24px]" />
          <div className="absolute top-[-12px] right-[-12px] bg-[#FF5630]  rounded-full size-[24px] text-center">
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