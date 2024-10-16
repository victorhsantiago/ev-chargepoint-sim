import { fireEvent, render } from '@testing-library/react';
import InputForm from './index';
import { vi } from 'vitest';

describe('InputForm', () => {
  it('should render correctly and submit the form with the correct data', () => {
    const mockOnSubmit = vi.fn();

    const screen = render(<InputForm onSubmit={mockOnSubmit} />);

    const carConsumptionInput = screen.getByLabelText(/Car Consumption/);
    fireEvent.change(carConsumptionInput, { target: { value: '20' } });

    const arrivalProbabilityInput =
      screen.getByLabelText(/Arrival Probability/);
    fireEvent.change(arrivalProbabilityInput, { target: { value: '90' } });

    const submitButton = screen.getByLabelText('Execute');
    fireEvent.click(submitButton);

    expect(mockOnSubmit).toHaveBeenCalledWith({
      arrivalProbability: 90,
      carConsumption: 20,
      chargePoints: 1,
      chargingPower: 11,
    });
  });

  it('should allow adding and removing charge points', () => {
    const mockOnSubmit = vi.fn();

    const screen = render(<InputForm onSubmit={mockOnSubmit} />);

    const addChargePointButton = screen.getByText(/Add Charge Point/);
    fireEvent.click(addChargePointButton);

    const chargePoints = screen.getAllByText(/Power/);
    expect(chargePoints.length).toBe(2);

    const removeChargePointButton = screen.getAllByLabelText(/Remove/);
    fireEvent.click(removeChargePointButton[1]);

    expect(screen.getAllByText(/Power/).length).toBe(1);
  });
});
