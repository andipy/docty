import React, { useContext } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthContext } from './context/AuthContext';

// import pages
import Categories from './pages/Categories';
import Category from './pages/Category';
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Role from "./pages/Role";
import Doctor from "./pages/Doctor";
import Profile from "./pages/Profile";

function App() {

  const [currentUser, setCurrentUser] = useContext(AuthContext);

  return (    
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navigate to='/role' replace />} />
          <Route path="/role" element={<Role />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/categories' element={currentUser ? <Categories /> : <Login />} />
          <Route path='/categories/:category_id' element={currentUser ? <Category /> : <Login />} />
          <Route path='/categories/:category/:doctor_id' element={currentUser ? <Doctor /> : <Login />} />
          <Route path='/profile' element={currentUser ? <Profile /> : <Login />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
