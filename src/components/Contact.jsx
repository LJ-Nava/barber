import React, { useState } from 'react';
import '../scss/components/_contact.scss';

const Contact = () => {
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedBarber, setSelectedBarber] = useState('');

  const businessHours = {
    monday: { open: '9:00 AM', close: '8:00 PM', status: 'open' },
    tuesday: { open: '9:00 AM', close: '8:00 PM', status: 'open' },
    wednesday: { open: '9:00 AM', close: '8:00 PM', status: 'open' },
    thursday: { open: '9:00 AM', close: '8:00 PM', status: 'open' },
    friday: { open: '9:00 AM', close: '9:00 PM', status: 'open' },
    saturday: { open: '8:00 AM', close: '7:00 PM', status: 'open' },
    sunday: { open: '10:00 AM', close: '6:00 PM', status: 'open' }
  };

  const getCurrentDayStatus = () => {
    const now = new Date();
    const dayNames = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    const today = dayNames[now.getDay()];
    
    return businessHours[today];
  };

  const contactInfo = [
    {
      icon: 'fas fa-clock',
      title: 'Premium Hours',
      subtitle: 'Open 7 Days a Week',
      special: true,
      hours: businessHours
    },
    {
      icon: 'fas fa-map-marker-alt',
      title: 'Prime Location',
      subtitle: 'Heart of the City',
      details: [
        '123 Madison Avenue',
        'New York, NY 10016',
        'Premium District'
      ],
      mapLink: 'https://maps.google.com/?q=123+Madison+Avenue,+New+York,+NY+10016'
    },
    {
      icon: 'fas fa-phone-alt',
      title: 'Direct Contact',
      subtitle: 'Instant Booking Available',
      details: [
        { label: 'Phone', value: '(555) 123-BARB', link: 'tel:+15551232272' },
        { label: 'WhatsApp', value: '+1 (555) 123-2272', link: 'https://wa.me/15551232272' },
        { label: 'Email', value: 'premium@clinifyai.com', link: 'mailto:premium@clinifyai.com' }
      ]
    },
    {
      icon: 'fas fa-crown',
      title: 'VIP Amenities',
      subtitle: 'Luxury Experience',
      details: [
        'Complimentary Valet Parking',
        'Premium Beverages & Snacks',
        'Private Consultation Rooms',
        'Executive Lounge Access'
      ]
    }
  ];

  const masterBarbers = [
    'Carlos Mendez - Founder',
    'Alexander Stone - Lead Master',
    'Eduardo Lima - Premium Director',
    'Vincent Torres - Executive Specialist',
    'Marcus Rodriguez - Fade Master',
    'Gabriel Santos - Creative Artist',
    'Diego Martinez - Precision Specialist',
    'Adrian Blake - Style Innovator',
    'Miguel Rivera - Family Specialist'
  ];

  const timeSlots = [
    '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM',
    '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM',
    '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM'
  ];

  return (
    <section className="contact" id="contact">
      <div className="contact__container">
        {/* Header */}
        <div className="contact__header">
          <div className="contact__badge">
            <i className="fas fa-calendar-check"></i>
            <span>Book Your Experience</span>
          </div>
          
          <h2 className="contact__title">
            <span>Get In Touch</span>
            <span>Premium Booking</span>
          </h2>
          
          <p className="contact__subtitle">
            Experience unparalleled luxury and craftsmanship. Since 2011, we've been setting 
            the standard for premium barbering in the heart of New York.
          </p>
        </div>

        <div className="contact__content">
          <div className="contact__info">
            {contactInfo.map((info, index) => (
              <div key={index} className={`info-item ${info.special ? 'info-item--special' : ''}`}>
                <div className="info-item__icon">
                  <i className={info.icon}></i>
                </div>
                <div className="info-item__content">
                  <h3 className="info-item__title">{info.title}</h3>
                  {info.subtitle && <p className="info-item__subtitle">{info.subtitle}</p>}
                  
                  {info.hours ? (
                    <div className="business-hours">
                      <div className="current-status">
                        <span className="status-indicator status-indicator--open"></span>
                        <span>Open Now - Closes at {getCurrentDayStatus()?.close}</span>
                      </div>
                      <div className="hours-grid">
                        {Object.entries(info.hours).map(([day, hours]) => (
                          <div key={day} className="hours-row">
                            <span className="day-name">{day.charAt(0).toUpperCase() + day.slice(1)}</span>
                            <span className="hours-time">{hours.open} - {hours.close}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : info.details ? (
                    <div className="info-details">
                      {info.details.map((detail, detailIndex) => (
                        typeof detail === 'string' ? (
                          <p key={detailIndex} className="detail-text">{detail}</p>
                        ) : (
                          <div key={detailIndex} className="contact-link">
                            <span className="contact-label">{detail.label}:</span>
                            <a href={detail.link} className="contact-value">{detail.value}</a>
                          </div>
                        )
                      ))}
                      {info.mapLink && (
                        <a href={info.mapLink} className="map-link" target="_blank" rel="noopener noreferrer">
                          <i className="fas fa-directions"></i>
                          Get Directions
                        </a>
                      )}
                    </div>
                  ) : null}
                </div>
              </div>
            ))}
          </div>

          <form className="contact__form">
            <div className="form-header">
              <h3>Book Your Premium Experience</h3>
              <p>Reserve your appointment with our master craftsmen</p>
            </div>
            
            <div className="form-row">
              <input type="text" placeholder="Full Name" required />
              <input type="email" placeholder="Email Address" required />
            </div>
            
            <div className="form-row">
              <input type="tel" placeholder="Phone Number" required />
              <select required>
                <option value="">Select Your Service</option>
                <option value="signature">Signature Cut - $55</option>
                <option value="executive">Executive Package - $95</option>
                <option value="premium">Premium Styling - $75</option>
                <option value="beard">Master Beard Sculpting - $45</option>
                <option value="luxury">Complete Luxury Experience - $150</option>
                <option value="consultation">VIP Consultation - $25</option>
              </select>
            </div>
            
            <select 
              value={selectedBarber} 
              onChange={(e) => setSelectedBarber(e.target.value)}
              required
            >
              <option value="">Choose Your Master Barber</option>
              {masterBarbers.map((barber, index) => (
                <option key={index} value={barber}>{barber}</option>
              ))}
            </select>
            
            <select 
              value={selectedTime} 
              onChange={(e) => setSelectedTime(e.target.value)}
              required
            >
              <option value="">Preferred Time Slot</option>
              {timeSlots.map((time, index) => (
                <option key={index} value={time}>{time}</option>
              ))}
            </select>
            
            <textarea 
              placeholder="Special requests or additional services (optional)" 
              rows="3"
            ></textarea>
            
            <button type="submit" className="contact__submit">
              <i className="fas fa-crown"></i>
              <span>Reserve Premium Appointment</span>
              <i className="fas fa-arrow-right"></i>
            </button>
            
            <p className="booking-note">
              <i className="fas fa-shield-alt"></i>
              Secure booking • Instant confirmation • Cancel anytime
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;