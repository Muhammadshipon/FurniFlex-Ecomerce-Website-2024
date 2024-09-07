import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext} from "../Provider/AuthProvider";


const PrivateRoute = ({children}) => {
  const {user,loading} = useContext(AuthContext);
 
 
  if(user){
    return children
  }
  if(loading){
    return <div className="flex items-center justify-center min-h-screen"><span className="loading loading-bars  text-white loading-xs"></span>
    <span className="loading loading-bars loading-sm text-gray-400"></span>
    <span className="loading loading-bars  text-gray-400 loading-md"></span>
    <span className="loading loading-bars loading-lg  text-gray-400"></span></div>
  }
  return <Navigate to={"/sign-in"} ></Navigate>
};

export default PrivateRoute;