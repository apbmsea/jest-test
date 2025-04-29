// __tests__/validatePhoneNumber.test.ts

import { validatePhoneNumber } from '../src/validatePhoneNumber';

describe('validatePhoneNumber', () => {
  it('should return true for a valid phone number', () => {
    const validPhone = '+71234567890';
    expect(validatePhoneNumber(validPhone)).toBe(true);
  });

  it('should return false for a phone number without +7', () => {
    const invalidPhone = '71234567890';
    expect(validatePhoneNumber(invalidPhone)).toBe(false);
  });

  it('should return false for a phone number with incorrect length', () => {
    const invalidPhone = '+7123456789';
    expect(validatePhoneNumber(invalidPhone)).toBe(false);
  });

  it('should return false for a phone number with letters', () => {
    const invalidPhone = '+7abcd567890';
    expect(validatePhoneNumber(invalidPhone)).toBe(false);
  });
});
