import React, { useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const RequireAuth = ({children}) => {
    const [token, setToken] = useState(localStorage.accessToken);
    // const [user] = useAuthState(auth);
    const location=useLocation();
    if(!token){
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return  children;
};

export default RequireAuth;