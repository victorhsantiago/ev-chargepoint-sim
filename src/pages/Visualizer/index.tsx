import { useState } from 'react';
import InputForm from '../../components/InputForm';
import OutputDisplay from '../../components/OutputDisplay';

const App = () => {
  const [outputData, setOutputData] = useState(null);

  const handleFormSubmit = (data: any) => {
    // Calculate total energy charged, charging events, etc.
    const totalEnergyCharged = data.chargePoints * data.chargingPower * 24; // Just an example
    const chargingEvents = Math.round(Math.random() * 100); // Random example

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
