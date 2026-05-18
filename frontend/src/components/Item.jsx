import React from 'react'
import { useProduct } from '../context/ProductContext';

const Item = ({category}) => {
    const { products, loading } = useProduct();
  return (
    <div className="flex flex-col items-center justify-center pb-20 px-6 md:px-20 lg:px-24 w-full bg-zinc-950">
      <div className="text-center mb-12">
        <h2 className='text-3xl md:text-4xl font-bold text-white mb-4'>Recent Work</h2>
        <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-7xl mx-auto">
        {loading ? (
            [...Array(4)].map((_, index) => (
                <div key={index} className="animate-pulse bg-zinc-900 rounded-2xl aspect-square border border-zinc-800 w-full shadow-lg"></div>
            ))
        ) : (
            products.map((product, i) => {
              if (product.category === category) {
                return (
                  <div key={i} className="group relative rounded-2xl overflow-hidden shadow-lg shadow-black/50 hover:shadow-2xl hover:shadow-blue-900/20 transition-all duration-300 hover:-translate-y-1 bg-zinc-900 aspect-square border border-zinc-800">
                    <img src={product.image} alt={product.name || 'Recent Work'} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-0 left-0 w-full p-4 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <p className="text-white font-medium text-sm text-center">View Project</p>
                    </div>
                  </div>
                );
              }
              return null;
            })
        )}
      </div>
    </div>
  )
}

export default Item