export type Input = {
  arrivalProbability: number;
  carConsumption: number;
  chargePoints: number;
  chargingPower: number;
};

export type Output = Input & {
  totalEnergyCharged: number
  chargingEvents: number
}
