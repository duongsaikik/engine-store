import SideBar from "@/components/SideBar";
import { initialProducts } from "@/libs/data";
import NiceModal, { useModal } from "@ebay/nice-modal-react";
import { Button, Drawer } from "antd";
import { useTranslations } from "next-intl";

const ProductFilter = NiceModal.create(() => {
  const modal = useModal();
  const t = useTranslations();

  const afterOpenChange = (visible: boolean) => {
    if (!visible) modal.remove();
  };

  return (
    <Drawer
      className="[&_.ant-drawer-content-wrapper]:!w-full [&_.ant-drawer-content-wrapper]:sm:!w-[50%] [&_.ant-drawer-header-title]:flex-row-reverse [&_.ant-drawer-close]:!m-0"
      classNames={{ body: "!p-0", footer: "flex justify-end" }}
      title={t("sidebar.filter")}
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
      <SideBar data={initialProducts} width="100%" isModal hideHeader />
    </Drawer>
  );
});

export default ProductFilter;
