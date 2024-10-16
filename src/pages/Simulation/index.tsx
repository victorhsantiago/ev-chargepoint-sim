import { FormEvent, useState } from 'react';
import { SimulationResult } from '@/models';
import ChargeStation from '@/components/ChargeStation';
import InputNumber from '@/components/InputNumber';
import IconButton from '@/components/IconButton';
import { runSimulation } from '@/utils/simulation';

function Simulation() {
  const [seed, setSeed] = useState(12345);
  const [numChargepoints, setNumChargepoints] = useState(20);
  const [simulationResult, setSimulationResult] =
    useState<SimulationResult | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const result = runSimulation(seed, numChargepoints);
    setSimulationResult(result);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="grid gap-4 max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold">Charging Station Simulation</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
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
          </div>

          <IconButton
            ariaLabel="Simulate"
            label="Simulate"
            type="submit"
            rightIcon="submit"
          />
        </form>

        {simulationResult && (
          <ChargeStation simulationResult={simulationResult} />
        )}
      </div>
    </div>
  );
}

export default Simulation;
