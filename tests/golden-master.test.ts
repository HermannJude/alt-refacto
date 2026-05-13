import * as fs from "fs";
import * as path from "path";
import { run } from "../legacy/orderReportLegacy";

describe("Golden Master Regression Test", () => {
  it("refactored output should match legacy output", () => {
    const legacyReport = fs.readFileSync(
      path.join(__dirname, "../legacy/expected/report.txt"),
      "utf-8",
    );

    const refactoredReport = run();

    expect(refactoredReport).toBe(legacyReport);
  });
});
