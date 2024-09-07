import { useContext } from "react";
import { OrderProductsContext } from "../Provider/OrderProductsProvider";
import { RxCross2 } from "react-icons/rx";
import { IoMdInformationCircleOutline } from "react-icons/io";


const OrderDetails = () => {
  const {
    orderProducts,
    addToCart,
    removeFromCart,
    decreaseTheSameProductQuantity
  } = useContext(OrderProductsContext);
  console.log(orderProducts);

  const totalPrice = orderProducts?.reduce((sum,current)=>sum+current.quantity*current.discountedPrice,0)
  return (
   <div className="min-h-screen max-w-7xl mx-auto lg:gap-36 flex flex-col lg:flex-row my-16 px-6 justify-between items-center lg:items-start ">
          
          
          {/* order overview section */}
    <section className="lg:w-3/5 w-full">
      <h3 className="font-bold text-2xl mb-10">An overview of your order</h3>
    <div>
      {
        orderProducts?.map((product,idx)=><div key={idx} className="py-10 border-b flex justify-between lg:bg-slate-50 px-8 gap-3">
        <div className="flex gap-2">
        <div className="flex justify-center items-center gap-8">
         <div className="btn text-xl">
          <span onClick={()=>decreaseTheSameProductQuantity(product.id)} className="hover:scale-150 hover:pr-5">-</span><span>{product.quantity===0?removeFromCart(product.id):product.quantity}</span><span onClick={()=>addToCart(product.id)} className="hover:scale-150 hover:pl-2">+</span>
           </div>
           <img src={product.image} className="md:w-20 md:h-20 w-10 h-10 rounded-2xl" />
         </div>
         <p className="font-semibold ml-8">{product.name}</p>
        </div>
          <div className="flex flex-col justify-between items-end">
            <span onClick={()=>removeFromCart(product.id)} className="hover:scale-150 text-xl"><RxCross2 /></span>
            <span className="font-bold">${product.discountedPrice*product.quantity}</span>
          </div>

        </div>)
     
      }
    </div>
      </section>    







      {/* order details section    */}
    <section className="w-full lg:w-2/5">
     <h3 className="font-bold text-2xl mb-10">Order Details</h3>
     <div className="max-w-[400px] border-2 rounded-2xl p-6 bg-slate-50">
      <div className="flex justify-between text-xl text-gray-500 "><span>Subtotal</span><span>${totalPrice}</span></div>
      <div className="flex justify-between text-xl text-gray-500 "><span>Shipping</span><span>Free</span></div>
      <div className="flex justify-between text-xl text-gray-500 pb-3"><span className="flex items-center gap-2">Estimated Tax <IoMdInformationCircleOutline /></span><span>$-</span></div>
      <div className="flex justify-between text-xl font-bold text-black border-t-2 py-3"><span>Total</span>${totalPrice}</div>
     
     </div>
     <button className="max-w-[400px] btn w-full mt-6 bg-black text-white hover:text-black">GO TO CHECKOUT</button>
      </section> 
      
   </div>
  );
};

export default OrderDetails;