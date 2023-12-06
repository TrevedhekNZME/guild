import { createContext, useContext } from 'react';

export const LevelContext = createContext(1);

export const useLevelContext = () => {
  const context = useContext(LevelContext);
  if (context === undefined) {
    throw new Error("No LevelContext.Provider.value found. Are you using <LevelProvider>?");
  }
  return context;
}

export const LevelProvider = ({ level = 1, children }) => {
  return <LevelContext.Provider value={level}>{children}</LevelContext.Provider>;
}
