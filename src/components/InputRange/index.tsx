type Props = {
  label: string;
  max?: number;
  min?: number;
  value: number | string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function InputRange({ label, max = 200, min = 20, value, onChange }: Props) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">
        {label}
        <input
          type="range"
          className="mt-1 w-full"
          max={max}
          min={min}
          value={value}
          onChange={onChange}
        />
      </label>
      <span>{value}%</span>
    </div>
  );
}

export default InputRange;
