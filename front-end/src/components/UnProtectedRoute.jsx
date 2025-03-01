import {Navigate, useLocation} from "react-router-dom"
//jwt  const token  = jwt.sign({admin_id: admin.admin_id, role: "admin"}, JWT_SECRET)

const UnProtectedRoute = ({children}) => {
    const location = useLocation()
    const userLevel = location.pathname.split("/")[1]
   
    const token = localStorage.getItem("token"); 

   
    if (token) {
        
        return <Navigate to = {`/${userLevel}/home`} /> ;
    }else{
        return children
    }
}


export default UnProtectedRoute;