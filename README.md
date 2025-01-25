# Reonic · Hometask

Imagine you're a shopowner and you have a number of parking spaces (e.g. 200) available in front of your store for shoppers & employees.
Now, because you see more and more EVs parking there every day, you're planning on building some chargepoints.

This app helps you on that decision by simulating a whole year of chargepoints usage, making it super easy to plan your investiment.

## Usage

1. **Insert Seed**: Use the input field to add/modify the seed number.
2. **Set number of Charge Points**: Adjuts the amount of charge points to be used in the simulation.
3. **Set Parameters**: Adjust the arrival probability multiplier and car consumption as needed.
4. **Configure Charge Points**: Use the input fields to set the desired power.
5. **Get your Results**: Hit the `Simulate` button the see the simulation output.

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
