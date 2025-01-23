import { render, screen } from '@testing-library/react';
import ChargeStation from './index';
import { SimulationResult } from '@/models';

describe('ChargeStation Component', () => {
  const mockSimulationResult: SimulationResult = {
    totalEnergyConsumed: 123.45,
    theoreticalMaxDemand: 50,
    maxActualDemand: 45.67,
    concurrencyFactor: 0.75,
    dailyData: [],
  };

  it('should render the simulation results table with correct data', () => {
    render(<ChargeStation simulationResult={mockSimulationResult} />);

    const title = screen.getByText('Simulation Results');
    expect(title).toBeDefined();

    expect(screen.getByText('Total energy consumed:')).toBeDefined();
    expect(screen.getByText('123.45 kWh')).toBeDefined();

    expect(screen.getByText('Theoretical maximum demand:')).toBeDefined();
    expect(screen.getByText('50 kW')).toBeDefined();

    expect(screen.getByText('Actual maximum demand:')).toBeDefined();
    expect(screen.getByText('45.67 kW')).toBeDefined();

    expect(screen.getByText('Concurrency factor:')).toBeDefined();
    expect(screen.getByText('75.00%')).toBeDefined();
  });
});
