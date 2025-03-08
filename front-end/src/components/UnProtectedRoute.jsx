import {Navigate, useLocation} from "react-router-dom"
import { jwtDecode } from "jwt-decode"
//jwt  const token  = jwt.sign({admin_id: admin.admin_id, role: "admin"}, JWT_SECRET)

const UnProtectedRoute = ({children}) => {
    const location = useLocation()
    
   
    const token = localStorage.getItem("token"); 

   
    if (token) {
        const {role} = jwtDecode(token)
        
        return <Navigate to = {`/${role}/home`} /> ;
    }else{
        return children
    }
}


export default UnProtectedRoute;