import { runSimulation } from './simulation';
import { SimulationResult } from '@/models';
import { MAX_POWER_PER_CHARGEPOINT } from './constants';

describe('runSimulation', () => {
  it('should simulate correctly with a given seed and number of charge points', () => {
    const seed = 42;
    const numChargepoints = 5;

    const result: SimulationResult = runSimulation(seed, numChargepoints);

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
