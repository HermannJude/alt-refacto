export function calculateMorningBonus(lineTotal: number, hour: number): number {
  return hour < 10 ? lineTotal * 0.03 : 0;
}
