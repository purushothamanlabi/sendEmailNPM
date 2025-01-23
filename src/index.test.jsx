import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import index from './index';

**Unit Tests:**

**1. Valid Test Cases:**

| Input | Output | Description |
|---|---|---|
| sum3Numbers(1, 2, 3) | 6 | Sums three positive numbers |
| sum3Numbers(0, 0, 0) | 0 | Sums three zero |
| sum3Numbers(-1, -2, -3) | -6 | Sums three negative numbers |

**2. Edge Case Test Cases:**

| Input | Output | Description |
|---|---|---|
| sum3Numbers(1, undefined, 3) | NaN | Sums a number and an undefined value |
| sum3Numbers(Infinity, 2, 3) | Infinity | Sums a number and Infinity |
| sum3Numbers(NaN, 2, 3) | NaN | Sums a number and NaN |

**3. Invalid Test Cases:**

| Input | Description |
|---|---|
| sum3Numbers("1", 2, 3) | Attempts to sum a string and numbers |
| sum3Numbers(1, "2", 3) | Attempts to sum a number and a string |
| sum3Numbers(1, 2, "3") | Attempts to sum a number and a string |

**React Test:**

**1. Component Test:**

js
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


**2. Functional Test:**

js
import App from './App';

test('button click increments counter', () => {
  const { getByText } = render(<App />);
  const button = getByText(/increment/i);
  fireEvent.click(button);
  const counter = getByText(/Count: 1/i);
  expect(counter).toBeInTheDocument();
});
