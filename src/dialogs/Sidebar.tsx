import ClockIcon from "@/assets/icons/ClockIcon";
import DeliveryIcon from "@/assets/icons/DeliveryIcon";
import ExchangeIcon from "@/assets/icons/ExchangeIcon";
import TruckIcon from "@/assets/icons/TruckIcon";
import { cn } from "@/utils/common";
import { MENU } from "@/utils/constants";
import NiceModal, { useModal } from "@ebay/nice-modal-react";
import { Button, Collapse, Divider, Drawer } from "antd";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
import { IoIosArrowForward } from "react-icons/io";

const SideBar = NiceModal.create(() => {
  const modal = useModal();
  const t = useTranslations();

  const services = useMemo(
    () => [
      {
        label: "header.menu.support",
        icon: <ClockIcon />,
      },
      {
        label: "header.menu.freeShipping",
        icon: <DeliveryIcon />,
      },
      {
        label: "header.menu.fastDelivery",
        icon: <TruckIcon />,
      },
      {
        label: "header.menu.returns",
        icon: <ExchangeIcon />,
      },
    ],
    []
  );

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

  const renderCategory = (category: (typeof categories)[0], index: number) => (
    <div
      key={category.key}
      className={cn(
        index === 0 && "bg-[#F4F6F8] !border-l-[3px]",
        "mb-4 hover:bg-[#F4F6F8] hover:border-l-[3px] border-l-0 border-[#0D57C6] p-[16px] cursor-pointer"
      )}
    >
      <Link
        href={`/#`}
        className={cn(
          index === 0 && "text-[#024897] ",
          "flex items-center gap-[12px] hover:text-[#024897] text-textPrimary transition-colors"
        )}
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
        label: t("header.menu.category"),
        children: categories.map(renderCategory),
      },
    ],
    [t, categories, renderCategory]
  );

  const renderMenu = (menu: (typeof MENU)[0]) => {
    return (
      <Link
        key={menu.label}
        href={menu.url}
        className="text-textPrimary text-[16px] whitespace-nowrap p-[4px_12px] w-full hover:bg-gray-200 rounded-[8px] font-[500]"
      >
        {t(menu.label)}
      </Link>
    );
  };

  const renderService = (service: (typeof services)[0]) => {
    return (
      <div
        className="row !justify-start gap-[8px] p-[4px_12px] w-full"
        key={service.label}
      >
        {service.icon}
        <span className="text-[16px] font-[600] whitespace-nowrap">
          {t(service.label)}
        </span>
      </div>
    );
  };

  return (
    <Drawer
      className="[&_.ant-drawer-content-wrapper]:!w-full [&_.ant-drawer-content-wrapper]:sm:!w-[50%] [&_.ant-drawer-header-title]:flex-row-reverse [&_.ant-drawer-close]:!m-0
          [&_.ant-drawer-footer]:flex [&_.ant-drawer-footer]:justify-end"
      title={
        <Image
          src={"/logo.png"}
          style={{
            clipPath: "ellipse(45% 40% at 50% 50%)",
          }}
          width={1700}
          height={883}
          alt="logo"
          className="w-[100px] cursor-pointer"
        />
      }
      open={modal.visible}
      onClose={modal.hide}
      placement="left"
      afterOpenChange={afterOpenChange}
      footer={[
        <Button key="cancel" onClick={modal.hide}>
          {t("cancel")}
        </Button>,
      ]}
    >
      <div className="flex items-center flex-col gap-[20px]">
        {MENU.map(renderMenu)}
      </div>
      <Divider className="my-[8px]" />
      <Collapse
        defaultActiveKey="1"
        expandIconPosition="end"
        ghost
        items={originItems}
      />
      <Divider className="my-[8px]" />
      <div className="text-textPrimary flex-wrap flex justify-between gap-[10px] 2xl:gap-[20px]">
        {services.map(renderService)}
      </div>
      <Divider className="my-[8px]" />
      <div className="sticky bottom-[-24px] py-[12px] bg-white">
        <div className="mb-[12px] flex flex-col gap-[12px]">
          <span className="text-[12px] text-textSecondary font-[600]">
            {t("sidebar.improvedAppExperience")}
          </span>
          <div className="cursor-pointer flex items-center gap-[8px] bg-[#0155C6] text-white w-max p-[12px] rounded-full">
            <HiDownload size={20} />
            <span>{t("download")}</span>
          </div>
        </div>
        <div className="row gap-[8px] p-[8px_16px] bg-gray-100 rounded-full">
          <FaPhoneAlt color="#0155C6" />
          <div>
            <span className="text-[14px] font-[600] text-[#0155C6]">
              {t("hotline")}:{" "}
            </span>
            <span className="text-[#0155C6] font-[600] text-[14px]">
              0283 760 7607
            </span>
          </div>
        </div>
      </div>
    </Drawer>
  );
});

export default SideBar;
