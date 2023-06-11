export type Menu = "products" | "categories" | "clients" | "orders" | "users";

export interface ProductData {
  id: number;
  title: string;
  description: string;
  price: number;
  amount: number;
  option: string;
  image: string;
  published: boolean;
  category_id: number;
}

export interface CategoryData {
  id: number;
  title: string;
  description: string;
  published: boolean;
}

export interface OrderData {
  id: number;
  title: string;
  description: string;
  published: boolean;
}

export interface UserData {
  id: number;
  name: string;
  email: string;
  password: string;
  role: string;
}
