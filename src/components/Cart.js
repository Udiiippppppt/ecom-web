import React, { useState } from "react";

const Cart = () => {
  const mockData = [
    {
      id: 1,
      title: "Product A",
      price: "$10.00",
      quantity: 2,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      title: "Product B",
      price: "$15.00",
      quantity: 1,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      title: "Product C",
      price: "$20.00",
      quantity: 3,
      image: "https://via.placeholder.com/150",
    },
  ];

  const [cartItems, setCartItems] = useState(mockData);
  const [showPaymentOptions, setShowPaymentOptions] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");

  const increaseQuantity = (id) => {
    const updatedCartItems = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(updatedCartItems);
  };

  const decreaseQuantity = (id) => {
    const updatedCartItems = cartItems.map((item) =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCartItems(updatedCartItems);
  };

  const handleCheckout = () => {
    setShowPaymentOptions(true);
  };

  const handlePaymentMethodSelection = (event) => {
    setSelectedPaymentMethod(event.target.value);
  };

  const handlePayment = () => {
    if (!selectedPaymentMethod) {
      alert("Please select a payment method.");
      return;
    }

    alert(`Payment Successful via ${selectedPaymentMethod}!`);
    setCartItems([]);
    setShowPaymentOptions(false);
    setSelectedPaymentMethod("");
  };

  const cancelPayment = () => {
    setShowPaymentOptions(false);
    setSelectedPaymentMethod("");
  };

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + parseFloat(item.price.slice(1)) * item.quantity,
    0
  );
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="max-w-3xl mx-auto p-6 bg-gray-50 rounded-xl shadow-xl">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-700">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border-b border-gray-300 py-6"
            >
              <div className="flex items-center">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-24 h-24 object-cover rounded-lg mr-6 shadow-md"
                />
                <div className="mr-4">
                  <h2 className="text-2xl font-semibold text-gray-800">{item.title}</h2>
                  <p className="text-lg text-gray-600">{item.price}</p>
                </div>
              </div>
              <div className="flex items-center">
                <button
                  onClick={() => decreaseQuantity(item.id)}
                  className="text-gray-600 hover:text-red-500 transition-colors duration-200"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20 12H4"
                    />
                  </svg>
                </button>
                <input
                  type="text"
                  className="w-16 text-center border border-gray-300 mx-2 rounded-lg text-lg text-gray-700"
                  value={item.quantity}
                  readOnly
                />
                <button
                  onClick={() => increaseQuantity(item.id)}
                  className="text-gray-600 hover:text-green-500 transition-colors duration-200"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </button>
              </div>
              <button
                onClick={() =>
                  setCartItems(
                    cartItems.filter((cartItem) => cartItem.id !== item.id)
                  )
                }
                className="text-gray-600 hover:text-red-600 transition-colors duration-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          ))}
          {!showPaymentOptions && (
            <div className="flex justify-end mt-8">
              <button
                onClick={handleCheckout}
                className="bg-blue-600 text-white py-3 px-8 rounded-lg shadow-md hover:bg-blue-700 transition duration-300 text-lg font-semibold"
              >
                Checkout ({totalItems} items) - Total: ${totalPrice.toFixed(2)}
              </button>
            </div>
          )}
          {showPaymentOptions && (
            <div className="mt-8 border-t pt-8">
              <h2 className="text-3xl font-bold mb-6 text-center text-gray-700">
                Select Payment Method
              </h2>
              <div className="flex justify-center space-x-8">
                <div className="flex items-center space-x-3">
                  <input
                    type="radio"
                    id="online"
                    name="paymentMethod"
                    value="Online"
                    onChange={handlePaymentMethodSelection}
                    className="form-radio h-5 w-5 text-blue-600"
                  />
                  <label htmlFor="online" className="text-xl text-gray-700">
                    Online
                  </label>
                </div>
                <div className="flex items-center space-x-3">
                  <input
                    type="radio"
                    id="upi"
                    name="paymentMethod"
                    value="UPI"
                    onChange={handlePaymentMethodSelection}
                    className="form-radio h-5 w-5 text-blue-600"
                  />
                  <label htmlFor="upi" className="text-xl text-gray-700">
                    UPI
                  </label>
                </div>
                <div className="flex items-center space-x-3">
                  <input
                    type="radio"
                    id="creditCard"
                    name="paymentMethod"
                    value="Credit Card"
                    onChange={handlePaymentMethodSelection}
                    className="form-radio h-5 w-5 text-blue-600"
                  />
                  <label htmlFor="creditCard" className="text-xl text-gray-700">
                    Credit Card
                  </label>
                </div>
                <div className="flex items-center space-x-3">
                  <input
                    type="radio"
                    id="other"
                    name="paymentMethod"
                    value="Other"
                    onChange={handlePaymentMethodSelection}
                    className="form-radio h-5 w-5 text-blue-600"
                  />
                  <label htmlFor="other" className="text-xl text-gray-700">
                    Other
                  </label>
                </div>
              </div>

              {/* Payment and Cancel buttons */}
              <div className="flex justify-center mt-8">
                <button
                  onClick={handlePayment}
                  className="bg-green-600 text-white py-3 px-8 rounded-lg shadow-md hover:bg-green-700 transition duration-300 text-lg font-semibold mr-4"
                >
                  Pay Now
                </button>
                <button
                  onClick={cancelPayment}
                  className="bg-red-600 text-white py-3 px-8 rounded-lg shadow-md hover:bg-red-700 transition duration-300 text-lg font-semibold"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Cart;
