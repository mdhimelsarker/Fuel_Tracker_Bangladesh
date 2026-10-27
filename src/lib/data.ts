export type FuelStatus = "available" | "limited" | "critical" | "empty";

export interface PetrolPump {
  id: string;
  name: string;
  location: string;
  district: string;
  petrolLevel: number; // 0-100 percentage
  octaneLevel: number; // 0-100 percentage
  dieselLevel: number; // 0-100 percentage
  lastUpdated: string; // ISO timestamp
  isOpen: boolean;
  latitude: number;
  longitude: number;
  contact: string;
}

export function getFuelStatus(level: number): FuelStatus {
  if (level >= 60) return "available";
  if (level >= 30) return "limited";
  if (level > 0) return "critical";
  return "empty";
}

export function getStatusColor(status: FuelStatus): string {
  switch (status) {
    case "available":
      return "#00e676";
    case "limited":
      return "#ffab00";
    case "critical":
      return "#ff1744";
    case "empty":
      return "#616161";
  }
}

export function getStatusLabel(status: FuelStatus): string {
  switch (status) {
    case "available":
      return "Available";
    case "limited":
      return "Limited";
    case "critical":
      return "Critical";
    case "empty":
      return "Out of Stock";
  }
}

// Simulated live data for petrol pumps across Bangladesh
export const petrolPumps: PetrolPump[] = [
  {
    id: "pump-001",
    name: "Padma Fuel Station",
    location: "Mirpur-10, Dhaka",
    district: "Dhaka",
    petrolLevel: 72,
    octaneLevel: 45,
    dieselLevel: 88,
    lastUpdated: "2026-03-24T22:30:00+06:00",
    isOpen: true,
    latitude: 23.8069,
    longitude: 90.3687,
    contact: "01711-XXXXXX",
  },
  {
    id: "pump-002",
    name: "Meghna Petroleum",
    location: "Gulshan-2, Dhaka",
    district: "Dhaka",
    petrolLevel: 15,
    octaneLevel: 8,
    dieselLevel: 42,
    lastUpdated: "2026-03-24T22:15:00+06:00",
    isOpen: true,
    latitude: 23.7934,
    longitude: 90.4145,
    contact: "01812-XXXXXX",
  },
  {
    id: "pump-003",
    name: "Jamuna Auto Fuel",
    location: "Dhanmondi-27, Dhaka",
    district: "Dhaka",
    petrolLevel: 0,
    octaneLevel: 0,
    dieselLevel: 22,
    lastUpdated: "2026-03-24T21:45:00+06:00",
    isOpen: false,
    latitude: 23.7465,
    longitude: 90.3756,
    contact: "01911-XXXXXX",
  },
  {
    id: "pump-004",
    name: "Natore City Filling Station",
    location: "Station Road, Natore",
    district: "Natore",
    petrolLevel: 55,
    octaneLevel: 30,
    dieselLevel: 65,
    lastUpdated: "2026-03-24T22:00:00+06:00",
    isOpen: true,
    latitude: 24.4102,
    longitude: 88.9326,
    contact: "01611-XXXXXX",
  },
  {
    id: "pump-005",
    name: "Rajshahi Central Petroleum",
    location: "Shaheb Bazaar, Rajshahi",
    district: "Rajshahi",
    petrolLevel: 38,
    octaneLevel: 12,
    dieselLevel: 50,
    lastUpdated: "2026-03-24T22:10:00+06:00",
    isOpen: true,
    latitude: 24.3745,
    longitude: 88.6042,
    contact: "01511-XXXXXX",
  },
  {
    id: "pump-006",
    name: "Chittagong Port Fuel Depot",
    location: "Agrabad, Chittagong",
    district: "Chittagong",
    petrolLevel: 82,
    octaneLevel: 60,
    dieselLevel: 91,
    lastUpdated: "2026-03-24T22:25:00+06:00",
    isOpen: true,
    latitude: 22.3264,
    longitude: 91.8039,
    contact: "01311-XXXXXX",
  },
  {
    id: "pump-007",
    name: "Sylhet Green Fuel",
    location: "Zindabazar, Sylhet",
    district: "Sylhet",
    petrolLevel: 5,
    octaneLevel: 0,
    dieselLevel: 18,
    lastUpdated: "2026-03-24T21:55:00+06:00",
    isOpen: true,
    latitude: 24.8949,
    longitude: 91.8687,
    contact: "01411-XXXXXX",
  },
  {
    id: "pump-008",
    name: "Khulna Industrial Fuel",
    location: "Boyra, Khulna",
    district: "Khulna",
    petrolLevel: 48,
    octaneLevel: 25,
    dieselLevel: 60,
    lastUpdated: "2026-03-24T22:05:00+06:00",
    isOpen: true,
    latitude: 22.8456,
    longitude: 89.5403,
    contact: "01711-YYYYYY",
  },
  {
    id: "pump-009",
    name: "Comilla Junction Petroleum",
    location: "Kandirpar, Comilla",
    district: "Comilla",
    petrolLevel: 28,
    octaneLevel: 18,
    dieselLevel: 35,
    lastUpdated: "2026-03-24T22:20:00+06:00",
    isOpen: true,
    latitude: 23.4607,
    longitude: 91.1809,
    contact: "01812-YYYYYY",
  },
  {
    id: "pump-010",
    name: "Bogra Express Fuel",
    location: "Satmatha, Bogra",
    district: "Bogra",
    petrolLevel: 0,
    octaneLevel: 3,
    dieselLevel: 10,
    lastUpdated: "2026-03-24T21:30:00+06:00",
    isOpen: false,
    latitude: 24.8465,
    longitude: 89.3773,
    contact: "01911-YYYYYY",
  },
  {
    id: "pump-011",
    name: "Natore Bypass Fuel Point",
    location: "Dhaka-Rajshahi Highway, Natore",
    district: "Natore",
    petrolLevel: 35,
    octaneLevel: 20,
    dieselLevel: 45,
    lastUpdated: "2026-03-24T22:12:00+06:00",
    isOpen: true,
    latitude: 24.4200,
    longitude: 88.9450,
    contact: "01611-ZZZZZZ",
  },
  {
    id: "pump-012",
    name: "Barishal River Port Petroleum",
    location: "Sadar Road, Barishal",
    district: "Barishal",
    petrolLevel: 62,
    octaneLevel: 40,
    dieselLevel: 75,
    lastUpdated: "2026-03-24T22:18:00+06:00",
    isOpen: true,
    latitude: 22.701,
    longitude: 90.3535,
    contact: "01511-ZZZZZZ",
  },
];

// Aggregate statistics
export function getStats(pumps: PetrolPump[]) {
  const totalPumps = pumps.length;
  const openPumps = pumps.filter((p) => p.isOpen).length;
  const avgPetrol = Math.round(
    pumps.reduce((s, p) => s + p.petrolLevel, 0) / totalPumps
  );
  const avgOctane = Math.round(
    pumps.reduce((s, p) => s + p.octaneLevel, 0) / totalPumps
  );
  const avgDiesel = Math.round(
    pumps.reduce((s, p) => s + p.dieselLevel, 0) / totalPumps
  );
  const criticalPumps = pumps.filter(
    (p) =>
      getFuelStatus(p.petrolLevel) === "critical" ||
      getFuelStatus(p.petrolLevel) === "empty"
  ).length;

  return { totalPumps, openPumps, avgPetrol, avgOctane, avgDiesel, criticalPumps };
}

// Get unique districts
export function getDistricts(pumps: PetrolPump[]): string[] {
  return [...new Set(pumps.map((p) => p.district))].sort();
}
