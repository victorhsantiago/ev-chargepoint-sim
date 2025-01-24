export default function formatNumber(
  number: number,
  locale = 'de-DE',
  maximumFractionDigits = 2
): string {
  return Intl.NumberFormat(locale, {
    maximumFractionDigits,
  }).format(number);
}
