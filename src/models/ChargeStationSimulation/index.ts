export type ChargePoint = {
  isOccupied: boolean;
  chargingPower: number;
  remainingTime: number;
};

export type SimulationResult = {
  totalEnergyConsumed: number;
  theoreticalMaxDemand: number;
  maxActualDemand: number;
  concurrencyFactor: number;
  dailyData: { time: string; power: number }[];
};
