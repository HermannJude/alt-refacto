export type Zone = "ZONE1" | "ZONE2" | "ZONE3" | "ZONE4";
export type CustomerLevel = "BASIC" | "PREMIUM";
export type Currency = "EUR" | "USD" | "GBP";
export type PromotionType = "PERCENTAGE" | "FIXED";

export interface Customer {
  id: string;
  name: string;
  level: CustomerLevel;
  shippingZone: Zone;
  currency: Currency;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  weight: number;
  taxable: boolean;
}
export interface ShippingZone {
  zone: Zone;
  base: number;
  perKg: number;
}

export interface Promotion {
  code: string;
  type: PromotionType;
  value: string;
  active: boolean;
}

export interface Order {
  id: string;
  customerId: string;
  productId: string;
  quantity: number;
  unitPrice: number;
  date: string;
  promoCode?: string;
  time: string | "12:00";
}
