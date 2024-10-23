import React from 'react';

interface EditorialSectionProps {
  setCurrentPage: (page: string) => void;
  setSelectedEditorial: (id: number) => void;
}

const EditorialSection: React.FC<EditorialSectionProps> = ({ setCurrentPage, setSelectedEditorial }) => {
  const handleEditorialClick = (id: number) => {
    setSelectedEditorial(id);
    setCurrentPage('editorial');
  };

  return (
    <div className="px-4 mb-16">
      <h2 className="text-2xl font-light mb-8">EDITORIAL</h2>
      <div className="grid grid-cols-2 gap-4">
        <div 
          className="space-y-4 cursor-pointer group"
          onClick={() => handleEditorialClick(1)}
        >
          <div className="aspect-[4/5] overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80"
              alt="Editorial"
              className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-medium group-hover:opacity-70 transition-opacity">
              Style Guide: Spring 2024
            </h3>
            <p className="text-sm text-gray-600">
              Explore the season's most compelling trends and how to wear them.
            </p>
          </div>
        </div>
        <div 
          className="space-y-4 cursor-pointer group"
          onClick={() => handleEditorialClick(2)}
        >
          <div className="aspect-[4/5] overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&q=80"
              alt="Editorial"
              className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-medium group-hover:opacity-70 transition-opacity">
              Designer Focus: New Wave
            </h3>
            <p className="text-sm text-gray-600">
              Meet the emerging designers reshaping luxury fashion.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditorialSection;