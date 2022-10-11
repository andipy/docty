import React, { useContext } from "react";
import { Route, Navigate } from "react-router-dom";
import { AuthContext } from '../context/AuthContext';

const PrivateRoute = ({ element: Element, ...rest }) => {

    const [currentUser, setCurrentUser] = useContext(AuthContext);

    return (
        <Route
            {...rest}
            render={(props) => {
                return currentUser ? <Element {...props} /> : <Navigate replace to="/login" />
            }}
        ></Route>
    )
}

export default PrivateRoute;