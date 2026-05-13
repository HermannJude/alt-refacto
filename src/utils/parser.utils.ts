export function parseCsvRows<T>(
  data: string,
  mapRow: (parts: string[], lineNumber: number) => T,
): T[] {
  return data
    .split("\n")
    .filter((line) => line.trim())
    .slice(1)
    .map((line, index) => mapRow(line.split(","), index + 2));
}
