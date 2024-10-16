import { mulberry32 } from './random';
describe('mulberry32', () => {
  it('should produce consistent random numbers for a given seed', () => {
    const seed1 = 12345;
    const seed2 = 12345;

    const random1 = mulberry32(seed1);
    const random2 = mulberry32(seed2);

    const values1 = [random1(), random1(), random1(), random1(), random1()];
    const values2 = [random2(), random2(), random2(), random2(), random2()];

    expect(values1).toEqual(values2);
  });

  it('should produce different sequences for different seeds', () => {
    const seed1 = 12345;
    const seed2 = 67890;

    const random1 = mulberry32(seed1);
    const random2 = mulberry32(seed2);

    const values1 = [random1(), random1(), random1(), random1(), random1()];
    const values2 = [random2(), random2(), random2(), random2(), random2()];

    expect(values1).not.toEqual(values2);
  });
});
