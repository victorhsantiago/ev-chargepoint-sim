import { render, screen, fireEvent } from '@testing-library/react';
import ChargePoint from './index';
import { vi } from 'vitest';

describe('ChargePoint Component', () => {
  const mockChargePointTypes = [
    { power: 11, count: 1 },
    { power: 22, count: 2 },
  ];

  const mockAddChargePointType = vi.fn();
  const mockRemoveChargePointType = vi.fn();
  const mockUpdateChargePointType = vi.fn();

  const renderComponent = () =>
    render(
      <ChargePoint
        chargePointTypes={mockChargePointTypes}
        addChargePointType={mockAddChargePointType}
        removeChargePointType={mockRemoveChargePointType}
        updateChargePointType={mockUpdateChargePointType}
      />
    );

  it('should render the correct number of charge points', () => {
    renderComponent();

    const powerInputs = screen.getAllByLabelText('Power (kW)');
    const countInputs = screen.getAllByLabelText('Count');

    expect(powerInputs.length).toBe(mockChargePointTypes.length);
    expect(countInputs.length).toBe(mockChargePointTypes.length);
  });

  it('should call addChargePointType when add button is clicked', () => {
    renderComponent();

    const addButton = screen.getByLabelText('Add Charge Point Type');
    fireEvent.click(addButton);

    expect(mockAddChargePointType).toHaveBeenCalledTimes(1);
  });

  it('should call removeChargePointType when remove button is clicked', () => {
    renderComponent();

    const removeButtons = screen.getAllByLabelText('Remove charge point type');
    fireEvent.click(removeButtons[0]);

    expect(mockRemoveChargePointType).toHaveBeenCalledWith(0);
  });

  it('should call updateChargePointType when power or count is changed', () => {
    renderComponent();

    const powerInputs = screen.getAllByLabelText('Power (kW)');
    const countInputs = screen.getAllByLabelText('Count');

    fireEvent.change(powerInputs[0], { target: { value: '15' } });
    expect(mockUpdateChargePointType).toHaveBeenCalledWith(0, 'power', 15);

    fireEvent.change(countInputs[1], { target: { value: '3' } });
    expect(mockUpdateChargePointType).toHaveBeenCalledWith(1, 'count', 3);
  });
});
