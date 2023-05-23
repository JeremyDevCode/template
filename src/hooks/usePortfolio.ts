import { useState } from "react";

function usePortfolio() {
  const [theme, setTheme] = useState(true);

  const toggleTheme = () => {
    setTheme((prevTheme) => !prevTheme);
  };

  const state = { theme };
  const stateUpdaters = { toggleTheme };

  return { state, stateUpdaters };
}

export { usePortfolio };