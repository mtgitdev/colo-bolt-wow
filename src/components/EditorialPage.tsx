import React from 'react';
import { ArrowRight } from 'lucide-react';

const editorials = [
  {
    id: 1,
    title: "The New Avant-Garde",
    subtitle: "Spring/Summer 2024",
    category: "FASHION",
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80",
    description: "Exploring the intersection of contemporary art and fashion through the lens of emerging designers.",
    date: "March 15, 2024"
  },
  {
    id: 2,
    title: "In Conversation: Future of Luxury",
    subtitle: "Interview Series",
    category: "CULTURE",
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&q=80",
    description: "A deep dive into the evolving landscape of luxury fashion with industry leaders.",
    date: "March 12, 2024"
  },
  {
    id: 3,
    title: "Street Style: Tokyo Fashion Week",
    subtitle: "Photo Essay",
    category: "STYLE",
    image: "https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?auto=format&fit=crop&q=80",
    description: "Capturing the most compelling looks from Tokyo's fashion-forward streets.",
    date: "March 10, 2024"
  },
  {
    id: 4,
    title: "Sustainable Fashion: Beyond Greenwashing",
    subtitle: "Analysis",
    category: "SUSTAINABILITY",
    image: "https://images.unsplash.com/photo-1523381294911-8d3cead13475?auto=format&fit=crop&q=80",
    description: "An honest look at sustainability initiatives in the fashion industry.",
    date: "March 8, 2024"
  }
];

interface EditorialPageProps {
  setSelectedEditorial: (id: number) => void;
}

const EditorialPage: React.FC<EditorialPageProps> = ({ setSelectedEditorial }) => {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-[1800px] mx-auto px-4">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-4xl font-light mb-4">EDITORIAL</h1>
          <p className="text-gray-600 max-w-2xl">
            In-depth features, interviews, and analysis exploring the intersection of style, art, and culture.
          </p>
        </div>

        {/* Featured Editorial */}
        <div 
          className="grid grid-cols-2 gap-8 mb-24 cursor-pointer"
          onClick={() => setSelectedEditorial(editorials[0].id)}
        >
          <div className="aspect-[4/3] overflow-hidden">
            <img 
              src={editorials[0].image}
              alt={editorials[0].title}
              className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="flex flex-col justify-center">
            <span className="text-sm mb-4">{editorials[0].category}</span>
            <h2 className="text-3xl font-light mb-4">{editorials[0].title}</h2>
            <p className="text-xl text-gray-600 mb-6">{editorials[0].subtitle}</p>
            <p className="text-gray-600 mb-8">{editorials[0].description}</p>
            <button className="flex items-center gap-2 text-sm hover:gap-4 transition-all duration-300">
              READ MORE <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* Editorial Grid */}
        <div className="grid grid-cols-3 gap-8">
          {editorials.slice(1).map((editorial) => (
            <div 
              key={editorial.id} 
              className="group cursor-pointer"
              onClick={() => setSelectedEditorial(editorial.id)}
            >
              <div className="aspect-[4/3] mb-6 overflow-hidden">
                <img 
                  src={editorial.image}
                  alt={editorial.title}
                  className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <span className="text-sm mb-2 block">{editorial.category}</span>
              <h3 className="text-xl font-light mb-2">{editorial.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{editorial.subtitle}</p>
              <p className="text-gray-500 text-sm">{editorial.date}</p>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="mt-24 py-16 border-t border-gray-100">
          <div className="max-w-xl">
            <h3 className="text-2xl font-light mb-4">Newsletter</h3>
            <p className="text-gray-600 mb-6">
              Subscribe to receive our latest stories, interviews, and features.
            </p>
            <div className="flex gap-4">
              <input 
                type="email" 
                placeholder="Email Address"
                className="flex-1 px-4 py-2 border border-gray-200 focus:border-gray-400 outline-none transition-colors"
              />
              <button className="px-8 py-2 bg-black text-white hover:bg-gray-800 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditorialPage;