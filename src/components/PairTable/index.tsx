type Pair = {
  label: string;
  value: string | number;
};

type Props = {
  data: Pair[];
  title?: string;
};

function PairTable({ data, title }: Props) {
  return (
    <div className="max-w-xl mx-auto p-4 border rounded-lg shadow-md bg-white">
      {title && <h2 className="text-xl font-bold mb-4 text-center">{title}</h2>}
      <table className="table-auto w-full">
        <tbody>
          {data.map((pair, index) => (
            <tr key={index} className="border-b">
              <td className="py-2 text-gray-700 font-semibold">{pair.label}</td>
              <td className="py-2 text-right text-gray-900">{pair.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PairTable;
