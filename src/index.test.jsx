import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import index from './index';

### Unit Test Cases:
#### Test Case 1: Valid Input (Positive Numbers)
- **Arrange:** Define the input `a`, `b`, and `c` with positive values.
- **Act:** Call the `sum3Numbers()` function with the defined input.
- **Assert:** Verify that the function returns the correct sum of the input numbers.

#### Test Case 2: Valid Input (Negative Numbers)
- **Arrange:** Define the input `a`, `b`, and `c` with negative values.
- **Act:** Call the `sum3Numbers()` function with the defined input.
- **Assert:** Verify that the function returns the correct sum of the input numbers.

#### Test Case 3: Valid Input (Floating Point Numbers)
- **Arrange:** Define the input `a`, `b`, and `c` with floating-point values.
- **Act:** Call the `sum3Numbers()` function with the defined input.
- **Assert:** Verify that the function returns the correct sum of the input numbers.

#### Test Case 4: Invalid Input (Non-Numeric Characters)
- **Arrange:** Define the input `a`, `b`, and `c` with non-numeric characters.
- **Act:** Call the `sum3Numbers()` function with the defined input.
- **Assert:** Verify that the function throws an appropriate error message.

#### Test Case 5: Boundary Values
- **Arrange:** Define the input `a`, `b`, and `c` with minimum and maximum possible values.
- **Act:** Call the `sum3Numbers()` function with the defined input.
- **Assert:** Verify that the function returns the correct sum of the input numbers.

### Integration Test Cases:
#### Test Case 6: Consumption by Other Modules
- **Arrange:** Create a separate module that imports the `sum3Numbers()` function.
- **Act:** Use the `sum3Numbers()` function within the imported module.
- **Assert:** Verify that the consumed module performs the intended functionality correctly.

### Regression Test Cases:
#### Test Case 7: Refactoring (Changing Implementation)
- **Arrange:** Make a change to the `sum3Numbers()` function while maintaining its input and output specifications.
- **Act:** Re-run the previously passed test cases.
- **Assert:** Verify that the function still performs as expected with the updated implementation.
