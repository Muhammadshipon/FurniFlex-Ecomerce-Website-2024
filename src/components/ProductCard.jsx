import { IoBagOutline } from "react-icons/io5";

;

const ProductCard = ({product}) => {
 const {id,name, category, price, discount, discountedPrice, shortDescription, image} = product;
   
  return (
    <div className="card  max-w-80 shadow-sm border max-h-[500px]">
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
      <button className="btn text-white font-semibold hover:text-black bg-black w-full"><span className="text-xl"><IoBagOutline /></span>Add to cart</button>
    </div>
  </div>
</div>
  );
};

export default ProductCard;