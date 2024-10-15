import { SimulationResult } from '@/models';
import { initializeChargePoints } from './chargePoint';
import {
  ARRIVAL_PROBABILITY_DISTRIBUTION,
  TOTAL_INTERVALS,
  INTERVALS_PER_DAY,
  ENERGY_PER_100KM,
  MAX_POWER_PER_CHARGEPOINT,
  CHARGING_NEEDS_DISTRIBUTION,
} from './constants';
import { mulberry32 } from './random';

export function runSimulation(
  seed: number,
  numChargepoints: number
): SimulationResult {
  const seededRandom = mulberry32(seed);
  const chargepoints = initializeChargePoints(numChargepoints);

  let totalEnergyConsumed = 0;
  let maxActualDemand = 0;
  const powerDemand: number[] = Array(TOTAL_INTERVALS).fill(0);

  for (let t = 0; t < TOTAL_INTERVALS; t++) {
    let currentPowerDemand = 0;

    for (let i = 0; i < numChargepoints; i++) {
      const chargepoint = chargepoints[i];

      if (chargepoint.isOccupied) {
        chargepoint.remainingTime -= 1;
        currentPowerDemand += chargepoint.chargingPower;

        if (chargepoint.remainingTime === 0) {
          chargepoint.isOccupied = false;
          chargepoint.chargingPower = 0;
        }
      } else {
        const arrivalChance =
          ARRIVAL_PROBABILITY_DISTRIBUTION[t % INTERVALS_PER_DAY];
        if (seededRandom() < arrivalChance) {
          const [intervalsNeeded, energyNeeded] =
            getChargingDurationAndPower(seededRandom);

          if (intervalsNeeded > 0) {
            chargepoint.isOccupied = true;
            chargepoint.remainingTime = intervalsNeeded;
            chargepoint.chargingPower = MAX_POWER_PER_CHARGEPOINT;

            totalEnergyConsumed += energyNeeded;
            currentPowerDemand += chargepoint.chargingPower;
          }
        }
      }
    }

    maxActualDemand = Math.max(maxActualDemand, currentPowerDemand);
    powerDemand[t] = currentPowerDemand;
  }

  const theoreticalMaxDemand = numChargepoints * MAX_POWER_PER_CHARGEPOINT;
  const concurrencyFactor = maxActualDemand / theoreticalMaxDemand;

  return {
    totalEnergyConsumed,
    theoreticalMaxDemand,
    maxActualDemand,
    concurrencyFactor,
  };
}

function getChargingDurationAndPower(random: () => number): [number, number] {
  const rand = random();
  let energyNeeded = 0;
  let cumulativeProb = 0;

  for (let i = 0; i < CHARGING_NEEDS_DISTRIBUTION.length; i++) {
    cumulativeProb += CHARGING_NEEDS_DISTRIBUTION[i].prob;
    if (rand <= cumulativeProb) {
      const kmNeeded = CHARGING_NEEDS_DISTRIBUTION[i].km;
      energyNeeded = (kmNeeded / 100) * ENERGY_PER_100KM;
      break;
    }
  }

  if (energyNeeded === 0) {
    return [0, 0];
  }

  const chargingDuration = (energyNeeded / MAX_POWER_PER_CHARGEPOINT) * 60;
  const intervalsNeeded = Math.ceil(chargingDuration / 15);

  return [intervalsNeeded, energyNeeded];
}
