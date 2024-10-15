export const NUM_CHARGEPOINTS = 20;
export const MAX_POWER_PER_CHARGEPOINT = 11; // kW
export const INTERVALS_PER_DAY = 96; // 24 hours * 4 (15-minute intervals)
export const DAYS_PER_YEAR = 365;
export const TOTAL_INTERVALS = INTERVALS_PER_DAY * DAYS_PER_YEAR;
export const ENERGY_PER_100KM = 18; // kWh

// prettier-ignore
export const ARRIVAL_PROBABILITY_DISTRIBUTION: number[] = [
  0.0094, 0.0094, 0.0094, 0.0094, // 00:00 - 01:00
  0.0094, 0.0094, 0.0094, 0.0094, // 01:00 - 02:00
  0.0094, 0.0094, 0.0094, 0.0094, // 02:00 - 03:00
  0.0094, 0.0094, 0.0094, 0.0094, // 03:00 - 04:00
  0.0094, 0.0094, 0.0094, 0.0094, // 04:00 - 05:00
  0.0094, 0.0094, 0.0094, 0.0094, // 05:00 - 06:00
  0.0094, 0.0094, 0.0094, 0.0094, // 06:00 - 07:00
  0.0094, 0.0094, 0.0094, 0.0094, // 07:00 - 08:00
  0.0283, 0.0283, 0.0283, 0.0283, // 08:00 - 09:00
  0.0283, 0.0283, 0.0283, 0.0283, // 09:00 - 10:00
  0.0566, 0.0566, 0.0566, 0.0566, // 10:00 - 11:00
  0.0566, 0.0566, 0.0566, 0.0566, // 11:00 - 12:00
  0.0566, 0.0566, 0.0566, 0.0566, // 12:00 - 13:00
  0.0755, 0.0755, 0.0755, 0.0755, // 13:00 - 14:00
  0.0755, 0.0755, 0.0755, 0.0755, // 14:00 - 15:00
  0.0755, 0.0755, 0.0755, 0.0755, // 15:00 - 16:00
  0.1038, 0.1038, 0.1038, 0.1038, // 16:00 - 17:00
  0.1038, 0.1038, 0.1038, 0.1038, // 17:00 - 18:00
  0.1038, 0.1038, 0.1038, 0.1038, // 18:00 - 19:00
  0.0472, 0.0472, 0.0472, 0.0472, // 19:00 - 20:00
  0.0472, 0.0472, 0.0472, 0.0472, // 20:00 - 21:00
  0.0472, 0.0472, 0.0472, 0.0472, // 21:00 - 22:00
  0.0094, 0.0094, 0.0094, 0.0094, // 22:00 - 23:00
  0.0094, 0.0094, 0.0094, 0.0094  // 23:00 - 00:00
];

export const CHARGING_NEEDS_DISTRIBUTION = [
  { prob: 0.3431, km: 0 },
  { prob: 0.049, km: 5 },
  { prob: 0.098, km: 10 },
  { prob: 0.1176, km: 20 },
  { prob: 0.0882, km: 30 },
  { prob: 0.1176, km: 50 },
  { prob: 0.1078, km: 100 },
  { prob: 0.049, km: 200 },
  { prob: 0.0294, km: 300 },
];
