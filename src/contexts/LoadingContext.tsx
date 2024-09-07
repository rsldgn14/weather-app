import React, { createContext, useState, ReactNode } from "react";
import { emptyCallback } from "./emptycallback";

interface LoadingContextType {
  isLoading: boolean;
  setLoading: (value: boolean) => void;
}

export const LoadingContext = createContext<LoadingContextType | undefined>({
  isLoading: false,
  setLoading: emptyCallback,
});

export const LoadingProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isLoading, setLoading] = useState<boolean>(false);

  return (
    <LoadingContext.Provider value={{ isLoading, setLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};
