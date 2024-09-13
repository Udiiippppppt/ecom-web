import React, { useState } from 'react';

const ProductItems = ({ pdata, addToCart }) => {
  const [showDescription, setShowDescription] = useState(false);

  const toggleDescription = () => {
    setShowDescription((prevState) => !prevState);
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden mb-6">
      <img src={pdata.thumbnail} alt={pdata.title} className="w-full h-64 object-cover" />
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2">{pdata.title}</h3>
        <div className="flex items-center mb-3">
          <span className="text-yellow-500">★★★★☆</span>
          <span className="ml-2 text-gray-700">(123 reviews)</span>
        </div>
        <p className="text-gray-700 text-xl font-semibold mb-3">${pdata.price}</p>
        <p className={`text-${pdata.inStock ? 'green' : 'red'}-600 mb-4`}>
          {pdata.inStock ? 'In Stock' : 'Out of Stock'}
        </p>
        <div className="flex flex-col md:flex-row items-center md:space-x-4">
          <button
            onClick={toggleDescription}
            className="flex-grow md:flex-grow-0 bg-blue-500 text-sm text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none mb-2 md:mb-0 transition-colors"
            style={{ minWidth: '100px' }}
          >
            {showDescription ? 'Hide Details' : 'Show Details'}
          </button>
          <button
            onClick={() => addToCart(pdata)}
            className="flex-grow md:flex-grow-0 bg-green-500 text-sm text-white px-4 py-2 rounded hover:bg-green-600 focus:outline-none transition-colors"
            style={{ minWidth: '100px' }}
          >
            Add to Cart
          </button>
        </div>
        {showDescription && (
          <p className="text-gray-600 mt-4">{pdata.description}</p>
        )}
      </div>
    </div>
  );
};

export default ProductItems;
