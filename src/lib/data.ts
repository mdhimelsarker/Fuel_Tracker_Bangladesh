import divisionsData from "@/data/divisions.json";
import districtsData from "@/data/districts.json";
import upazilasData from "@/data/upazilas.json";

export type VerificationStatus = "verified" | "partially-verified" | "unverified";
export type FuelType = "Petrol" | "Octane" | "Diesel" | "CNG" | "LPG";

type AdministrativeRecord = {
  id: string;
  name: { en: string; local: string; slug: string };
  parent: { id: string; name: { en: string } } | null;
  ancestors: Array<{ id: string; name: { en: string } }>;
  geo?: { lat?: string; lon?: string };
};

export type Division = AdministrativeRecord & { level: 1 };
export type District = AdministrativeRecord & { level: 2 };
export type Upazila = AdministrativeRecord & { level: 3 };

export interface Thana {
  id: string;
  name: string;
  nameBn: string;
  districtId: string;
  divisionId: string;
  metropolitanArea: string;
  scope: "metropolitan-reference";
  source: string;
}

export interface PetrolPump {
  id: string;
  name: string;
  divisionId: string;
  division: string;
  districtId: string;
  district: string;
  upazilaId?: string;
  upazila?: string;
  thanaId?: string;
  thana?: string;
  address: string;
  location: string;
  latitude?: number;
  longitude?: number;
  fuelTypes: FuelType[];
  contact?: string;
  operatingHours?: string;
  source: string;
  verificationStatus: VerificationStatus;
  lastVerified?: string;
  isOpen?: boolean;
  lastUpdated?: string;
  petrolLevel?: number;
  octaneLevel?: number;
  dieselLevel?: number;
  isDemo?: boolean;
}

export const divisions = divisionsData as Division[];
export const districts = districtsData as District[];
export const upazilas = upazilasData as Upazila[];

const metropolitanThanaGroups: Array<{
  area: string;
  districtId: string;
  divisionId: string;
  source: string;
  names: string[];
}> = [
  {
    area: "Dhaka Metropolitan Police",
    districtId: "BD3026",
    divisionId: "BD30",
    source: "https://www.police.gov.bd/en/dhaka_metropolitan_police",
    names: [
      "Adabor", "Airport", "Badda", "Banani", "Bangshal", "Bhashantek",
      "Cantonment", "Chackbazar", "Darus Salam", "Daskhinkhan", "Demra",
      "Dhanmondi", "Gandaria", "Gulshan", "Hazaribagh", "Jatrabari",
      "Kadamtali", "Kafrul", "Kalabagan", "Kamrangirchar", "Khilgaon",
      "Khilkhet", "Kotwali", "Lalbagh", "Mirpur Model", "Mohammadpur",
      "Motijheel", "Mugda", "New Market", "Pallabi", "Paltan Model",
      "Ramna Model", "Rampura", "Rupnagar", "Sabujbag", "Shah Ali",
      "Shahbag", "Sher-e-Bangla Nagar", "Shyampur", "Sutrapur",
      "Shahjahanpur", "Tejgaon", "Tejgaon Industrial Area", "Turag",
      "Uttara Model", "Uttarkhan", "Uttara West", "Vatara", "Wari",
    ],
  },
  {
    area: "Chattogram Metropolitan Police",
    districtId: "BD2015",
    divisionId: "BD20",
    source: "https://www.police.gov.bd/en/chittagong_metropolitan_police",
    names: [
      "Kotwali", "Chandgaon", "Panchlaish", "Double Mooring", "Pahartali",
      "Bandar", "Baizid Bostami", "Halishahar", "Karnafuli", "Patenga",
      "Bakalia", "Akbar Shah", "Sadarghat", "EPZ", "Chawkbazar", "Khulshi",
    ],
  },
  {
    area: "Khulna Metropolitan Police",
    districtId: "BD4047",
    divisionId: "BD40",
    source: "https://www.police.gov.bd/en/khulna_metropolitan_police",
    names: ["Khulna", "Sonadanga", "Khalishpur", "Daulatpur", "Khanjahan Ali"],
  },
  {
    area: "Rajshahi Metropolitan Police",
    districtId: "BD5081",
    divisionId: "BD50",
    source: "https://www.police.gov.bd/en/rajshahi_metropolitan_police",
    names: [
      "Boalia",
      "Rajpara",
      "Shah Makhdum",
      "Motihar",
      "Kashiadanga",
      "Chandrima",
    ],
  },
  {
    area: "Sylhet Metropolitan Police",
    districtId: "BD6091",
    divisionId: "BD60",
    source: "https://www.police.gov.bd/en/sylhet_metropolitan_police",
    names: ["Kotwali", "Jalalabad", "Shahporan", "Airport", "Moglabazar", "Dakshin Surma"],
  },
  {
    area: "Barishal Metropolitan Police",
    districtId: "BD1006",
    divisionId: "BD10",
    source: "https://www.police.gov.bd/en/barisal_metropolitan_police",
    names: ["Kotwali", "Airport", "Kawnia", "Bandar", "Rupatali", "University", "Char Monai", "Kashipur"],
  },
  {
    area: "Rangpur Metropolitan Police",
    districtId: "BD5585",
    divisionId: "BD55",
    source: "https://www.police.gov.bd/en/rangpur_metropolitan_police",
    names: ["Kotwali", "Haragachh", "Tajhat", "Mahiganj"],
  },
  {
    area: "Gazipur Metropolitan Police",
    districtId: "BD3033",
    divisionId: "BD30",
    source: "https://www.police.gov.bd/en/gazipur_metropolitan_police",
    names: ["Joydebpur", "Tongi East", "Tongi West", "Kashimpur", "Bason", "Gachha", "Konabari"],
  },
];

