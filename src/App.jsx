import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Details, NotFound } from "./pages";
import Layout from "./Layout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="details" element={<Details />} />
          <Route path="*" component={NotFound} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
