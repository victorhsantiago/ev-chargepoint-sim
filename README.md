# Reonic · Hometask

## Features

- Input Parameters:
  - Number of charge points
  - Arrival probability multiplier (20-200%, default: 100%)
  - Car consumption (default: 18 kWh)
  - Charging power per charge point (default: 11 kWh)

## Tech Stack

- **Frontend**: React
- **Styling**: Tailwind CSS
- **Typescript**: Used for type safety
- **Linting**: Eslint
- **Code Formatting**: Prettier

## Improvements

1. **Error Handling**: Improve error handling throughout the application to provide better user feedback and debugging information.
2. **Performance Optimization**: Optimize the performance of the simulation and UI rendering to ensure a smooth user experience.
3. **Accessibility**: Enhance the accessibility of the application to ensure it is usable by people with disabilities.
4. **State Management**: Improve state management using libraries like Redux or Context API to handle complex state logic more efficiently.

## Getting Started

### Install dependencies:

```bash
npm install
```

### Run the Application

```bash
npm run dev
```

## Usage

1. **Insert Seed**: Use the input field to add/modify the seed number.
2. **Set number of Charge Points**: Adjuts the amount of charge points to be used in the simulation.
3. **Set Parameters**: Adjust the arrival probability multiplier and car consumption as needed.
4. **Configure Charge Points**: Use the input fields to set the desired power.
5. **Get your Results**: Hit the `Simulate` button the see the simulation output.

## Tests

### Unit tests

Several components are test covered, as well the scripts for running the simulation.

### Test Tech Stack

- Vitest
- React Testing Library

### Running tests

```bash
npm run test
```
