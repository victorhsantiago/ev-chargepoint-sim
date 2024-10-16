import { initializeChargePoints } from './chargePoint';
describe('initializeChargePoints', () => {
  it('should initialize an array of ChargePoint objects with the correct properties', () => {
    const num = 5;
    const chargePoints = initializeChargePoints(num);

    expect(chargePoints).toHaveLength(num);

    chargePoints.forEach((chargePoint) => {
      expect(chargePoint).toEqual({
        isOccupied: false,
        chargingPower: 0,
        remainingTime: 0,
      });
    });
  });

  it('should return an empty array when num is 0', () => {
    const chargePoints = initializeChargePoints(0);

    expect(chargePoints).toHaveLength(0);
  });
});
