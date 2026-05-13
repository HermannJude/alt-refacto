export function throwParseError(
  entity: string,
  lineNumber: number,
  parts: string[],
): never {
  throw new Error(
    `Error parsing ${entity} line ${lineNumber}: ${parts.join(",")}`,
  );
}
