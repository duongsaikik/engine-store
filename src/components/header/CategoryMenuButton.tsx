import { Button, Layout, Popover } from "antd";
import { IoIosMenu } from "react-icons/io";
import { SlArrowRight } from "react-icons/sl";
import CategorySidebar from "../CategorySidebar";
import ProductGrid from "../ProductGrid";
import { Content } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import { cn } from "@/utils/common";

interface CategoryMenuButtonProps {
  isOpenCategory: boolean;
  handleOpenCategory: (open: boolean) => void;
  t: (key: string) => string;
}

const CategoryMenuButton = ({ isOpenCategory, handleOpenCategory, t }: CategoryMenuButtonProps) => (
  <Popover
    trigger={["hover"]}
    rootClassName="container"
    placement="bottomLeft"
    onOpenChange={handleOpenCategory}
    content={
      <Layout className="container m-auto hidden lg:flex bg-[bg-[#F4F6F8]">
        <Sider width={263} className="bg-white">
          <CategorySidebar />
        </Sider>
        <Content className="h-[714px] overflow-auto">
          <ProductGrid />
        </Content>
      </Layout>
    }
    title=""
  >
    <Button
      type="primary"
      className="bg-[#0155C6] border-none h-[50px] rounded-[8px]"
    >
      <IoIosMenu size={24} />
      <span className="text-[16px] font-[700] mr-[8px] leading-[12px]">
        {t("header.menu.category")}
      </span>
      <SlArrowRight
        className={cn(
          isOpenCategory ? "rotate-90" : "rotate-[-90deg]",
          "transition-all duration-300"
        )}
      />
    </Button>
  </Popover>
);

export default CategoryMenuButton; 