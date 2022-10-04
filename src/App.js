import React, { useContext } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// import pages
import Categories from './pages/Categories';
import Category from './pages/Category';
import Videos from "./pages/Videos";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

function App() {
  return (    
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navigate replace to='/signup' />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/categories' element={<Categories />} />
          <Route path='/:category' element={<Category />} />
          <Route path='/:category/:id' element={<Videos />} />       
        </Routes>
      </BrowserRouter>
  );
}

export default App;
