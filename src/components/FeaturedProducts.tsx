import React from 'react';

const products = [
  {
    id: 1,
    name: 'Oversized Cotton Shirt',
    brand: 'Jil Sander',
    price: '$450',
    image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&q=80'
  },
  {
    id: 2,
    name: 'Tailored Wool Blazer',
    brand: 'The Row',
    price: '$2,890',
    image: 'https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?auto=format&fit=crop&q=80'
  },
  {
    id: 3,
    name: 'Leather Ankle Boots',
    brand: 'Bottega Veneta',
    price: '$1,250',
    image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&q=80'
  },
  {
    id: 4,
    name: 'Structured Shoulder Bag',
    brand: 'Lemaire',
    price: '$980',
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80'
  }
];

const FeaturedProducts = () => {
  return (
    <div className="px-4 mb-16">
      <h2 className="text-2xl font-light mb-8">NEW ARRIVALS</h2>
      <div className="grid grid-cols-4 gap-4">
        {products.map((product) => (
          <div key={product.id} className="group cursor-pointer">
            <div className="aspect-[3/4] mb-4 overflow-hidden">
              <img 
                src={product.image}
                alt={product.name}
                className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="space-y-1">
              <p className="text-sm">{product.brand}</p>
              <p className="text-sm text-gray-600">{product.name}</p>
              <p className="text-sm">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;