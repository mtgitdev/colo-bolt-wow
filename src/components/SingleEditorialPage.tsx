import React from 'react';
import { ArrowLeft, Share2, Bookmark } from 'lucide-react';

interface SingleEditorialPageProps {
  editorialId: number;
  onBack: () => void;
}

const editorialContent = {
  id: 1,
  title: "The New Avant-Garde",
  subtitle: "Spring/Summer 2024",
  category: "FASHION",
  author: "Sarah Chen",
  date: "March 15, 2024",
  readTime: "8 min read",
  mainImage: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80",
  content: [
    {
      type: "text",
      content: "In an era where fashion increasingly blurs the lines between art and commerce, a new wave of designers is emerging, challenging conventional notions of luxury and beauty. These creative forces are redefining what it means to be avant-garde in the 2020s, bringing fresh perspectives to age-old craftsmanship while embracing sustainable practices and innovative technologies."
    },
    {
      type: "image",
      url: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?auto=format&fit=crop&q=80",
      caption: "Behind the scenes at the Atelier"
    },
    {
      type: "heading",
      content: "The Rise of New Materials"
    },
    {
      type: "text",
      content: "At the forefront of this movement is the exploration of novel materials. Designers are experimenting with bio-fabricated textiles, recycled composites, and digital printing techniques that were unimaginable just a decade ago. These innovations are not merely technical achievements; they represent a fundamental shift in how we think about luxury and exclusivity."
    },
    {
      type: "image",
      url: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80",
      caption: "Innovative textile development process"
    },
    {
      type: "heading",
      content: "Digital Meets Physical"
    },
    {
      type: "text",
      content: "The integration of digital technologies into traditional craftsmanship has opened new avenues for creative expression. Augmented reality experiences, blockchain authentication, and AI-generated patterns are becoming integral parts of the modern fashion landscape, creating immersive experiences that extend beyond the physical garment."
    }
  ],
  relatedArticles: [
    {
      id: 2,
      title: "In Conversation: Future of Luxury",
      image: "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&q=80",
      category: "CULTURE"
    },
    {
      id: 3,
      title: "Street Style: Tokyo Fashion Week",
      image: "https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?auto=format&fit=crop&q=80",
      category: "STYLE"
    }
  ]
};

const SingleEditorialPage: React.FC<SingleEditorialPageProps> = ({ onBack }) => {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-[1800px] mx-auto px-4">
        {/* Navigation */}
        <button 
          onClick={onBack}
          className="flex items-center gap-2 mb-8 hover:opacity-70 transition-opacity"
        >
          <ArrowLeft size={20} />
          <span>Back to Editorial</span>
        </button>

        {/* Header */}
        <div className="max-w-3xl mx-auto mb-8">
          <span className="text-sm mb-4 block">{editorialContent.category}</span>
          <h1 className="text-4xl font-light mb-4">{editorialContent.title}</h1>
          <p className="text-xl text-gray-600 mb-6">{editorialContent.subtitle}</p>
          
          <div className="flex items-center justify-between py-6 border-y border-gray-100">
            <div>
              <p className="font-medium">{editorialContent.author}</p>
              <p className="text-sm text-gray-600">
                {editorialContent.date} · {editorialContent.readTime}
              </p>
            </div>
            <div className="flex gap-4">
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <Share2 size={20} />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <Bookmark size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Main Image */}
        <div className="max-w-5xl mx-auto mb-12">
          <img
            src={editorialContent.mainImage}
            alt={editorialContent.title}
            className="w-full h-[600px] object-cover"
          />
        </div>

        {/* Content */}
        <div className="max-w-3xl mx-auto">
          {editorialContent.content.map((section, index) => {
            if (section.type === "text") {
              return (
                <p key={index} className="text-lg leading-relaxed mb-8">
                  {section.content}
                </p>
              );
            } else if (section.type === "image") {
              return (
                <figure key={index} className="my-12">
                  <img
                    src={section.url}
                    alt={section.caption}
                    className="w-full h-[400px] object-cover mb-4"
                  />
                  <figcaption className="text-sm text-gray-600 text-center">
                    {section.caption}
                  </figcaption>
                </figure>
              );
            } else if (section.type === "heading") {
              return (
                <h2 key={index} className="text-2xl font-light my-8">
                  {section.content}
                </h2>
              );
            }
          })}
        </div>

        {/* Related Articles */}
        <div className="max-w-5xl mx-auto mt-16 pt-16 border-t border-gray-100">
          <h3 className="text-2xl font-light mb-8">Related Articles</h3>
          <div className="grid grid-cols-2 gap-8">
            {editorialContent.relatedArticles.map((article) => (
              <div key={article.id} className="group cursor-pointer">
                <div className="aspect-[16/9] mb-4 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <span className="text-sm mb-2 block">{article.category}</span>
                <h4 className="text-xl font-light">{article.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleEditorialPage;