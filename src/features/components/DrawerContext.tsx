import React, { createContext, useState, ReactNode } from 'react';

interface DrawerContextType {
  isDrawerOpen: boolean;
  setDrawerOpen: (isOpen: boolean) => void;
}

export const DrawerContext = createContext<DrawerContextType>({
  isDrawerOpen: false,
  setDrawerOpen: () => {}
});

interface DrawerProviderProps {
  children: ReactNode;
}

export const DrawerProvider: React.FC<DrawerProviderProps> = ({ children }) => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  return (
    <DrawerContext.Provider value={{ isDrawerOpen, setDrawerOpen }}>
      {children}
    </DrawerContext.Provider>
  );
};
