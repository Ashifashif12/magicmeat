export function weightToGrams(value, unit) {
  const amount = Number(value);
  if (!Number.isFinite(amount) || amount <= 0) return null;

  const grams = Math.round(amount * (unit === 'kg' ? 1000 : 1));
  return grams > 0 ? grams : null;
}

export function convertWeightAmount(value, fromUnit, toUnit) {
  if (value === '' || value === null || value === undefined) return '';

  const amount = Number(value);
  if (!Number.isFinite(amount) || amount < 0) return '';

  const grams = amount * (fromUnit === 'kg' ? 1000 : 1);
  const converted = grams / (toUnit === 'kg' ? 1000 : 1);
  return String(Number(converted.toFixed(toUnit === 'kg' ? 3 : 0)));
}

export function formatWeight(valueInGrams) {
  const grams = Number(valueInGrams);
  if (!Number.isFinite(grams) || grams <= 0) return '0 g';
  if (grams < 1000) return `${Number(grams.toFixed(2))} g`;

  const decimalPlaces = grams % 1000 === 0 ? 1 : grams % 10 === 0 ? 2 : 3;
  return `${(grams / 1000).toFixed(decimalPlaces)} kg`;
}
