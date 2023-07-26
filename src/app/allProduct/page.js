import React from 'react';
import getAllProducts from '@/utils/getAllProducts';
import ProductCard from '@/components/ProductCard';

const  AllProduct = async () => {

    const products = await getAllProducts();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
      {products.length ? (
        products.map((product, index) => <ProductCard key={index} product={product} />)
      ) : (
        <span className="loading loading-spinner text-success"></span>
      )}
 
    </div>
  );
};

export default AllProduct;