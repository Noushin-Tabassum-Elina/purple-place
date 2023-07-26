import Link from 'next/link';
import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="card w-64 md:w-96 bg-base-100 shadow-xl shadow-purple-500">
      <figure className="px-10 pt-10">
        <img src={product.images} alt={product.name} className="rounded-xl h-56 w-full overflow-hidden" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{product.name}</h2>
        <p>{product.description}</p>
        <p className="font-bold text-xl">{product.price}</p>
        <div className="card-actions">
          <button className="btn btn-primary"><Link href={`/allProduct/${product.id}`}>View Details</Link></button>
        </div>
        <div className="mt-4 flex space-x-2">
          {product.sizes.map((size, index) => (
            <span key={index} className="badge badge-primary">
              {size}
            </span>
          ))}
        </div>
        <div className="mt-2 flex space-x-2">
          {product.colors.map((color, index) => (
            <span key={index} className="badge badge-accent">
              {color}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
