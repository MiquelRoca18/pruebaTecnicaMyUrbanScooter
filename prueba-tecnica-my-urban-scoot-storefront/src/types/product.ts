export interface Product {
  id: string;
  title: string;
  description: string;
  handle: string;
  status: string;
  thumbnail: string;
  images: {
    url: string;
  }[];
  options: {
    title: string;
    values: string[];
  }[];
  variants: {
    id: string;
    title: string;
    sku: string;
    prices: {
      amount: number;
      currency_code: string;
    }[];
    options: {
      [key: string]: string;
    };
  }[];
  created_at: string;
  updated_at: string;
} 