import { useContext } from "react";
import  { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const {user,loading}= useContext(AuthContext);
    const location= useLocation();
    //  console.log('Location Path',location.pathname);

    if(user){
        return children;
    }
    
    else if(loading){
        return <div className="text-center"><span className="loading loading-spinner loading-lg "></span></div>;
     }
    return <Navigate state={location.pathname} to={'/login'}></Navigate>
    
};

export default PrivateRoute;