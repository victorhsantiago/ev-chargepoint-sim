# Reonic · Hometask

## Overview

The Charge Point Visualization Tool is a web app that lets users see how electric vehicle charging points work. Users can set up different types of charge points and see the results in an easy-to-use interface.

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

## Improvements

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
