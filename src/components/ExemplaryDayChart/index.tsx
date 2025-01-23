import { SimulationResult } from '@/models';
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

interface Props {
  dailyData: SimulationResult['dailyData'];
}

function ExemplaryDayChart({ dailyData }: Props) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart
        data={dailyData}
        margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
      >
        <defs>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
          </linearGradient>
        </defs>
        <Area
          type="monotone"
          dataKey="power"
          stroke="#82ca9d"
          fillOpacity={1}
          fill="url(#colorPv)"
        />
        <CartesianGrid stroke="#ccc" strokeDasharray="1 6" />
        <XAxis dataKey="time" />
        <YAxis
          label={{
            value: 'kW (avg/h)',
            angle: -90,
            position: 'insideLeft',
            textAnchor: 'middle',
          }}
        />
        <Tooltip />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export default ExemplaryDayChart;
