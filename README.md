<<<<<<< HEAD
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
=======
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
>>>>>>> e97719eaafb622c6cb62a09d7f57ad32f252c145
