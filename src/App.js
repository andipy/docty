import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import pages
import Categories from './pages/Categories';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Categories />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
