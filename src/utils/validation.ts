export const isValidUkPostcode = (value: string) => {
  const normalizedValue = value.replace(/\s/g, '').toUpperCase();
  return /^[A-Z]{1,2}\d[A-Z\d]?\d[A-Z]{2}$/.test(normalizedValue);
};
