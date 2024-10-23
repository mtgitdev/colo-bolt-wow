import React from 'react';

const Hero = () => {
  return (
    <div className="grid grid-cols-2 gap-4 px-4 mb-16">
      <div className="relative aspect-[3/4] group cursor-pointer">
        <img 
          src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80"
          alt="Womenswear"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300" />
        <div className="absolute bottom-8 left-8">
          <h2 className="text-white text-4xl font-light">WOMENSWEAR</h2>
          <p className="text-white mt-2">SS24 Collection</p>
        </div>
      </div>
      <div className="relative aspect-[3/4] group cursor-pointer">
        <img 
          src="https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?auto=format&fit=crop&q=80"
          alt="Menswear"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300" />
        <div className="absolute bottom-8 left-8">
          <h2 className="text-white text-4xl font-light">MENSWEAR</h2>
          <p className="text-white mt-2">SS24 Collection</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;