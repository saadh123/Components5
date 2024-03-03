import React, { createContext, useContext, useState } from "react";
import styles from "./styles.module.css";

const CountContext = createContext();

const ParentComponent = () => {
  const [count, setCount] = useState(0);

  return (
    <CountContext.Provider value={{ count, setCount }}>
      <Counter2 />
    </CountContext.Provider>
  );
};

const Counter2 = () => {
  const { count, setCount } = useContext(CountContext);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div className={styles.CounterContext}>
      <hr></hr>
      <p>Count: {count}</p>
      <button onClick={increment}>INCREMENT</button>
    </div>
  );
};

export default ParentComponent;

// Step 1: Create a context
const ThemeContext = createContext();

// Step 2: Create a provider component to wrap your components
function ThemeProvider({ children }) {
  // You can provide any value you want to share with the components
  const theme = "dark";

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
}

// Step 3: Use the context in a component using useContext
function ThemedComponent() {
  // Consume the value from the context
  const theme = useContext(ThemeContext);

  return (
    <div
      style={{
        background: theme === "dark" ? "#333" : "#fff",
        color: theme === "dark" ? "#fff" : "#333",
      }}
    >
      <p>Current Theme: {theme}</p>
    </div>
  );
}

// Step 4: Wrap your component tree with the provider
function App() {
  return (
    <ThemeProvider>
      <ThemedComponent />
    </ThemeProvider>
  );
}
