const OutputDisplay = ({ data }: { data: any }) => {
  return (
    <div className="p-4 bg-gray-100 shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-4">Output Summary</h2>
      <p>
        <strong>Total Charge Points:</strong> {data.chargePoints}
      </p>
      <p>
        <strong>Arrival Probability Multiplier:</strong>{' '}
        {data.arrivalProbability}%
      </p>
      <p>
        <strong>Car Consumption:</strong> {data.carConsumption}kWh
      </p>
      <p>
        <strong>Charging Power per Charge Point:</strong> {data.chargingPower}
        kW
      </p>

      {/* Example calculated outputs */}
      <p>
        <strong>Total Energy Charged:</strong> {data.totalEnergyCharged}kWh
      </p>
      <p>
        <strong>Charging Events:</strong> {data.chargingEvents} per day
      </p>
    </div>
  );
};

export default OutputDisplay;
