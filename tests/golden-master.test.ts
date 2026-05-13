import * as fs from "fs";
import * as path from "path";
import { run } from "../src/services/orderReportRefactored";

describe("Golden Master Regression Test", () => {
  it("refactored output text should exactly match legacy output text", () => {
    const legacyReport = fs
      .readFileSync(
        path.join(__dirname, "../legacy/expected/report.txt"),
        "utf-8",
      )
      .replace(/\r?\n$/, ""); // removing trailing line : report.txt may have trailing line, run() string won't.

    const refactoredReport = run();

    expect(refactoredReport).toEqual(legacyReport);
  });

  it("refactored output json should exactly match legacy output json", () => {
    const refactoredJson = JSON.parse(
      fs.readFileSync(path.join(__dirname, "../src/output.json"), "utf-8"),
    );

    const legacyJson = JSON.parse(
      fs.readFileSync(path.join(__dirname, "../legacy/output.json"), "utf-8"),
    );

    expect(refactoredJson).toEqual(legacyJson);
  });
});
