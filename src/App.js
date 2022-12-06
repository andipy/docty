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
import GroupChats from "./pages/GroupChats";
import PrivateChats from "./pages/PrivateChats";


import { collection, query, where, onSnapshot } from "firebase/firestore";
import { app, db } from "./services/firebase"

function App() {

  const [currentUser, setCurrentUser] = useContext(AuthContext);

  const [user, setUser] = useState({});  
  const getUser = async() => {
    const q = query(collection(db, "users"), where("uid", "==", currentUser.uid));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      querySnapshot.forEach((doc) => {
          setUser(doc.data());
      })
    });
    return unsubscribe;
  }
  useEffect(()=>{
    getUser();
  },[currentUser]);

  const defineRoutePermission = (route, permissioned) => {
    if ( currentUser ) {
      if ( user.role == "PATIENT" ) {
        return route
      }
      if ( user.role == "DOCTOR" ) {
        if ( user.health_category ) {
          return route
        }
        if ( !user.health_category ) {
          return <UpdateHealthCategory />
        }
      }
    } else if ( !currentUser ) {
      if ( !permissioned ) {
        return route
      } else {
        return <Login />
      }
    }
  }

  const routes = [
    {
      route: "/role",
      component: <Role />,
      protected: false
    },{
      route: "/signup",
      component: <Signup />,
      protected: false
    },{
      route: "/signup-doctor",
      component: <SignupDoctor />,
      protected: false
    },{
      route: "/login",
      component: <Login />,
      protected: false
    },{
      route: "/categories",
      component: <Categories />,
      protected: true
    },{
      route: "/categories/:category_id",
      component: <Category />,
      protected: true
    },{
      route: "/categories/:category/:doctor_id",
      component: <Doctor />,
      protected: true
    },{
      route: "/profile",
      component: <Profile />,
      protected: true
    },{
      route: "/update-health-category",
      component: <UpdateHealthCategory />,
      protected: true
    },{
      route: "/update-name-lastname",
      component: <UpdateName />,
      protected: true
    },{
      route: "/group-chats",
      component: <GroupChats />,
      protected: true
    },{
      route: "/private-chats",
      component: <PrivateChats />,
      protected: true
    }
  ]

  return (    
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navigate to='/role' replace />} />

          {routes.map((route) => {
            return <Route
              key={route.route}
              path={route.route}
              element={defineRoutePermission(route.component, route.protected)}
            />
          })}

        </Routes>
      </BrowserRouter>
  );
}

export default App;
