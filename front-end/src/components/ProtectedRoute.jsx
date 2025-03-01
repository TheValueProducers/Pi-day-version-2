import React from "react";
import {Navigate, useLocation} from "react-router-dom"
import { jwtDecode } from "jwt-decode";


//jwt  const token  = jwt.sign({admin_id: admin.admin_id, role: "admin"}, JWT_SECRET)

const ProtectedRoute = ({children}) => {
    const location = useLocation()
    const token = localStorage.getItem("token"); 

    // ✅ Check if token exists and is in the correct format
    if (!token || token.split(".").length !== 3) {
        console.error("Invalid or missing token");
        localStorage.removeItem("token");
        return <Navigate to="/sign-in" replace />;
    }
    
    const decodedToken = jwtDecode(token)
    const {role} = decodedToken;
    
    const roleFromPath = location.pathname.split("/")[1];
    if (role !== roleFromPath) {
        return <Navigate to="/sign-in" replace />;
    }

    return children;
}


export default ProtectedRoute;