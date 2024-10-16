import { Output } from '@/models';
import PairTable from '../PairTable';

const OutputDisplay = ({ data }: { data: Output }) => {
  const tableData = [
    {
      label: 'Total Charge Points:',
      value: data.chargePoints,
    },
    {
      label: 'Arrival Probability Multiplier',
      value: `${data.arrivalProbability}%`,
    },
    {
      label: 'Car Consumption:',
      value: `${data.carConsumption} kWh`,
    },
    {
      label: 'Charging Power per Charge Point:',
      value: `${data.chargingPower} kW`,
    },
    {
      label: 'Total Energy Charged:',
      value: `${data.totalEnergyCharged} kWh`,
    },
    {
      label: 'Charging Events:',
      value: `${data.chargingEvents} per day`,
    },
  ];

  return <PairTable title="Output Summary" data={tableData} />;
};

export default OutputDisplay;
