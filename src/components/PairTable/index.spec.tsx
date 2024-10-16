import { render, screen } from '@testing-library/react';
import PairTable from './index';

describe('PairTable Component', () => {
  const mockData = [
    { label: 'Total energy consumed:', value: '123.45 kWh' },
    { label: 'Theoretical maximum demand:', value: '50 kW' },
    { label: 'Actual maximum demand:', value: '45.67 kW' },
  ];

  it('should render the title if provided', () => {
    render(<PairTable data={mockData} title="Simulation Results" />);

    const title = screen.getByText('Simulation Results');
    expect(title).toBeDefined();
  });

  it('should not render a title if not provided', () => {
    render(<PairTable data={mockData} />);

    const title = screen.queryByText('Simulation Results');
    expect(title).toBe(null);
  });

  it('should render the correct number of rows based on data', () => {
    render(<PairTable data={mockData} />);

    const rows = screen.getAllByRole('row');
    expect(rows.length).toBe(mockData.length);
  });

  it('should display the correct labels and values in the table', () => {
    render(<PairTable data={mockData} />);

    mockData.forEach((pair) => {
      expect(screen.getByText(pair.label)).toBeDefined();
      expect(screen.getByText(pair.value)).toBeDefined();
    });
  });
});
