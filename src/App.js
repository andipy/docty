import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthContext } from './context/AuthContext';

// import pages
import Categories from './pages/Categories';
import Category from './pages/Category';
import Signup from "./pages/Signup";
import SignupDoctor from "./pages/SignupDoctor";
import Login from "./pages/Login";
import Role from "./pages/Role";
import Doctor from "./pages/Doctor";
import Profile from "./pages/Profile";
import UpdateHealthCategory from "./pages/UpdateHealthCategory";
import UpdateName from "./pages/UpdateName";


import { collection, query, where, onSnapshot } from "firebase/firestore";
import { db } from "./services/firebase"

function App() {

  const [currentUser, setCurrentUser] = useContext(AuthContext);

  // const [docCompleted, setDocCompleted] = useState(false);
  // const [user, setUser] = useState({});  
  // const getUser = async() => {
  //   const q = query(collection(db, "users"), where("uid", "==", currentUser.uid));
  //   const unsubscribe = onSnapshot(q, (querySnapshot) => {
  //     querySnapshot.forEach((doc) => {
  //         setUser(doc.data());
  //     })
  // });
  // return unsubscribe;
  // }
  // useEffect(()=>{
  //   getUser();
  // },[currentUser]);
  // useEffect(()=>{
  //   if ( user.role == "DOCTOR" ) {
  //     console.log("sono un doc");
  //     if ( user.first_name == null || user.last_name == null ) {
  //       setDocCompleted(false);
  //     } else {
  //       setDocCompleted(true);
  //     }
  //   }
  // },[user])

  // console.log(docCompleted);

  return (    
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navigate to='/role' replace />} />
          <Route path="/role" element={<Role />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/signup-doctor' element={<SignupDoctor />} />
          <Route path='/login' element={<Login />} />
          <Route path='/categories' element={currentUser ? <Categories /> : <Login />} />
          <Route path='/categories/:category_id' element={currentUser ? <Category /> : <Login />} />
          <Route path='/categories/:category/:doctor_id' element={currentUser ? <Doctor /> : <Login />} />
          <Route path='/profile' element={currentUser ? <Profile /> : <Login />} />
          <Route path='/update-health-category' element={currentUser ? <UpdateHealthCategory /> : <Login />} />
          <Route path='/update-name-lastname' element={currentUser ? <UpdateName /> : <Login />} />

        </Routes>
      </BrowserRouter>
  );
}

export default App;
