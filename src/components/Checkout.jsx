import  { useContext, useState } from "react";
import { OrderProductsContext } from "../Provider/OrderProductsProvider";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Checkout = () => {
  const { orderProducts,setOrderProducts } = useContext(OrderProductsContext);
  const [form, setForm] = useState({
    fullName: "",
    address: "",
    city: "",
    postalCode: "",
    paymentMethod: "credit-card",
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Order placed:", { orderProducts, form });
    // Clear cart after successful order
    localStorage.removeItem("orderProducts");
    setOrderProducts([]); 
    Swal.fire({
      
      icon: "success",
      title: "Thanks for your payment",
      showConfirmButton: true,
     
    });
    
    navigate("/products");
  };

  const totalPrice = orderProducts.reduce((sum, current) => sum + current.quantity * current.discountedPrice, 0);

  return (
    <div className="min-h-screen  flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg my-10">
        <h2 className="text-2xl font-bold mb-6 text-center">Checkout</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Full Name:</label>
            <input
              type="text"
              name="fullName"
              value={form.fullName}
              onChange={handleInputChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-gray-500 focus:border-gray-500 p-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Address:</label>
            <input
              type="text"
              name="address"
              value={form.address}
              onChange={handleInputChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-gray-500 focus:border-gray-500 p-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">City:</label>
            <input
              type="text"
              name="city"
              value={form.city}
              onChange={handleInputChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-gray-500 focus:border-gray-500 p-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Postal Code:</label>
            <input
              type="text"
              name="postalCode"
              value={form.postalCode}
              onChange={handleInputChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-gray-500 focus:border-gray-500 p-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Payment Method:</label>
            <select
              name="paymentMethod"
              value={form.paymentMethod}
              onChange={handleInputChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-gray-500 focus:border-gray-500 p-2"
            >
              <option value="credit-card">Credit Card</option>
              <option value="paypal">PayPal</option>
            </select>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 text-center">Total Price: <span className="text-blue-600">${totalPrice}</span></h3>
          <button
            type="submit"
            className="w-full mt-4 bg-black text-white py-2 rounded-md hover:bg-blue-400 transition duration-300"
          >
            Place Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
