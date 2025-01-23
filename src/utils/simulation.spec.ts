import { runSimulation } from './simulation';
import { SimulationResult } from '@/models';
import { MAX_POWER_PER_CHARGEPOINT } from './constants';

describe('runSimulation', async () => {
  it('should simulate correctly with a given seed and number of charge points', async () => {
    const seed = 42;
    const numChargepoints = 5;
    const arrivalProbabilityMultiplier = 100;
    const consumption = 18;
    const chargingPower = 11;

    const result: SimulationResult = await runSimulation({
      seed,
      numChargepoints,
      arrivalProbabilityMultiplier,
      consumption,
      chargingPower,
    });

    expect(result).toBeDefined();
    expect(result.totalEnergyConsumed).toBeGreaterThanOrEqual(0);
    expect(result.theoreticalMaxDemand).toBe(
      numChargepoints * MAX_POWER_PER_CHARGEPOINT
    );
    expect(result.maxActualDemand).toBeLessThanOrEqual(
      result.theoreticalMaxDemand
    );
    expect(result.concurrencyFactor).toBeGreaterThanOrEqual(0);
    expect(result.concurrencyFactor).toBeLessThanOrEqual(1);
  });
});
