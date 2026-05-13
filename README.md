# Order Report Refactoring

Legacy order report refactored into smaller modules.

## What Is Done

- Legacy behavior preserved in `legacy/`
- Structured refactor in `src/`
  - Types in `src/types/`
  - Constants in `src/config/`
  - CSV parsing in `src/utils/parser.utils.ts`
  - Calculators in `src/utils/calculator/`
- Regression test added in `tests/golden-master.test.ts`
- Node and Jest typings enabled in `tsconfig.json`.

## What The Test Checks

    The test compares:

    - report text produced by `run()`
    - JSON output produced by refactored code
    - legacy reference files in `legacy/expected/report.txt` and `legacy/output.json`

## Run Tests With Docker

This repository already includes a `Dockerfile` and `compose.yml`.

The Docker build uses the `test` stage from `Dockerfile`, which:

- installs dependencies with `pnpm`
- generates legacy and refactored outputs with `pnpm output:legacy` and `pnpm output:refactored`
- finally runs `pnpm test`

### Docker Compose

```bash
docker compose up
```

## Project Files

- `legacy/` contains original code and CSV data.
- `src/` contains refactored TypeScript code.
- `tests/` contains regression tests.
- `data/` contains input CSV files used by the refactored service.

## Notes

- `legacy/` should stay untouched.
- Generated report files should not be committed.
- `output.json` is produced by refactored execution and is used by regression checks.
