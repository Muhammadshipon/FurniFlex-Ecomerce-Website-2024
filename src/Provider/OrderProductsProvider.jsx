import { createContext, useContext, useState } from "react";
import { ProductContext } from "./ProductProvider";

export const OrderProductsContext = createContext();


const OrderProductsProvider = ({children}) => {
 
  const [orderProducts,setOrderProducts] = useState([]);
  const {products} = useContext(ProductContext);
  console.log(products);

              //  add product to the cart 
  const addToCart =(id)=>{
    const filterOrder=products?.find(p=>p.id===id);
    setOrderProducts(pre=>{
     const existingProductIndex=pre?.findIndex(p=>p.id===id);
     if(existingProductIndex !== -1){
        const updatedProduct=[...pre];
        updatedProduct[existingProductIndex]={...updatedProduct[existingProductIndex],quantity:updatedProduct[existingProductIndex]?.quantity + 1};
        return updatedProduct;
     }
     else{
      return [...pre,{...filterOrder,quantity: 1}];
     }
    })
  }


                // remove product from the cart 
  const removeFromCart=(id)=>{
    const updateOrderProducts=orderProducts.filter(p=>p.id!==id);
    setOrderProducts(updateOrderProducts);
  }

 
              //  Decrease the same product quantity from the cart 
  const decreaseTheSameProductQuantity=(id)=>{
    // const filterProduct = orderProducts.find(p=>p.id===id);
    setOrderProducts(pre=>{
    const existingProductIndex=pre.findIndex(p=>p.id===id);
    const updatedProduct=[...pre];
    updatedProduct[existingProductIndex]={...updatedProduct[existingProductIndex],quantity:updatedProduct[existingProductIndex].quantity - 1};
    return updatedProduct;
    })
   
  }


  const orderInfo ={
    orderProducts,
    addToCart,
    removeFromCart,
    decreaseTheSameProductQuantity,
  
  }
  return (
    <OrderProductsContext.Provider value={orderInfo}>
      {children}
    </OrderProductsContext.Provider>
  );
};

export default OrderProductsProvider;