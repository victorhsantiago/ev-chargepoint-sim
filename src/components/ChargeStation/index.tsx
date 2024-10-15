import { SimulationResult } from '@/models';
import PairTable from '../PairTable';

type Props = {
  simulationResult: SimulationResult;
};

function ChargeStation({ simulationResult }: Props) {
  return (
    <PairTable
      title="Simulation Results"
      data={[
        {
          label: 'Total energy consumed:',
          value: `${simulationResult.totalEnergyConsumed.toFixed(2)} kWh`,
        },
        {
          label: 'Theoretical maximum demand:',
          value: `${simulationResult.theoreticalMaxDemand} kW`,
        },
        {
          label: 'Actual maximum demand:',
          value: `${simulationResult.maxActualDemand.toFixed(2)} kW`,
        },
        {
          label: 'Concurrency factor:',
          value: `${(simulationResult.concurrencyFactor * 100).toFixed(2)}%`,
        },
      ]}
    />
  );
}

export default ChargeStation;
