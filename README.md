# LAURA DMS hierarchy dashboard

Private Lark Base Dashboard Extension. Code-only repository; no business records, credentials or API tokens.

Build: npm install followed by npm run build. Output: dist. Requires Node 16+.

The chart groups at the lowest explicitly selected level: Region, Business province, Route, Team, Salesperson. Filters are held separately in each viewer session. All table access is read-only through the official Lark Base SDK and the viewer permissions. The extension configuration alone is saved in the dashboard.

Source table required: 01 | Doanh số ngày - vùng tỉnh sale. No external data endpoints. No analytics or localStorage. CSP blocks direct network connections. Synthetic demo data is included solely for QA and is labelled as demonstration data.

The bundled application includes @lark-base-open/js-sdk 1.0.2 (ISC). Third-party license notices are retained in the bundle.

Repository access is private; no reviewer collaborator has been invited. This repository is not a published deployment.
