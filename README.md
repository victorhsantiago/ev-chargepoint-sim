# Reonic · Hometask

## Overview

The Charge Point Visualization Tool is a web app that lets users see how electric vehicle charging points work. Users can set up different types of charge points and see the results in an easy-to-use interface.

## Features

- Input Parameters:
  - Number of charge points
  - Arrival probability multiplier (20-200%, default: 100%)
  - Car consumption (default: 18 kWh)
  - Charging power per charge point (default: 11 kW)
- Dynamic Charge Point Management:
  - Add and remove different types of charge points (e.g., 5 x 11kW, 3 x 22kW, 1 x 50kW)
- Output Metrics:
  - Total charging values (in kW) per charge point
  - Total energy charged (in kWh)
  - Number of charging events per year/month/week/day

## Tech Stack

- **Frontend**: React
- **Styling**: Tailwind CSS
- **Typescript**: Used for type safety
- **Linting**: Eslint
- **Code Formatting**: Prettier

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

### Simulation

1. **Insert Seed**: Use the input field to add/modify the seed number.
2. **Set number of Charge Points**: Adjuts the amount of charge points to be used in the simulation.
3. **Get your Results**: Hit the `Simulate` button the see the simulation output.

### Visualizer

1. **Configure Charge Points**: Use the input fields to set the desired number of charge points, their power, and count.
2. **Set Parameters**: Adjust the arrival probability multiplier and car consumption as needed.
3. **Add/Remove Charge Points**: Click the `+ Add Charge Point Type` button to add a new charge point type, or click "Remove" to delete an existing one.
4. **Submit Data**: Click the `Execute` button to visualize the results based on your inputs.

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
