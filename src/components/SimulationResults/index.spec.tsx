import { render, screen } from '@testing-library/react';
import SimulationResults from './index';
import { SimulationResult } from '@/models';
import formatNumber from '@/utils/formatNumber';

describe('ChargeStation Component', () => {
  const mockSimulationResult: SimulationResult = {
    totalEnergyConsumed: 123.45,
    theoreticalMaxDemand: 50,
    maxActualDemand: 45.67,
    concurrencyFactor: 0.75,
    dailyData: [],
  };

  it('should render the simulation results table with correct data', () => {
    render(<SimulationResults simulationResult={mockSimulationResult} />);

    const title = screen.getByText('Simulation Results');
    expect(title).toBeDefined();

    expect(screen.getByText('Total energy consumed')).toBeDefined();
    expect(
      screen.getByText(
        `${formatNumber(mockSimulationResult.totalEnergyConsumed)} kW`
      )
    ).toBeDefined();

    expect(screen.getByText('Theoretical maximum demand')).toBeDefined();
    expect(
      screen.getByText(
        `${formatNumber(mockSimulationResult.theoreticalMaxDemand)} kWh`
      )
    ).toBeDefined();

    expect(screen.getByText('Actual maximum demand')).toBeDefined();
    expect(
      screen.getByText(
        `${formatNumber(mockSimulationResult.maxActualDemand)} kWh`
      )
    ).toBeDefined();

    expect(screen.getByText('Concurrency factor')).toBeDefined();
    expect(
      screen.getByText(
        `${formatNumber(mockSimulationResult.concurrencyFactor * 100)}%`
      )
    ).toBeDefined();
  });
});
