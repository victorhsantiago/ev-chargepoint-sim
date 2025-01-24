import { SimulationResult } from '@/models';
import BaseIcon from '../BaseIcon';
import formatNumber from '@/utils/formatNumber';

type Props = {
  simulationResult: SimulationResult;
};

function SimulationResults({ simulationResult }: Props) {
  const tableData = [
    {
      label: 'Total energy consumed',
      value: `${formatNumber(simulationResult.totalEnergyConsumed)} kW`,
      icon: 'electric_bolt',
      iconHexColor: '#F9C784',
    },
    {
      label: 'Theoretical maximum demand',
      value: `${simulationResult.theoreticalMaxDemand} kWh`,
      icon: 'energy_program_saving',
      iconHexColor: '#80A4AE',
    },
    {
      label: 'Actual maximum demand',
      value: `${formatNumber(simulationResult.maxActualDemand)} kWh`,
      icon: 'energy_program_time_used',
      iconHexColor: '#9DC384',
    },
    {
      label: 'Concurrency factor',
      value: `${formatNumber(simulationResult.concurrencyFactor * 100)}%`,
      icon: 'pie_chart',
      iconHexColor: '#789DE5',
    },
  ];

  return (
    <section className="p-4">
      <h2 className="text-xl font-semibold mb-4">Simulation Results</h2>
      <dl className="grid md:grid-cols-2 gap-4">
        {tableData.map((data) => (
          <div
            key={data.label}
            className="p-4 bg-gray-50 rounded-lg shadow-md mb-4 flex flex-col place-items-center"
          >
            <BaseIcon
              icon={data.icon}
              iconHexColor={data.iconHexColor}
              size={4}
            />
            <dt className="font-semibold">{data.label}</dt>
            <dd className="text-gray-700">{data.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

export default SimulationResults;
