import { ChargePoint } from '@/models';

export function initializeChargePoints(num: number): ChargePoint[] {
  return Array(num)
    .fill({})
    .map(() => ({
      isOccupied: false,
      chargingPower: 0,
      remainingTime: 0,
    }));
}
