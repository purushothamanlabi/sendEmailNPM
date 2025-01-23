import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import index from './index';

**Unit Tests:**

**1. Positive Inputs:**

a. Verify the sum of three positive numbers:
javascript
test('Sum of positive numbers', () => {
  expect(sum3Numbers(1, 2, 3)).toBe(6);
});


b. Verify the sum of a zero and two positive numbers:
javascript
test('Sum with zero and positive numbers', () => {
  expect(sum3Numbers(0, 2, 3)).toBe(5);
});


c. Verify the sum of three large numbers:
javascript
test('Sum of large numbers', () => {
  expect(sum3Numbers(1000000, 2000000, 3000000)).toBe(6000000);
});


**2. Negative Inputs:**

a. Verify the sum of three negative numbers:
javascript
test('Sum of negative numbers', () => {
  expect(sum3Numbers(-1, -2, -3)).toBe(-6);
});


b. Verify the sum of a negative number and two positive numbers:
javascript
test('Sum with negative and positive numbers', () => {
  expect(sum3Numbers(-1, 2, 3)).toBe(4);
});


c. Verify the sum of three large negative numbers:
javascript
test('Sum of large negative numbers', () => {
  expect(sum3Numbers(-1000000, -2000000, -3000000)).toBe(-6000000);
});


**3. Edge Cases:**

a. Verify the sum of three zeros:
javascript
test('Sum of three zeros', () => {
  expect(sum3Numbers(0, 0, 0)).toBe(0);
});


b. Verify the sum of one positive and two negative numbers:
javascript
test('Sum with one positive and two negative numbers', () => {
  expect(sum3Numbers(1, -2, -3)).toBe(-4);
});


c. Verify the sum of two positive and one negative number:
javascript
test('Sum with two positive and one negative number', () => {
  expect(sum3Numbers(2, -3, 1)).toBe(0);
});


**4. Invalid Inputs:**

a. Verify an error is thrown for non-numeric inputs:
javascript
test('Error for non-numeric inputs', () => {
  expect(() => sum3Numbers('a', 'b', 'c')).toThrow(TypeError);
});


b. Verify an error is thrown for undefined inputs:
javascript
test('Error for undefined inputs', () => {
  expect(() => sum3Numbers()).toThrow(TypeError);
});


c. Verify an error is thrown for null inputs:
javascript
test('Error for null inputs', () => {
  expect(() => sum3Numbers(null, null, null)).toThrow(TypeError);
});
