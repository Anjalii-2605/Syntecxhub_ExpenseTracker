# Expense Tracker

A responsive Expense Tracker application built using React.js to manage daily expenses efficiently.

## Features

- Add new expenses with amount
- Displays expense list dynamically
- Calculates total expenses automatically
- Input field auto-focus using useRef
- Optimized performance using React hooks
- Responsive and clean UI

## React Hooks Used

### useState
Used for managing:
- Expense name
- Expense amount
- Expense list

### useEffect
Used to fetch and display mock API data on initial render.

### useRef
Used for input field focus management.

### useMemo
Used to optimize total expense calculation.

### useCallback
Used to optimize the add expense function.

## Tech Stack

- React.js
- JavaScript
- CSS
- Vite

## Installation

```bash
npm install
npm run dev
```

## Build Project

```bash
npm run build
```

## Project Structure

```plaintext
expense-tracker/
│── src/
│   ├── App.jsx
│   ├── main.jsx
│── public/
│── package.json
```

## Author

Anjali Singh
