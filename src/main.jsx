import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import SignUp from './Pages/SignUp';
import SignIn from './Pages/SignIn';
import AuthProvider from './Provider/AuthProvider';
import Products from './Pages/Products';
import PrivateRoute from './privateRoute/PrivateRoute';
import ProductProvider from './Provider/ProductProvider';

const router = createBrowserRouter([
  {
    path: "/",
    element: <SignUp></SignUp>,
  },
  {
    path:"/sign-in",
    element:<SignIn></SignIn>
  },
  {
    path:"/products",
    element:<PrivateRoute><Products></Products></PrivateRoute>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <AuthProvider>
   <ProductProvider>
 <RouterProvider router={router} />
   </ProductProvider>
   </AuthProvider>
  </StrictMode>,
)
