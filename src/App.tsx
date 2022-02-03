import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/global-styles";
import theme from "./styles/theme";
import { PictureViewer } from "@components/templates";
import { ProductProvider } from "@contexts/ProductContext";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <ProductProvider>
          <PictureViewer />
        </ProductProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
