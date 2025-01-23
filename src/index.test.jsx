import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import index from './index';

**Test Case Structure:**

js
describe('sum3Numbers()', () => {
  it('should return the sum of three numbers', () => {});
  it('should handle invalid input', () => {});
  it('should be able to sum large numbers', () => {});
  it('should be able to sum negative numbers', () => {});
});


**Test Cases:**

js
describe('sum3Numbers()', () => {
  it('should return the sum of three numbers', () => {
    expect(sum3Numbers(1, 2, 3)).toBe(6);
    expect(sum3Numbers(5, 10, 15)).toBe(30);
    expect(sum3Numbers(-1, -2, -3)).toBe(-6);
  });

  it('should handle invalid input', () => {
    expect(() => sum3Numbers()).toThrow();
    expect(() => sum3Numbers(1)).toThrow();
    expect(() => sum3Numbers(1, 2, 'a')).toThrow();
  });

  it('should be able to sum large numbers', () => {
    const largeNumber = 1000000000;
    expect(sum3Numbers(largeNumber, largeNumber, largeNumber)).toBeCloseTo(largeNumber * 3);
  });

  it('should be able to sum negative numbers', () => {
    const negativeNumber = -1000000000;
    expect(sum3Numbers(negativeNumber, negativeNumber, negativeNumber)).toBeCloseTo(negativeNumber * 3);
  });
});