const thanaNamesBn: Record<string, string> = {
  Adabor: "আদাবর", Airport: "বিমানবন্দর", Badda: "বাড্ডা", Banani: "বনানী",
  Bangshal: "বংশাল", Bhashantek: "ভাসানটেক", Cantonment: "ক্যান্টনমেন্ট",
  Chackbazar: "চকবাজার", "Darus Salam": "দারুস সালাম", Daskhinkhan: "দক্ষিণখান",
  Demra: "ডেমরা", Dhanmondi: "ধানমন্ডি", Gandaria: "গেন্ডারিয়া", Gulshan: "গুলশান",
  Hazaribagh: "হাজারীবাগ", Jatrabari: "যাত্রাবাড়ী", Kadamtali: "কদমতলী",
  Kafrul: "কাফরুল", Kalabagan: "কলাবাগান", Kamrangirchar: "কামরাঙ্গীরচর",
  Khilgaon: "খিলগাঁও", Khilkhet: "খিলক্ষেত", Kotwali: "কোতোয়ালি",
  Lalbagh: "লালবাগ", "Mirpur Model": "মিরপুর মডেল", Mohammadpur: "মোহাম্মদপুর",
  Motijheel: "মতিঝিল", Mugda: "মুগদা", "New Market": "নিউ মার্কেট",
  Pallabi: "পল্লবী", "Paltan Model": "পল্টন মডেল", "Ramna Model": "রমনা মডেল",
  Rampura: "রামপুরা", Rupnagar: "রূপনগর", Sabujbag: "সবুজবাগ", "Shah Ali": "শাহ আলী",
  Shahbag: "শাহবাগ", "Sher-e-Bangla Nagar": "শেরেবাংলা নগর", Shyampur: "শ্যামপুর",
  Sutrapur: "সূত্রাপুর", Shahjahanpur: "শাহজাহানপুর", Tejgaon: "তেজগাঁও",
  "Tejgaon Industrial Area": "তেজগাঁও শিল্পাঞ্চল", Turag: "তুরাগ",
  "Uttara Model": "উত্তরা মডেল", Uttarkhan: "উত্তরখান", "Uttara West": "উত্তরা পশ্চিম",
  Vatara: "ভাটারা", Wari: "ওয়ারী", Chandgaon: "চাঁদগাঁও", Panchlaish: "পাঁচলাইশ",
  "Double Mooring": "ডবলমুরিং", Pahartali: "পাহাড়তলী", Bandar: "বন্দর",
  "Baizid Bostami": "বায়েজিদ বোস্তামী", Halishahar: "হালিশহর", Karnafuli: "কর্ণফুলী",
  Patenga: "পতেঙ্গা", Bakalia: "বাকলিয়া", "Akbar Shah": "আকবর শাহ",
  Sadarghat: "সদরঘাট", EPZ: "ইপিজেড", Chawkbazar: "চকবাজার", Khulshi: "খুলশী",
  Khulna: "খুলনা", Sonadanga: "সোনাডাঙ্গা", Khalishpur: "খালিশপুর",
  Daulatpur: "দৌলতপুর", "Khanjahan Ali": "খানজাহান আলী", Boalia: "বোয়ালিয়া",
  Rajpara: "রাজপাড়া", Motihar: "মতিহার", "Shah Makhdum": "শাহ মখদুম",
  Kashiadanga: "কাশিয়াডাঙ্গা", Chandrima: "চন্দ্রিমা",
  Jalalabad: "জালালাবাদ", Shahporan: "শাহপরান", Moglabazar: "মোগলাবাজার",
  "Dakshin Surma": "দক্ষিণ সুরমা", Kawnia: "কাউনিয়া", Rupatali: "রূপাতলী",
  University: "বিশ্ববিদ্যালয়", "Char Monai": "চর মোনাই", Kashipur: "কাশীপুর",
  Haragachh: "হারাগাছ", Tajhat: "তাজহাট", Mahiganj: "মাহিগঞ্জ",
  Joydebpur: "জয়দেবপুর", "Tongi East": "টঙ্গী পূর্ব", "Tongi West": "টঙ্গী পশ্চিম",
  Kashimpur: "কাশিমপুর", Bason: "বাসন", Gachha: "গাছা", Konabari: "কোনাবাড়ী",
};

