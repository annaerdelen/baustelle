export function convertPriceEur(val) {
  return new Intl.NumberFormat('de', {
    currency: 'EUR',
    style: 'currency',
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
  }).format(val);
}

export function convertPriceUsd(val) {
  return new Intl.NumberFormat('en', {
    currency: 'USD',
    style: 'currency',
  }).format(val);
}
