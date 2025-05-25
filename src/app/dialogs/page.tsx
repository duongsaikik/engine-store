import NiceModal from "@ebay/nice-modal-react";
import React from "react";

const ProductFilter = React.lazy(() => import("../dialogs/ProductFilter"));
const SideBar = React.lazy(() => import("../dialogs/Sidebar"));
const MenuProduct = React.lazy(() => import("../dialogs/MenuProduct"));

export const registerDialogs = () => {
  NiceModal.register("product-filter", ProductFilter);
  NiceModal.register("sidebar", SideBar);
  NiceModal.register("menu-product", MenuProduct);
};
