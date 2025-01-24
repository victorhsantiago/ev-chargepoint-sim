import formatNumber from './formatNumber';

describe('formatNumber', () => {
  it('should format number with default locale and fraction digits', () => {
    expect(formatNumber(1234.567)).toBe('1.234,57');
  });

  it('should format number with specified locale', () => {
    expect(formatNumber(1234.567, 'en-US')).toBe('1,234.57');
  });

  it('should format number with specified maximum fraction digits', () => {
    expect(formatNumber(1234.567, 'en-US', 1)).toBe('1,234.6');
  });

  it('should format number with no fraction digits', () => {
    expect(formatNumber(1234.567, 'en-US', 0)).toBe('1,235');
  });

  it('should format number with different locale and no fraction digits', () => {
    expect(formatNumber(1234.567, 'fr-FR', 0)).toBe('1 235');
  });
});
