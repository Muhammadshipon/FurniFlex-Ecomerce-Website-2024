import { Outlet, ScrollRestoration } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ProductContainer from "../components/ProductContainer";
import OrderDetails from "../components/OrderDetails";


const Products = () => {
  return (
    <div>
      {/* navbar  */}
      <Navbar></Navbar>

      {/* product container and order details*/}
      <Outlet>
      </Outlet>
     
      {/* footer */}
      <Footer></Footer>
      <ScrollRestoration></ScrollRestoration>
    </div>
  );
};

export default Products;