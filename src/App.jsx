import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider, } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme/theme";

import Layout from "./components/Layout";

import { UIProvider } from "./components/contexts/UI.context";

// import { CarsProvider } from "./components/contexts/car.context"; // replaced by react-query
// REACT-QUERY: Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    suspense: true,
    queries: {
      suspense: true,
      staleTime: 1000 * 10,
    },
  },
});

// import pages
import List from "./pages/List";
import Add from "./pages/Add";
import Update from "./pages/Update";
import NotFound from "./pages/NotFound";

import CssBaseline from "@mui/material/CssBaseline";

function App() {
  return (
    <Router>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <UIProvider>
          {/* <CarsProvider> */}
          {/* REACT-QUERY: Provide the client to your App */}
          <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools />
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<List />} />
                <Route path="/add" element={<Add />} />
                <Route path="/update/:id" element={<Update />} />
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
          </QueryClientProvider>
          {/* </CarsProvider> */}
        </UIProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;
