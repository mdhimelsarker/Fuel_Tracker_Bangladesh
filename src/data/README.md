# Fuel Tracker data

`divisions.json`, `districts.json`, and `upazilas.json` are the CC-BY-4.0
Bangladesh Administrative Divisions dataset:

<https://github.com/open-admin-data/bangladesh-administrative-divisions>

The snapshot contains 8 divisions, 64 districts, and 495 upazilas with stable
IDs, parent references, Bengali names, and WGS84 reference coordinates.

Fuel stations are generated in `src/lib/data.ts` until a persistent database
is introduced. Each generated station has a stable ID, administrative IDs,
source marker, and verification status. Exactly five demo records are created
for every upazila and metropolitan thana. They do not claim current inventory,
coordinates, fuel types, contacts, or operating hours.

To refresh administrative data, download the three `data/*.json` files from the
upstream repository and replace the files in this directory. For station
imports, use an authoritative BPC/subsidiary source where possible, retain the
source URL on every record, validate coordinates as latitude `-90..90` and
longitude `-180..180`, and deduplicate by the source's stable ID or a reviewed
name/address match.

Metropolitan thanas for Dhaka, Chattogram, Khulna, Rajshahi, Sylhet, Barishal,
Rangpur, and Gazipur are a separate reference list in `src/lib/data.ts`. The
application combines this list with upazilas in the final “All thanas” filter,
but the data entities remain distinct. They are police jurisdictions and are
not substitutes for upazilas. Because police boundaries and names can change,
each group keeps its official Bangladesh Police source URL and should be
rechecked before a record is treated as authoritative.
