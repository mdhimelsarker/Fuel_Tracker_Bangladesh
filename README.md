# Fuel Tracker Bangladesh

Fuel Tracker Bangladesh is a Next.js 16 App Router dashboard for browsing
fuel-station directory records against Bangladesh's administrative hierarchy.
It is a reference directory, not a live fuel-inventory or completeness claim.

## Run locally

```bash
npm install
npm run dev
```

Then open <http://localhost:3000>. Production checks:

```bash
npm run lint
npx tsc --noEmit
npm run build
```

## Data architecture

The project currently uses typed, imported JSON rather than a database because
the application has no server or persistence layer yet:

- `src/data/divisions.json`: 8 divisions.
- `src/data/districts.json`: 64 districts, each linked to a division ID.
- `src/data/upazilas.json`: 495 upazilas, each linked to a district ID.
- `src/lib/data.ts`: generated station records and the separate metropolitan
  thana reference list.

The UI cascades division → district → combined thana filters. The final
dropdown is labeled “All thanas” and contains both regular upazilas and
metropolitan police thanas, with the type and metropolitan area shown in each
option. A police thana remains a separate entity from an upazila in the data
model; they are only presented together for a simpler search experience.
Thanas currently cover Dhaka, Chattogram, Khulna, Rajshahi, Sylhet, Barishal,
Rangpur, and Gazipur metropolitan reference scopes. Each thana retains its own
district-scoped ID, metropolitan area, and source URL.

The header includes a dark/light theme switcher. The selected theme is stored
in the browser's local storage and restored on the next visit.

Every generated station record has a stable ID, administrative IDs, a source
marker, and verification status. Coordinates, contacts, hours, and fuel types
are intentionally empty because these are demo records, not verified business
records.

Every upazila and every metropolitan thana receives exactly five deterministic
demo records named like `Bagha Fuel Station 01`. Demo cards are labeled
`Demo record`, have no invented coordinates or fuel availability, and must not
be interpreted as real stations. The same records are used when an upazila or
thana name is entered in the search box.

## Sources and limitations

Administrative data is the
[Bangladesh Administrative Divisions dataset](https://github.com/open-admin-data/bangladesh-administrative-divisions),
licensed CC-BY-4.0. The imported snapshot contains 8 divisions, 64 districts,
and 495 upazilas with stable IDs, Bengali names, and reference coordinates.
The source README reports its snapshot date as 2026-09-08.

This release currently contains generated demo station records only; it does
not claim that they are real operating stations and does not infer fuel types,
coordinates, contacts, or live stock levels. Bangladesh Petroleum Corporation
does not provide one complete public retail-station download in the sources
reviewed for this implementation. Verified records can be imported later by
retaining their source URL and verification date.

Before upgrading a record to `verified` or `partially-verified`, confirm it
against an authoritative BPC subsidiary/dealer source or a directly verified
station source, record the verification date, and add coordinates only after
checking them. Do not scrape sources in violation of their terms.

## Refreshing data

1. Replace the three administrative JSON files from the upstream dataset.
2. Keep stable upstream IDs and parent IDs unchanged.
3. Add or update station records in `src/lib/data.ts`.
4. Preserve one source URL per record and set the appropriate verification
   status.
5. Check for duplicate IDs, duplicate source/name/address combinations, valid
   coordinates, and correct division/district/upazila relationships.
6. Run lint, TypeScript, and the production build before publishing.
