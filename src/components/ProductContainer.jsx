import { useContext, useState } from "react";
import { ProductContext } from "../Provider/ProductProvider";
import ProductCard from "./ProductCard";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";


const ProductContainer = () => {
  const {products} = useContext(ProductContext);
  const [category,setCategory] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage=6;


            // functionality for categorize products 
  let filterProducts = products;
  if(category){
    filterProducts=filterProducts.filter(p=>p.category===category);
  }

  // calculate the index of the first and last products of the current page 
 const indexOfLastProduct =currentPage*productsPerPage;
 const indexOfFirstProduct =indexOfLastProduct-productsPerPage;

  //  slice the products array to get the products of current page 
  const currentPageProducts = filterProducts.slice(indexOfFirstProduct,indexOfLastProduct);

      //  function to handle next page 
  const nextPage=( )=>{
    setCurrentPage((prevPage)=>Math.min(prevPage+1,Math.ceil(filterProducts.length/productsPerPage)))
  }    
          // function to handle previous page 
  const previousPage=()=>{
    setCurrentPage((prevPage)=>Math.max(prevPage-1,1))
  }  
  
  


  return (
    <div className="min-h-screen max-w-7xl mx-auto gap-5 flex flex-col md:flex-row my-16 px-6 justify-between items-center md:items-start">

           {/*category side bar  */}
     <aside className="  p-8 border-x flex flex-col">
      <div  onClick={()=>setCategory('')} className={`bg-white px-8 py-2 rounded-xl border-b hover:bg-black  hover:text-white font-semibold btn ${category===''?'bg-black text-white ':'bg-white'}`}>
        <p >All Products</p></div>
      <div  onClick={()=>setCategory('Rocking Chair')}  className={`bg-white px-8 py-2 rounded-xl border-b hover:bg-black  hover:text-white font-semibold btn ${category==='Rocking Chair'?'bg-black text-white':'bg-white'}`}>
        <p >Rocking Chair</p></div>
      <div  onClick={()=>setCategory('Side Chair')} className={`bg-white px-8 py-2 rounded-xl border-b hover:bg-black  hover:text-white font-semibold btn ${category==='Side Chair'?'bg-black text-white':'bg-white'}`}>
        <p >Side Chair</p></div>
      <div onClick={()=>setCategory('Lounge Chair')} className={`bg-white px-8 py-2 rounded-xl border-b hover:bg-black  hover:text-white font-semibold btn ${category==='Lounge Chair'?'bg-black text-white':'bg-white'}`}>
        <p >Lounge Chair</p></div>
     </aside>

          {/* product container section  */}
     <section >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {
        currentPageProducts?.slice(0,11).map(product=><ProductCard key={product.id} product={product}></ProductCard>)
       }
      </div>
      
       
                        {/* pagination button section  */}
     <div className="text-center mt-10 flex justify-center items-center space-x-2">
  {/* Previous Button */}
  <button onClick={previousPage} disabled={currentPage === 1} className="btn">
  <GrFormPrevious />
  </button>

  {/* Page Numbers Display */}
  {Array.from({ length: Math.ceil(filterProducts.length / productsPerPage) }, (_, index) => (
    <button
      key={index + 1}
      onClick={() => setCurrentPage(index + 1)}
      className={`btn rounded-lg ${
        currentPage === index + 1 ? "bg-black text-white" : "bg-gray-200"
      } hover:bg-orange-300`}
    >
      {index + 1}
    </button>
  ))}

  {/* Next Button */}
  <button onClick={nextPage} disabled={currentPage === Math.ceil(products.length / productsPerPage)} className="btn">
  <GrFormNext />
  </button>
</div>
         

     </section>
    </div>
  );
};

export default ProductContainer;