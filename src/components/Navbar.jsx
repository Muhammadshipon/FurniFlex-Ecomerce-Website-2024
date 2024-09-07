import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { FaUserAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { PiHandbagBold } from "react-icons/pi";


const Navbar = () => {
  const navigate = useNavigate();
  const {user,logOutUser} = useContext(AuthContext);
  const link=<>
   <li><a>Home</a></li>
   <li className="bg-gray-100 rounded-xl font-semibold"><a>Products</a></li>
   <li><a>Categories</a></li>
   <li><a>Custom</a></li>
   <li><a>Blog</a></li>    
             </>
  return (
    <div className="navbar bg-base-100 lg:px-14">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
       {link}
      </ul>
    </div>
    <a className="btn btn-ghost text-2xl"><img src="/src/assets/Furniflexicon.png" alt="" /><span>Furni<span className="text-blue-400">Flex</span></span></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {link}
    </ul>
  </div>

  <div className="navbar-end ">
 
  <span className=" text-4xl"><PiHandbagBold /></span>
  <span className="relative right-5 top-2 text-white w-6 h-6 rounded-full bg-black flex items-center justify-center"><span>15</span></span>
  <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button"  className="btn btn-ghost btn-circle avatar">
        <div className="w-12 rounded-full bg-gray-100">
          {
            user.photoURL? <img
            alt=""
            src={user?.photoURL} />:
          <span className="text-2xl relative left-3 top-2">  <FaUserAlt ></FaUserAlt></span>
          }
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li onClick={()=> logOutUser()}><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
  );
};

export default Navbar;