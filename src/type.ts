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
  cart_id: number;
  buyer_id: number;
  total_value: number;
  cart: string[];
  created_at: string;
  buyer: string;
}

export interface UserData {
  id: number;
  name: string;
  email: string;
  password: string;
  role: string;
}
