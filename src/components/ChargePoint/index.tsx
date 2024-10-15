import InputNumber from '../InputNumber';

type Props = {
  chargePointTypes: {
    power: number;
    count: number;
  }[];
  addChargePointType: () => void;
  removeChargePointType: (index: number) => void;
  updateChargePointType: (
    index: number,
    field: 'power' | 'count',
    value: number
  ) => void;
};

function ChargePoint({
  chargePointTypes,
  addChargePointType,
  removeChargePointType,
  updateChargePointType,
}: Props) {
  return (
    <>
      {chargePointTypes.map((type, index) => (
        <div key={index} className="flex flex-row gap-4">
          <InputNumber
            label="Power (kW)"
            value={type.power}
            onChange={(e) =>
              updateChargePointType(index, 'power', Number(e.target.value))
            }
          />

          <InputNumber
            label="Count"
            value={type.count}
            onChange={(e) =>
              updateChargePointType(index, 'count', Number(e.target.value))
            }
          />

          <button
            type="button"
            onClick={() => removeChargePointType(index)}
            aria-label="Remove charge point type"
          >
            ❌
          </button>
        </div>
      ))}
      <button
        type="button"
        onClick={addChargePointType}
        className="text-blue-500"
        aria-label="Add new charge point type"
        title="Add new charge point type"
      >
        + Add Charge Point Type
      </button>
    </>
  );
}

export default ChargePoint;
