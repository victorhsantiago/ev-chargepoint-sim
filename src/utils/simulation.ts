import { SimulationResult } from '@/models';
import { initializeChargePoints } from './chargePoint';
import {
  BASE_PROBABILITY_DISTRIBUTION,
  TOTAL_INTERVALS,
  INTERVALS_PER_DAY,
  CHARGING_NEEDS_DISTRIBUTION,
} from './constants';
import { mulberry32 } from './random';

export function runSimulation(
  seed: number,
  numChargepoints: number,
  arrivalMultiplier: number,
  consumption: number,
  chargingPower: number
): SimulationResult {
  const seededRandom = mulberry32(seed);
  const chargepoints = initializeChargePoints(numChargepoints);
  const dailyData: SimulationResult['dailyData'] = [];
  const arrivalProbabilityDistribution = BASE_PROBABILITY_DISTRIBUTION.map(
    (prob) => prob * (arrivalMultiplier / 100)
  );

  let totalEnergyConsumed = 0;
  let maxActualDemand = 0;

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
          arrivalProbabilityDistribution[t % INTERVALS_PER_DAY];
        if (seededRandom() < arrivalChance) {
          const [intervalsNeeded, energyNeeded] = getChargingDurationAndPower(
            seededRandom,
            consumption,
            chargingPower
          );

          if (intervalsNeeded > 0) {
            chargepoint.isOccupied = true;
            chargepoint.remainingTime = intervalsNeeded;
            chargepoint.chargingPower = chargingPower;

            totalEnergyConsumed += energyNeeded;
            currentPowerDemand += chargepoint.chargingPower;
          }
        }
      }
    }

    maxActualDemand = Math.max(maxActualDemand, currentPowerDemand);
    if (t < INTERVALS_PER_DAY)
      dailyData[t] = { interval: t, power: currentPowerDemand };
  }

  const theoreticalMaxDemand = numChargepoints * chargingPower;
  const concurrencyFactor = maxActualDemand / theoreticalMaxDemand;

  return {
    totalEnergyConsumed,
    theoreticalMaxDemand,
    maxActualDemand,
    concurrencyFactor,
    dailyData,
  };
}

function getChargingDurationAndPower(
  random: () => number,
  consumption: number,
  chargingPower: number
): [number, number] {
  const rand = random();
  let energyNeeded = 0;
  let cumulativeProb = 0;

  for (let i = 0; i < CHARGING_NEEDS_DISTRIBUTION.length; i++) {
    cumulativeProb += CHARGING_NEEDS_DISTRIBUTION[i].prob;
    if (rand <= cumulativeProb) {
      const kmNeeded = CHARGING_NEEDS_DISTRIBUTION[i].km;
      energyNeeded = (kmNeeded / 100) * consumption;
      break;
    }
  }

  if (energyNeeded === 0) {
    return [0, 0];
  }

  const chargingDuration = (energyNeeded / chargingPower) * 60;
  const intervalsNeeded = Math.ceil(chargingDuration / 15);

  return [intervalsNeeded, energyNeeded];
}
