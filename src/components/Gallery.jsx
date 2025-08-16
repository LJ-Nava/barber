import React from 'react';
import '../scss/components/_gallery.scss';

const Gallery = () => {
  const galleryItems = [
    {
      image: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=400',
      title: 'Classic Gentleman',
      description: 'Timeless style redefined'
    },
    {
      image: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=400',
      title: 'Modern Edge',
      description: 'Contemporary cuts for today\'s man'
    },
    {
      image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=400',
      title: 'Beard Artistry',
      description: 'Sculpted to perfection'
    },
    {
      image: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=400',
      title: 'Premium Experience',
      description: 'Luxury grooming services'
    },
    {
      image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=400',
      title: 'Style Innovation',
      description: 'Cutting-edge techniques'
    },
    {
      image: 'https://images.unsplash.com/photo-1534778356534-d3d45b6df1da?w=400',
      title: 'Professional Excellence',
      description: 'Business-ready looks'
    }
  ];

  return (
    <section className="gallery" id="gallery">
      <div className="container">
        <h2 className="section-title">Portfolio</h2>
        <p className="section-subtitle">Showcasing our craftsmanship</p>
        <div className="gallery__grid">
          {galleryItems.map((item, index) => (
            <div key={index} className="gallery__item">
              <img src={item.image} alt={item.title} />
              <div className="gallery__overlay">
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;