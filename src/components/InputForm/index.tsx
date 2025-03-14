import { FormEvent, useCallback, useState } from 'react';
import ChargePoint from '@/components/ChargePoint';
import InputNumber from '@/components/InputNumber';
import InputRange from '@/components/InputRange';
import { Input } from '@/models';
import IconButton from '../IconButton';

const InputForm = ({ onSubmit }: { onSubmit: (data: Input) => void }) => {
  const defaultChargePoint = { power: 11, count: 1 };

  const [arrivalProbability, setArrivalProbability] = useState(100);
  const [carConsumption, setCarConsumption] = useState(18);
  const [chargePointTypes, setChargePointTypes] = useState([
    defaultChargePoint,
  ]);

  const totalChargePoints = chargePointTypes.reduce(
    (acc, cp) => acc + cp.count,
    0
  );

  const totalChargingPower = chargePointTypes.reduce(
    (acc, cp) => acc + cp.power * cp.count,
    0
  );

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit({
      arrivalProbability,
      carConsumption,
      chargePoints: totalChargePoints,
      chargingPower: totalChargingPower,
    });
  };

  const addChargePointType = useCallback(() => {
    setChargePointTypes([...chargePointTypes, { power: 11, count: 1 }]);
  }, [chargePointTypes]);

  const removeChargePointType = useCallback((index: number) => {
    setChargePointTypes((prev) => prev.filter((_, i) => i !== index));
  }, []);

  const updateChargePointType = useCallback(
    (index: number, field: 'power' | 'count', value: number) => {
      setChargePointTypes((prev) =>
        prev.map((cp, i) => (i === index ? { ...cp, [field]: value } : cp))
      );
    },
    []
  );

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

      <IconButton
        ariaLabel="Execute"
        label="Execute"
        type="submit"
        rightIcon="submit"
      />
    </form>
  );
};

export default InputForm;
