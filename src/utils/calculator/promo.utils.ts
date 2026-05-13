import { Promotion } from "../../types/types";

export function getPromoValues(promo: Promotion): {
  discountRate: number;
  fixedDiscount: number;
} {
  if (!promo.active) return { discountRate: 0, fixedDiscount: 0 };

  if (promo.type === "PERCENTAGE") {
    return {
      discountRate: parseFloat(promo.value) / 100,
      fixedDiscount: 0,
    };
  }

  if (promo.type === "FIXED") {
    return {
      discountRate: 0,
      fixedDiscount: parseFloat(promo.value),
    };
  }

  return { discountRate: 0, fixedDiscount: 0 };
}