export const thanas: Thana[] = metropolitanThanaGroups.flatMap((group) =>
  group.names.map((name) => ({
    id: `thana-${group.districtId.toLowerCase()}-${name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
    name,
    nameBn: thanaNamesBn[name] ?? name,
    districtId: group.districtId,
    divisionId: group.divisionId,
    metropolitanArea: group.area,
    scope: "metropolitan-reference" as const,
    source: group.source,
  }))
);

function createStationsForArea(areaId: string): PetrolPump[] {
  const upazila = upazilas.find((item) => item.id === areaId);
  const thana = thanas.find((item) => item.id === areaId);

  if (!upazila && !thana) return [];

  const districtId = upazila?.parent?.id ?? thana?.districtId;
  const district = districts.find((item) => item.id === districtId);
  const divisionId = thana?.divisionId ?? district?.parent?.id;
  const division = divisions.find((item) => item.id === divisionId);
  const areaName = upazila?.name.en ?? thana?.name ?? "Local";

  return Array.from({ length: 5 }, (_, index) => ({
    id: `demo-station-${areaId.toLowerCase()}-${index + 1}`,
    name: `${areaName} Fuel Station ${String(index + 1).padStart(2, "0")}`,
    divisionId: divisionId ?? "",
    division: division?.name.en ?? "",
    districtId: districtId ?? "",
    district: district?.name.en ?? "",
    ...(upazila
      ? { upazilaId: upazila.id, upazila: upazila.name.en }
      : { thanaId: thana?.id, thana: thana?.name }),
    address: `${areaName}, ${district?.name.en ?? "Bangladesh"}`,
    location: `${areaName}, ${district?.name.en ?? "Bangladesh"}`,
    fuelTypes: [] as FuelType[],
    source: "internal-demo-record",
    verificationStatus: "unverified" as const,
    isDemo: true,
  }));
}

const areaIds = [
  ...upazilas.map((upazila) => upazila.id),
  ...thanas.map((thana) => thana.id),
];

export const petrolPumps: PetrolPump[] = areaIds.flatMap(createStationsForArea);

export function getStationsForArea(areaId: string): PetrolPump[] {
  return petrolPumps.filter(
    (station) => station.upazilaId === areaId || station.thanaId === areaId
  );
}

export function validateStationData(stations: PetrolPump[]): string[] {
  const errors: string[] = [];
  const ids = new Set<string>();
  const divisionIds = new Set(divisions.map((division) => division.id));
  const districtIds = new Set(districts.map((district) => district.id));
  const upazilaIds = new Set(upazilas.map((upazila) => upazila.id));
  const thanaIds = new Set(thanas.map((thana) => thana.id));

  for (const station of stations) {
    if (ids.has(station.id)) errors.push(`Duplicate station ID: ${station.id}`);
    ids.add(station.id);
    if (!station.name.trim() || !station.address.trim() || !station.source.trim()) {
      errors.push(`Missing required station field: ${station.id}`);
    }
    if (!divisionIds.has(station.divisionId) || !districtIds.has(station.districtId)) {
      errors.push(`Invalid administrative parent: ${station.id}`);
    }
    if (station.upazilaId && !upazilaIds.has(station.upazilaId)) {
      errors.push(`Invalid upazila parent: ${station.id}`);
    }
    if (station.thanaId && !thanaIds.has(station.thanaId)) {
      errors.push(`Invalid thana parent: ${station.id}`);
    }
    if (
      station.latitude !== undefined &&
      station.longitude !== undefined &&
      (station.latitude < -90 ||
        station.latitude > 90 ||
        station.longitude < -180 ||
        station.longitude > 180)
    ) {
      errors.push(`Invalid coordinates: ${station.id}`);
    }
  }
  return errors;
}

export function getFuelStatus(level: number) {
  if (level >= 60) return "available";
  if (level >= 30) return "limited";
  if (level > 0) return "critical";
  return "empty";
}

export function getStatusColor(status: "available" | "limited" | "critical" | "empty") {
  switch (status) {
    case "available": return "#00e676";
    case "limited": return "#ffab00";
    case "critical": return "#ff1744";
    case "empty": return "#616161";
  }
}

export function getStats(stations: PetrolPump[]) {
  return {
    totalPumps: stations.length,
    openPumps: null,
    avgPetrol: 0,
    avgOctane: 0,
    avgDiesel: 0,
    criticalPumps: 0,
  };
}

export function getDistricts(stations: PetrolPump[]): string[] {
  return [...new Set(stations.map((station) => station.district))].sort();
}
