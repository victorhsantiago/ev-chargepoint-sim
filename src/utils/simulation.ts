import { ChargePoint, SimulationResult } from '@/models';
import { initializeChargePoints } from './chargePoint';
import {
  BASE_PROBABILITY_DISTRIBUTION,
  TOTAL_INTERVALS,
  INTERVALS_PER_DAY,
  CHARGING_NEEDS_DISTRIBUTION,
} from './constants';
import { mulberry32 } from './random';

interface SimulationOptions {
  seed: number;
  numChargepoints: number;
  arrivalProbabilityMultiplier: number;
  consumption: number;
  chargingPower: number;
}

/**
 * Run a simulation with the given parameters
 * @param seed - Seed for the random number generator
 * @param numChargepoints - Number of chargepoints in the simulation
 * @param arrivalProbabilityMultiplier - Multiplier for the arrival probability
 * @param consumption - Energy consumption of the cars in kWh per 100 km
 * @param chargingPower - Charging power of the chargepoints in kW
 * @returns Promise with the simulation result
 */
export async function runSimulation({
  seed,
  numChargepoints,
  arrivalProbabilityMultiplier,
  consumption,
  chargingPower,
}: SimulationOptions): Promise<SimulationResult> {
  const seededRandom = mulberry32(seed);
  const chargepoints = initializeChargePoints(numChargepoints);
  const powerDemandPerInterval: number[] = [];
  const arrivalProbabilityDistribution = BASE_PROBABILITY_DISTRIBUTION.map(
    (prob) => prob * (arrivalProbabilityMultiplier / 100)
  );

  let totalEnergyConsumed = 0;
  let maxActualDemand = 0;

  for (let t = 0; t < TOTAL_INTERVALS; t++) {
    let currentPowerDemand = 0;

    if (t % 1000 === 0) {
      // yeild the thread to the event loop every 1000 iterations
      // to prevent the browser from freezing
      await new Promise(requestAnimationFrame);
    }

    for (let i = 0; i < numChargepoints; i++) {
      const chargepoint = chargepoints[i];

      if (chargepoint.isOccupied) {
        updateChargePoint(chargepoint);

        currentPowerDemand += chargepoint.chargingPower;
      } else {
        handleNewArrival({
          t,
          chargepoint,
          consumption,
          chargingPower,
          arrivalProbabilityDistribution,
          seededRandom,
        });
      }
    }

    totalEnergyConsumed += currentPowerDemand;
    maxActualDemand = Math.max(maxActualDemand, currentPowerDemand);
    powerDemandPerInterval.push(currentPowerDemand);
  }

  const theoreticalMaxDemand = numChargepoints * chargingPower;
  const concurrencyFactor = maxActualDemand / theoreticalMaxDemand;

  const dailyDataExemplary = getExemplaryDayData(powerDemandPerInterval);
  const dailyData = aggregateHourly(dailyDataExemplary);

  return {
    totalEnergyConsumed,
    theoreticalMaxDemand,
    maxActualDemand,
    concurrencyFactor,
    dailyData,
  };
}

function updateChargePoint(chargepoint: ChargePoint): void {
  chargepoint.remainingTime -= 1;

  if (chargepoint.remainingTime === 0) {
    chargepoint.isOccupied = false;
    chargepoint.chargingPower = 0;
  }
}

interface HandleNewArrivalOptions {
  t: number;
  chargepoint: ChargePoint;
  consumption: number;
  chargingPower: number;
  arrivalProbabilityDistribution: number[];
  seededRandom: () => number;
}

function handleNewArrival({
  t,
  chargepoint,
  consumption,
  chargingPower,
  arrivalProbabilityDistribution,
  seededRandom,
}: HandleNewArrivalOptions) {
  const arrivalChance = arrivalProbabilityDistribution[t % INTERVALS_PER_DAY];
  if (seededRandom() < arrivalChance) {
    const intervalsNeeded = getChargingDuration(
      seededRandom,
      consumption,
      chargingPower
    );

    if (intervalsNeeded > 0) {
      chargepoint.isOccupied = true;
      chargepoint.remainingTime = intervalsNeeded;
      chargepoint.chargingPower = chargingPower;
    }
  }
}

/**
 * Get the charging duration and power for a car
 * @param random - Random number generator function
 * @param consumption - Energy consumption of the cars in kWh per 100 km
 * @param chargingPower - Charging power of the chargepoints in kW
 * @returns Tuple with the charging duration and power
 */
function getChargingDuration(
  random: () => number,
  consumption: number,
  chargingPower: number
): number {
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
    return 0;
  }

  const chargingDuration = (energyNeeded / chargingPower) * 60;
  const intervalsNeeded = Math.ceil(chargingDuration / 15);

  return intervalsNeeded;
}

/**
 * Get the exemplary day data for a given day index
 * @param powerDemandPerInterval - Array with the power demand per interval
 * @param dayIndex - Index of the day to get the data for
 * @returns Array with the exemplary day data
 */
function getExemplaryDayData(powerDemandPerInterval: number[], dayIndex = 42) {
  const startIndex = dayIndex * INTERVALS_PER_DAY;
  const endIndex = startIndex + INTERVALS_PER_DAY;

  return powerDemandPerInterval.slice(startIndex, endIndex);
}

/**
 * Aggregate the exemplary day data to hourly data
 * @param dailySlice - Array with the exemplary day data
 * @returns Array with the hourly data
 */
function aggregateHourly(dailySlice: number[]) {
  const result: SimulationResult['dailyData'] = [];

  for (let hour = 0; hour < 24; hour++) {
    const start = hour * 4;
    const end = start + 4;

    let sum = 0;

    for (let i = start; i < end; i++) {
      sum += dailySlice[i];
    }

    const avgPower = sum / 4;

    const label = `${hour.toString().padStart(2, '0')}:00`;

    result.push({ time: label, power: avgPower });
  }

  return result;
}
