import { CustomerTotals, Order, Product } from "../../types/types";

export function createCustomerTotals(): CustomerTotals {
  return {
    subtotal: 0.0,
    items: [],
    weight: 0.0,
    promoDiscount: 0.0,
    morningBonus: 0.0,
  };
}

export function addOrderToCustomerTotals(params: {
  totals: CustomerTotals;
  order: Order;
  product: Product | undefined;
  lineTotal: number;
  morningBonus: number;
}): CustomerTotals {
  const { totals, order, product, lineTotal, morningBonus } = params;

  totals.subtotal += lineTotal;
  totals.weight += (product?.weight || 1.0) * order.quantity;
  totals.items.push(order);
  totals.morningBonus += morningBonus;

  return totals;
}
