export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice: number;
  image: string;
  brand: string;
  category: string;
  origin: string;
}

export interface FilterState {
  categories: string[];
  brands: string[];
  years: string[];
  priceRange: [number, number];
}

export interface BreadcrumbItem {
  name: string;
  href: string;
  isLastChild?: boolean;
}
