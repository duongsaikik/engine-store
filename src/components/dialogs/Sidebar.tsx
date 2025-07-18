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
        index === 0 && "text-sidebarText",
        "hover:bg-sidebarBg py-[12px] px-[16px] cursor-pointer",
        index !== categories.length - 1 && "border-b"
      )}
    >
      <Link
        href={`/#`}
        className={cn(
          "flex items-center gap-[12px] hover:text-sidebarText text-textPrimary transition-colors"
        )}
      >
        <span
          className={cn(
            "text-[14px] font-[600]",
            index === 0 && "text-sidebarText"
          )}
        >
          {t(`sidebar.${category.label}`)}
        </span>
      </Link>
    </div>
  );

  const originItems = useMemo(
    () => [
      {
        key: "1",
        label: t("header.menu.category"),
        classNames:{
          header:'[&_.ant-collapse-header-text]:font-[600] [&_.ant-collapse-header-text]:text-[16px]'
        },
        children: (
          <div className="rounded-lg bg-[#eaeffa]">
            {categories.map(renderCategory)}
          </div>
        ),
      },
    ],
    [t, categories, renderCategory]
  );

  const renderMenu = (menu: (typeof MENU)[0]) => {
    return (
      <Link
        key={menu.label}
        href={menu.url}
        className="text-textPrimary text-[16px] whitespace-nowrap p-[4px_12px] hover:bg-gray-100 w-full rounded-[8px] font-[500] hight-light"
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
      className="[&_.ant-drawer-content-wrapper]:!w-full [&_.ant-drawer-content-wrapper]:sm:!w-[50%] [&_.ant-drawer-header-title]:flex-row-reverse [&_.ant-drawer-close]:!m-0"
      classNames={{ body: "!p-0", footer: "flex justify-end" }}
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
        className="123"

      />
      <Divider className="my-[8px]" />
      <div className="text-textPrimary flex-wrap flex justify-between gap-[20px]">
        {services.map(renderService)}
      </div>
      <Divider className="my-[8px]" />
      <div className="p-[12px] bg-white">
        <div className="mb-[12px] flex flex-col gap-[12px]">
          <span className="text-[12px] text-textSecondary font-[600]">
            {t("sidebar.improvedAppExperience")}
          </span>
          <div className="cursor-pointer flex items-center gap-[8px] bg-buttonBg text-white w-max p-[12px] rounded-full">
            <HiDownload size={20} />
            <span>{t("download")}</span>
          </div>
        </div>
        <div className="row gap-[8px] p-[8px_16px] bg-gray-100 rounded-full">
          <FaPhoneAlt color="#0155C6" />
          <div>
            <span className="text-[14px] font-[600] text-buttonBg">
              {t("hotline")}:{" "}
            </span>
            <span className="text-buttonBg font-[600] text-[14px]">
              0283 760 7607
            </span>
          </div>
        </div>
      </div>
    </Drawer>
  );
});

export default SideBar;
