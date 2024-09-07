import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ProductContainer from "../components/ProductContainer";


const Products = () => {
  return (
    <div>
      {/* navbar  */}
      <Navbar></Navbar>
      {/* product container*/}
      <ProductContainer></ProductContainer>
      {/* footer */}
      <Footer></Footer>
    </div>
  );
};

export default Products;