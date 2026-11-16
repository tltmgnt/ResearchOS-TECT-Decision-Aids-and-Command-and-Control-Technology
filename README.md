# ResearchOS TECT — Decision Aids and Command-and-Control Technology

Independent research workspace for reproducible scenario comparison, information-quality assessment, and human review. The included Decision Studio app uses a synthetic municipal service-desk coordination exercise.

## Browser app

Download [the ready-built app](app/index.html) using GitHub’s **Download raw file** control and open the saved HTML file. Or run `npm run build` with Node.js 22 or newer, then open `dist/index.html`. No install, server, network connection or API key is required. GitHub Actions also publishes the standalone app as the **decision-studio-node-22** artifact on each successful check: download and unzip it, then open index.html.

The app supports editable preference weights and alternative intervals, missing-input handling, information-age and evidence flags, sensitivity rank ranges, review rationale, JSON import/export, CSV and Markdown reports, and browser-local study storage. Use the advanced JSON editor to add criteria, alternatives and information sources. Apply JSON before evaluating.

## Reproducible CLI

```sh
npm test
npm run build
node cli/main.mjs validate examples/coordination-tabletop.json
npm run demo
node cli/main.mjs verify runs/demo
node cli/main.mjs report examples/coordination-tabletop.json
node cli/main.mjs hash path/to/evidence-file
```

A run creates record.json, results.json, scores.csv, report.md, captured evidence files and a SHA-256 manifest. Existing output directories are refused. Verification checks digests and recomputes derived outputs. Evidence paths are relative to the input record, must remain within its directory and must match declared hashes. Browser exports do not capture or verify evidence file contents.

## Research boundaries

Scores reflect owner-defined scales, weights and intervals. They are not validated utility, probabilities, operational effectiveness or recommendations. Information-quality flags remain separate from scores. Missing measurements remain unscored. Reviews are owner-recorded, not authenticated. Hashes detect changes relative to a manifest; they do not establish source authenticity or scientific validity.

This implementation has no live command, dispatch, external messaging, targeting or automated action connection. It is an independent research prototype with no claimed DARPA endorsement or demonstrated research novelty.

See [model and record contract](docs/MODEL.md) and [evaluation plan](docs/RESEARCH_PLAN.md). Automated checks cover mathematics, validation, CLI round trips, tampering and standalone build syntax. Interactive browser and accessibility testing must be completed before relying on the interface.

Apache-2.0 licensed. Original repository license retained.
