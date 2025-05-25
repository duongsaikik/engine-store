export const SUPPORTED_LANGUAGES = ["en", "vi"] as const;
export const DEFAULT_LANGUAGE = "vi";

export const CATEGORIES = [
  {
    label: "Lọc gió Động cơ - Air Filter",
    value: "1",
  },
  {
    label: "Lọc Nhiên Liệu - Fuel Filter",
    value: "2",
  },
  {
    label: "Bộ lọc dầu",
    value: "3",
  },
];

export const BRANDS = [
  {
    label: "Asakashi",
    value: "1",
  },
  {
    label: "Bosch",
    value: "2",
  },
  {
    label: "Hyundai",
    value: "3",
  },
];

export const YEARS = ["2021", "2020", "2019", "2018"];

export const ORIGINS = [
  {
    label: "Đức",
    value: "1",
    count: 24,
  },
  {
    label: "Nhật Bản",
    value: "2",
    count: 24,
  },
  {
    label: "Trung Quốc",
    value: "3",
    count: 24,
  },
];

export const PRICE_RANGES = [
  { label: "priceFilter.below100k", value: "below100k" },
  { label: "priceFilter.range100k300k", value: "100k-300k" },
  { label: "priceFilter.range300k500k", value: "300k-500k" },
  { label: "priceFilter.above500k", value: "above500k" },
];

export const MENU = [
  {
    label: "header.menu.about",
    url: "/#",
  },
  {
    label: "header.menu.blog",
    url: "/#",
  },
  {
    label: "header.menu.catalog",
    url: "/#",
  },
  {
    label: "header.menu.contact",
    url: "/#",
  },
];

export enum FILTERS {
  PRODUCT_TYPE = "category",
  PRICE_RANGE = "priceRange",
  BRAND = "brand",
  YEAR = "year",
  ORIGIN = "origin",
}

export const LIMIT = 10;
