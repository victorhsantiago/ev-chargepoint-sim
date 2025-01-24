type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  value: number | string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function InputNumber({ label, value, onChange, ...rest }: Props) {
  return (
    <div className="grow">
      <label className="block text-sm font-medium text-gray-700">
        {label}
        <input
          {...rest}
          type="number"
          value={value}
          onChange={onChange}
          className="mt-1 p-2 block w-full rounded-full border border-gray-300 shadow-sm"
        />
      </label>
    </div>
  );
}

export default InputNumber;
