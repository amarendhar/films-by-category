import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import { Home, Details, NotFound } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="details/:movieId" element={<Details />} />
          <Route path="*" component={NotFound} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
