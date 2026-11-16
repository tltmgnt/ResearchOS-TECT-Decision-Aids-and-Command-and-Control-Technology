# Model and record contract

Version 1 records declare an ID, title, owner, context, hypothesis, protocol_reference, differentiation, data_kind, as_of_utc, criteria, information, alternatives, evidence, sensitivity_factors and review. The complete runnable schema example is examples/coordination-tabletop.json. UTC timestamps use YYYY-MM-DDTHH:mm:ssZ.

Each criterion has fixed min/max bounds, direction benefit or cost, and a nonnegative weight. Total weight must be positive. An alternative supplies a low/high interval within each criterion scale, or null for missing data. A missing value makes that alternative unscored even when its criterion weight is zero.

For benefits, normalize [low,high] to [(low-min)/(max-min),(high-min)/(max-min)]. For costs use [(max-high)/(max-min),(max-low)/(max-min)]. Normalize weights by their sum and add weighted interval endpoints. Midpoints determine competition ranks; ties within 1e-12 share a rank.

Sensitivity multiplies one weight at a time by each declared positive factor and renormalizes. Rank ranges cover only these variations. Input intervals are arithmetic bounds; no joint distribution or statistical coverage is assumed. Nonoverlapping intervals are scalar comparisons under the declared model, not evidence of real-world superiority.

Information flags identify future timestamps, ages exceeding the declared maximum, confidence below the declared threshold, absent corroboration, and missing evidence references. Confidence is self-declared. Observational records require evidence references. Synthetic records deliberately permit absent evidence and show the flags.

Evidence entries have unique IDs and relative paths, descriptions and lowercase SHA-256 digests. Evidence provenance, ownership and accuracy require independent review. The CLI captures exact evidence bytes and rejects path escapes; the browser validates only reference metadata.

Review disposition is pending, acknowledged, or needs-more-evidence. Nonpending reviews require a reviewer and rationale. This records assertions, not identity authentication or approval authority.

The runner uses deterministic floating-point arithmetic and a fixed record reference time; it does not consult the clock. JSON parsing uses standard JavaScript semantics, including last-value handling of duplicate object keys. Import untrusted records only after inspecting their content.
