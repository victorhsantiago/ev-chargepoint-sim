import { FormEvent, useState } from 'react';
import { SimulationResult } from '@/models';
import ChargeStation from '@/components/ChargeStation';
import InputNumber from '@/components/InputNumber';
import IconButton from '@/components/IconButton';
import { runSimulation } from '@/utils/simulation';
import InputRange from '@/components/InputRange';

function Simulation() {
  const [seed, setSeed] = useState(12345);
  const [numChargepoints, setNumChargepoints] = useState(20);
  const [arrivalProbability, setArrivalProbability] = useState(100);
  const [carConsumption, setCarConsumption] = useState(18);
  const [chargingPower, setChargingPower] = useState(11);
  const [simulationResult, setSimulationResult] =
    useState<SimulationResult | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const result = runSimulation(
      seed,
      numChargepoints,
      arrivalProbability,
      carConsumption,
      chargingPower
    );
    setSimulationResult(result);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="grid gap-4 max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold">Charging Station Simulation</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col gap-4">
            <InputNumber
              label="Seed"
              value={seed}
              onChange={(e) => setSeed(Number(e.target.value))}
            />

            <InputNumber
              label="Number of Charge Points:"
              value={numChargepoints}
              onChange={(e) => setNumChargepoints(Number(e.target.value))}
            />

            <InputRange
              label="Arrival Probability Multiplier (%)"
              value={arrivalProbability}
              onChange={(e) => setArrivalProbability(Number(e.target.value))}
            />

            <InputNumber
              label="Car Consumption (kWh)"
              value={carConsumption}
              onChange={(e) => setCarConsumption(Number(e.target.value))}
            />

            <InputNumber
              label="Charging Power (kW)"
              value={chargingPower}
              onChange={(e) => setChargingPower(Number(e.target.value))}
            />
          </div>

          <IconButton
            ariaLabel="Simulate"
            label="Simulate"
            type="submit"
            rightIcon="submit"
          />
        </form>

        {simulationResult && (
          <>
            <ChargeStation simulationResult={simulationResult} />
          </>
        )}
      </div>
    </div>
  );
}

export default Simulation;
