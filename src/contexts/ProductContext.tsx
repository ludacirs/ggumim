import React, { createContext, useContext, useState } from "react";

const ProductStateContext = createContext<string | null>(null);
const ProductSetStateContext = createContext<React.Dispatch<React.SetStateAction<string>> | null>(null);

export const ProductProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, setState] = useState("");

  return (
    <ProductSetStateContext.Provider value={setState}>
      <ProductStateContext.Provider value={state}>{children}</ProductStateContext.Provider>
    </ProductSetStateContext.Provider>
  );
};

export const useProductState = () => {
  const state = useContext(ProductStateContext);
  if (typeof state !== "string" && !state) {
    throw new Error("product state context error");
  }
  return state;
};

export const useSetProduct = () => {
  const setState = useContext(ProductSetStateContext);
  if (!setState) {
    throw new Error("product setState context error");
  }
  return setState;
};
