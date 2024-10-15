import { useState } from 'react';
import InputForm from '@/components/InputForm';
import OutputDisplay from '@/components/OutputDisplay';
import { Input, Output } from '@/models';

const App = () => {
  const [outputData, setOutputData] = useState<Output | null>(null);

  const handleFormSubmit = (data: Input) => {
    const totalEnergyCharged = data.chargePoints * data.chargingPower * 24;
    const chargingEvents = Math.round(Math.random() * 100);

    setOutputData({
      ...data,
      totalEnergyCharged,
      chargingEvents,
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="grid gap-4 max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold">Charge Point Visualizer</h1>
        <InputForm onSubmit={handleFormSubmit} />
        {outputData && <OutputDisplay data={outputData} />}
      </div>
    </div>
  );
};

export default App;
