import { describe, expect, it } from 'vitest';
import { isValidUkPostcode } from './validation';

describe('isValidUkPostcode', () => {
  it('returns true for a valid postcode without spaces', () => {
    expect(isValidUkPostcode('EC4M7RF')).toBe(true);
  });

  it('returns true for a valid postcode with spaces', () => {
    expect(isValidUkPostcode('EC4M 7RF')).toBe(true);
  });

  it('returns true for lowercase valid postcode input', () => {
    expect(isValidUkPostcode('ec4m 7rf')).toBe(true);
  });

  it('returns false for an empty string', () => {
    expect(isValidUkPostcode('')).toBe(false);
  });

  it('returns false for whitespace only input', () => {
    expect(isValidUkPostcode('   ')).toBe(false);
  });

  it('returns false for clearly invalid text', () => {
    expect(isValidUkPostcode('slkxjdls')).toBe(false);
  });

  it('returns false for invalid short input', () => {
    expect(isValidUkPostcode('123')).toBe(false);
  });
});
