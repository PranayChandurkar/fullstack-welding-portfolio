import React from 'react'
import { useProduct } from '../context/ProductContext';

const Item = ({category}) => {
    const { products } = useProduct();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <h2 className='text-2xl text-center font-semibold   mt-3'>Recent Work</h2>
      <div className="grid grid-cols-2 p-6 md:flex md:flex-row md:w-8xl flex-wrap md:justify-center gap-6">
        {products.map((product, i) => {
          if (product.category === category) {
            return (
              <div key={i} className="border-none p-1 flex justify-center items-center rounded shadow-md ">
                <img src={product.image} alt={product.name} className="w-60 h-60 object-cover mb-2" />
              </div>
            );
          }
          return null;
        })}
          
      </div>
        
    </div>
  )
}

export default Item