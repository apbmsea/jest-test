// src/validatePhoneNumber.ts

export const validatePhoneNumber = (phone: string): boolean => {
    const regex = /^\+7\d{10}$/;
    return regex.test(phone);
  };
  