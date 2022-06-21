import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { DataProvider } from "./context/Data";

// import pages
import Categories from './pages/Categories';
import Category from './pages/Category';
import Videos from "./pages/Videos";
import Signup from "./pages/Signup";

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navigate replace to='/signup' />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/categories' element={<Categories />} />
          <Route path='/:category' element={<Category />} />
          <Route path='/:category/:id' element={<Videos />} />       
        </Routes>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
