import InputNumber from '@/components/InputNumber';
import IconButton from '@/components/IconButton';

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

          <IconButton
            ariaLabel="Remove charge point type"
            className="self-end p-2"
            leftIcon="cross"
            variant="secondary"
            onClick={() => removeChargePointType(index)}
          />
        </div>
      ))}

      <IconButton
        ariaLabel="Add Charge Point Type"
        label="Add Charge Point Type"
        leftIcon="plus"
        onClick={addChargePointType}
      />
    </>
  );
}

export default ChargePoint;
