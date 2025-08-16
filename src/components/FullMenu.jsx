import React, { useState } from 'react';
import '../scss/components/_fullmenu.scss';

const FullMenu = ({ isOpen, onClose }) => {
  const [activeCategory, setActiveCategory] = useState('signature');
  const menuCategories = [
    {
      id: 'signature',
      title: 'Signature Cuts',
      icon: 'fas fa-crown',
      description: 'Our premium signature services',
      services: [
        { name: 'Executive Premium Cut', price: '$85', time: '60 min', description: 'Complete grooming experience with consultation, precision cut, styling, and finishing touches' },
        { name: 'Classic Gentleman', price: '$65', time: '45 min', description: 'Traditional barbering with modern techniques and premium products' },
        { name: 'Modern Fade Master', price: '$70', time: '50 min', description: 'Expert fade cutting with detailed finishing and beard trim' },
        { name: 'Luxury Experience', price: '$120', time: '90 min', description: 'Full VIP treatment: cut, shave, scalp massage, styling, and grooming consultation' }
      ]
    },
    {
      id: 'cuts',
      title: 'Hair Cuts',
      icon: 'fas fa-cut',
      description: 'Professional cutting services',
      services: [
        { name: 'Classic Cut', price: '$45', time: '35 min', description: 'Traditional side part with precision fade' },
        { name: 'Fade Cut', price: '$48', time: '40 min', description: 'Clean fade with smooth transitions' },
        { name: 'Taper Cut', price: '$42', time: '35 min', description: 'Professional taper with gradual fade' },
        { name: 'Buzz Cut', price: '$35', time: '25 min', description: 'Military-style precision cut' },
        { name: 'Textured Cut', price: '$50', time: '40 min', description: 'Modern textured styling with volume' },
        { name: 'Undercut', price: '$48', time: '40 min', description: 'Bold undercut with styled top' },
        { name: 'Pompadour', price: '$55', time: '45 min', description: 'Vintage pompadour with contemporary finish' },
        { name: 'Long Hair Trim', price: '$40', time: '35 min', description: 'Shape and maintain longer styles' }
      ]
    },
    {
      id: 'specialty',
      title: 'Specialty Services',
      icon: 'fas fa-spa',
      description: 'Specialized hair treatments',
      services: [
        { name: 'Curly Hair Specialist', price: '$52', time: '45 min', description: 'Expert styling for curly and textured hair' },
        { name: 'Afro Styling', price: '$58', time: '50 min', description: 'Professional afro cut and styling' },
        { name: 'Hair Repair Treatment', price: '$75', time: '60 min', description: 'Restorative treatment for damaged hair' },
        { name: 'Mohawk Styling', price: '$60', time: '45 min', description: 'Contemporary mohawk with precision sides' },
        { name: 'Creative Cuts', price: '$65', time: '50 min', description: 'Custom artistic cuts and designs' }
      ]
    },
    {
      id: 'beard',
      title: 'Beard & Facial',
      icon: 'fas fa-user-tie',
      description: 'Facial hair grooming services',
      services: [
        { name: 'Beard Trim & Shape', price: '$25', time: '20 min', description: 'Professional beard trimming and shaping' },
        { name: 'Hot Towel Shave', price: '$35', time: '30 min', description: 'Traditional hot towel shave experience' },
        { name: 'Beard Styling', price: '$30', time: '25 min', description: 'Complete beard styling and conditioning' },
        { name: 'Mustache Grooming', price: '$18', time: '15 min', description: 'Precise mustache trimming and styling' },
        { name: 'Full Face Grooming', price: '$45', time: '35 min', description: 'Complete facial hair maintenance' }
      ]
    },
    {
      id: 'treatments',
      title: 'Premium Treatments',
      icon: 'fas fa-gem',
      description: 'Luxury grooming treatments',
      services: [
        { name: 'Scalp Treatment', price: '$45', time: '30 min', description: 'Deep cleansing and nourishing scalp therapy' },
        { name: 'Hair Coloring', price: '$85', time: '90 min', description: 'Professional hair coloring and highlights' },
        { name: 'Hair Wash & Style', price: '$20', time: '20 min', description: 'Premium wash with styling' },
        { name: 'Eyebrow Grooming', price: '$15', time: '15 min', description: 'Precise eyebrow trimming and shaping' },
        { name: 'Head Massage', price: '$30', time: '25 min', description: 'Relaxing scalp and head massage' }
      ]
    },
    {
      id: 'kids',
      title: 'Kids Services',
      icon: 'fas fa-child',
      description: 'Special services for young gentlemen',
      services: [
        { name: 'Kids Classic Cut', price: '$25', time: '25 min', description: 'Traditional cut for young gentlemen' },
        { name: 'Little Fade', price: '$30', time: '30 min', description: 'Age-appropriate fade for kids' },
        { name: 'First Haircut Special', price: '$35', time: '30 min', description: 'Memorable first haircut experience with certificate' },
        { name: 'Curly Kids Cut', price: '$28', time: '30 min', description: 'Special care for curly-haired children' },
        { name: 'Teen Style Cut', price: '$38', time: '35 min', description: 'Modern cuts for teenagers' }
      ]
    },
    {
      id: 'packages',
      title: 'Premium Packages',
      icon: 'fas fa-star',
      description: 'Complete grooming packages',
      services: [
        { name: 'Gentleman\'s Package', price: '$95', time: '75 min', description: 'Cut + Beard Trim + Hot Towel Shave + Styling' },
        { name: 'Executive Package', price: '$85', time: '60 min', description: 'Premium cut + Eyebrow grooming + Styling' },
        { name: 'Wedding Package', price: '$120', time: '90 min', description: 'Complete groom preparation with luxury treatments' },
        { name: 'Father & Son', price: '$65', time: '60 min', description: 'Bonding experience with matching styles' },
        { name: 'Monthly Membership', price: '$160', time: 'Unlimited', description: 'Unlimited cuts and basic services for one month' }
      ]
    }
  ];

  if (!isOpen) return null;

  const currentCategory = menuCategories.find(cat => cat.id === activeCategory);

  return (
    <div className="fullmenu-overlay" onClick={onClose}>
      <div className="fullmenu" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="fullmenu__header">
          <div className="fullmenu__badge">
            <i className="fas fa-scroll"></i>
            <span>Complete Menu</span>
          </div>
          <h2 className="fullmenu__title">
            <span>Premium Services</span>
            <span>& Pricing</span>
          </h2>
          <p className="fullmenu__subtitle">
            Crafted with precision, delivered with excellence. Every service includes consultation and finishing touches.
          </p>
          <button className="fullmenu__close" onClick={onClose}>
            <i className="fas fa-times"></i>
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="fullmenu__navigation">
          <div className="fullmenu__nav-container">
            {menuCategories.map((category) => (
              <button
                key={category.id}
                className={`fullmenu__nav-tab ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.id)}
              >
                <i className={category.icon}></i>
                <span>{category.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Menu Content */}
        <div className="fullmenu__content">
          <div className="fullmenu__category-view">
            <div className="menu-category active">
              <div className="menu-category__header">
                <div className="menu-category__icon">
                  <i className={currentCategory.icon}></i>
                </div>
                <div className="menu-category__info">
                  <h3 className="menu-category__title">{currentCategory.title}</h3>
                  <p className="menu-category__description">{currentCategory.description}</p>
                </div>
              </div>
              
              <div className="menu-category__services">
                {currentCategory.services.map((service, index) => (
                  <div key={index} className="menu-service">
                    <div className="menu-service__header">
                      <h4 className="menu-service__name">{service.name}</h4>
                      <div className="menu-service__price">{service.price}</div>
                    </div>
                    <div className="menu-service__meta">
                      <span className="menu-service__time">
                        <i className="fas fa-clock"></i>
                        {service.time}
                      </span>
                    </div>
                    <p className="menu-service__description">{service.description}</p>
                    <button className="menu-service__book">
                      <i className="fas fa-calendar-alt"></i>
                      <span>Book Now</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="fullmenu__footer">
          <div className="fullmenu__notice">
            <i className="fas fa-info-circle"></i>
            <span>All prices include consultation, premium products, and styling. Group bookings and special events available upon request.</span>
          </div>
          <div className="fullmenu__actions">
            <button className="fullmenu__contact">
              <i className="fas fa-phone"></i>
              <span>Call to Book</span>
            </button>
            <button className="fullmenu__whatsapp">
              <i className="fab fa-whatsapp"></i>
              <span>WhatsApp</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullMenu;