import { SimulationResult } from '@/models';

type Props = {
  simulationResult: SimulationResult;
};

function ChargeStation({ simulationResult }: Props) {
  return (
    <div>
      <h1>Simulation Results</h1>
      <p>
        Total energy consumed: {simulationResult.totalEnergyConsumed.toFixed(2)}{' '}
        kWh
      </p>
      <p>
        Theoretical maximum demand: {simulationResult.theoreticalMaxDemand} kW
      </p>
      <p>
        Actual maximum demand: {simulationResult.maxActualDemand.toFixed(2)} kW
      </p>
      <p>
        Concurrency factor:{' '}
        {(simulationResult.concurrencyFactor * 100).toFixed(2)}%
      </p>
    </div>
  );
}

export default ChargeStation;
