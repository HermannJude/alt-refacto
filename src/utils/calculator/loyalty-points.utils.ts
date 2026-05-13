import { LOYALTY_RATIO } from "../../config/constants";
import { Order } from "../../types/types";

export function calculateLoyaltyPoints(
  order: Order,
  loyaltyPoints: Record<string, number>,
) {
  const customerId = order.customerId;
  if (!loyaltyPoints[customerId]) {
    loyaltyPoints[customerId] = 0;
  }

  loyaltyPoints[customerId] += order.quantity * order.unitPrice * LOYALTY_RATIO;
}
