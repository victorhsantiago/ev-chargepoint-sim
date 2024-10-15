import { FormEvent, useCallback, useMemo, useState } from 'react';
import ChargePoint from '../ChargePoint';
import InputNumber from '../InputNumber';
import InputRange from '../InputRange';

const InputForm = ({ onSubmit }: { onSubmit: (data: any) => void }) => {
  const defaultChargePoint = { power: 11, count: 1 };

  const [arrivalProbability, setArrivalProbability] = useState(100);
  const [carConsumption, setCarConsumption] = useState(18);
  const [chargePointTypes, setChargePointTypes] = useState([
    defaultChargePoint,
  ]);

  const totalChargePoints = useMemo(
    () => chargePointTypes.reduce((acc, cp) => acc + cp.count, 0),
    [chargePointTypes]
  );

  const totalChargingPower = useMemo(
    () => chargePointTypes.reduce((acc, cp) => acc + cp.power * cp.count, 0),
    [chargePointTypes]
  );

  const handleSubmit = useCallback(
    (e: FormEvent) => {
      e.preventDefault();
      onSubmit({
        arrivalProbability,
        carConsumption,
        chargePoints: totalChargePoints,
        chargingPower: totalChargingPower,
      });
    },
    [
      onSubmit,
      arrivalProbability,
      carConsumption,
      totalChargePoints,
      totalChargingPower,
    ]
  );

  const addChargePointType = useCallback(() => {
    setChargePointTypes([...chargePointTypes, { power: 11, count: 1 }]);
  }, [chargePointTypes]);

  const removeChargePointType = useCallback((index: number) => {
    setChargePointTypes((prev) => prev.filter((_, i) => i !== index));
  }, []);

  const updateChargePointType = (
    index: number,
    field: 'power' | 'count',
    value: number
  ) => {
    const updatedTypes = chargePointTypes.map((cp, i) => {
      return i === index ? { ...cp, [field]: value } : cp;
    });

    setChargePointTypes(updatedTypes);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <ChargePoint
        addChargePointType={addChargePointType}
        chargePointTypes={chargePointTypes}
        removeChargePointType={removeChargePointType}
        updateChargePointType={updateChargePointType}
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

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        Submit
      </button>
    </form>
  );
};

export default InputForm;
