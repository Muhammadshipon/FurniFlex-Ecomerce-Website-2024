import { useContext, useState} from "react";
import { IoBagOutline } from "react-icons/io5";
import { OrderProductsContext } from "../Provider/OrderProductsProvider";
import 'animate.css';
;

const ProductCard = ({product}) => {
  const [showAnimation, setShowAnimation] = useState(false);

  const handleAnimation=()=>{
    setShowAnimation(true);
    setTimeout(() => {
      setShowAnimation(false);
    }, 1500);
  }
  
   
  const {addToCart} = useContext(OrderProductsContext);
 const {id,name, category, price, discount, discountedPrice, shortDescription, image} = product;
   
  return (
    <div className="card  max-w-80 shadow-sm border max-h-[500px] hover:bg-gray-50 hover:scale-95">
  <figure className="p-5">
    <img
      src={image}
      alt="Chairs"
      className=" pt-7 rounded-xl h-[260px] w-full" />
  </figure>
  <div className="card-body items-start  text-left">
    <h2 className="card-title ">{name}</h2>
    <div className="flex justify-between w-full">
      <p className="font-bold text-xl">${discountedPrice}</p>
      <p className="font-semibold text-xl text-gray-400 line-through">${price}</p>
      <p className="font-bold text-xl text-rose-700">{discount}% OFF</p>
    </div>
    <p className="text-sm font-light">{shortDescription}</p>
    <div className="card-actions w-full mt-5">
      <button onClick={()=>{addToCart(id);handleAnimation()}} className="btn text-white font-semibold hover:text-black bg-black w-full"><span className="text-xl"><IoBagOutline /></span>Add to cart</button>
                              {/* Animation */}
      {showAnimation && (
              <div className="absolute left-[40%] top-[60%] text-gray-400 text-2xl font-bold animate__animated animate__fadeInUp">
                +1
              </div>
            )}
    </div>
  </div>
</div>
  );
};

export default ProductCard;