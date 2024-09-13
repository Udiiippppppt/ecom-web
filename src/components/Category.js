import React from 'react';

const Category = ({ FinalCategory }) => {
  const categories = FinalCategory.map((category, index) => (
    <li key={index} className="bg-gray-200 p-3 cursor-pointer text-lg font-semibold rounded-md shadow-md mb-3 hover:bg-gray-300">
      {category.name}
    </li>
  ));

  return (
    <div className="container-cat">
      <h3 className="text-2xl font-bold py-4">Product Categories</h3>
      <ul className="space-y-2">
        {categories}
      </ul>
    </div>
  );
};

export default Category;
