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
import OrderProductsProvider from './Provider/OrderProductsProvider';
import ProductContainer from './components/ProductContainer';
import OrderDetails from './components/OrderDetails';

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
    element:<PrivateRoute><Products></Products></PrivateRoute>,
    children:[
      {
        path:"/products",
        element:<PrivateRoute><ProductContainer></ProductContainer></PrivateRoute>
      },
      {
        path:'/products/order-details',
        element:<PrivateRoute><OrderDetails></OrderDetails></PrivateRoute>
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <AuthProvider>
   
   
   
   <ProductProvider>
   <OrderProductsProvider>
 <RouterProvider router={router} />
 </OrderProductsProvider>
   </ProductProvider>
   </AuthProvider>
  </StrictMode>,
)
