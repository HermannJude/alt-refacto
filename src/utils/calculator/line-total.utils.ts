export function calculateLineTotal(params: {
  quantity: number;
  basePrice: number;
  discountRate: number;
  fixedDiscount: number;
}): number {
  const { quantity, basePrice, discountRate, fixedDiscount } = params;

  return quantity * basePrice * (1 - discountRate) - fixedDiscount * quantity;
}
