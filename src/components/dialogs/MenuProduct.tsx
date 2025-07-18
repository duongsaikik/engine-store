import NiceModal, { useModal } from "@ebay/nice-modal-react";
import { Button, Collapse, Drawer, Image } from "antd";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useMemo } from "react";
import { IoIosArrowForward } from "react-icons/io";

const MenuProduct = NiceModal.create(() => {
  const modal = useModal();
  const t = useTranslations();

  const afterOpenChange = (visible: boolean) => {
    if (!visible) modal.remove();
  };

  const categories = [
    {
      key: "oilFilter",
      icon: <Image src="/productImage.jpg" height={40} width={40} alt="icon" />,
      label: "oilFilter",
    },
    {
      key: "airFilter",
      icon: <Image src="/productImage.jpg" height={40} width={40} alt="icon" />,
      label: "airFilter",
    },
    {
      key: "fuelFilter",
      icon: <Image src="/productImage.jpg" height={40} width={40} alt="icon" />,
      label: "fuelFilter",
    },
    {
      key: "cabinFilter",
      icon: <Image src="/productImage.jpg" height={40} width={40} alt="icon" />,
      label: "cabinFilter",
    },
    {
      key: "airFilter2",
      icon: <Image src="/productImage.jpg" height={40} width={40} alt="icon" />,
      label: "airFilter",
    },
  ];

  const renderCategory = (category: (typeof categories)[0]) => (
    <div
      key={category.key}
      className="mb-4 hover:bg-[#F4F6F8] hover:border-l-[3px] border-l-0 border-[#0D57C6] p-[16px] cursor-pointer"
    >
      <Link
        href={`/category/${category.key}`}
        className="flex items-center gap-[12px] hover:text-[#024897] text-textPrimary transition-colors"
      >
        {category.icon && <span className="mr-2">{category.icon}</span>}
        <span className="text-[16px] font-[600]">
          {t(`sidebar.${category.label}`)}
        </span>
        <span className="ml-auto">
          <IoIosArrowForward />
        </span>
      </Link>
    </div>
  );

  const originItems = useMemo(
    () => [
      {
        key: "1",
        label: t("sidebar.origins"),
        children: categories.map(renderCategory),
      },
    ],
    [t, categories, renderCategory]
  );

  return (
    <Drawer
      className="[&_.ant-drawer-content-wrapper]:!w-full [&_.ant-drawer-content-wrapper]:sm:!w-[50%]"
      title={""}
      open={modal.visible}
      onClose={modal.hide}
      placement="right"
      afterOpenChange={afterOpenChange}
      footer={[
        <Button key="cancel" onClick={modal.hide}>
          {t("cancel")}
        </Button>,
      ]}
    >
      <Collapse
        defaultActiveKey="1"
        expandIconPosition="end"
        ghost
        items={originItems}
      />
    </Drawer>
  );
});

export default MenuProduct;
