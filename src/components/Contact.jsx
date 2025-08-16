import React from 'react';
import '../scss/components/_contact.scss';

const Contact = () => {
  const contactInfo = [
    {
      icon: 'fas fa-clock',
      title: 'Business Hours',
      details: [
        'Monday - Friday: 9:00 AM - 8:00 PM',
        'Saturday: 9:00 AM - 7:00 PM',
        'Sunday: 10:00 AM - 5:00 PM'
      ]
    },
    {
      icon: 'fas fa-map-marker-alt',
      title: 'Location',
      details: [
        '123 Madison Avenue',
        'New York, NY 10016'
      ]
    },
    {
      icon: 'fas fa-phone-alt',
      title: 'Contact',
      details: [
        'Phone: (555) 123-4567',
        'Email: hello@clinifyai.com'
      ]
    },
    {
      icon: 'fas fa-parking',
      title: 'Amenities',
      details: [
        'Free Parking Available',
        'Complimentary Beverages'
      ]
    }
  ];

  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">Experience the Clinify AI difference</p>
        <div className="contact__content">
          <div className="contact__info">
            {contactInfo.map((info, index) => (
              <div key={index} className="info-item">
                <i className={info.icon}></i>
                <div>
                  <h3>{info.title}</h3>
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex}>{detail}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <form className="contact__form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Email Address" required />
            <input type="tel" placeholder="Phone Number" required />
            <select required>
              <option value="">Select Service</option>
              <option value="classic">Classic Cut - $45</option>
              <option value="executive">Executive Package - $85</option>
              <option value="beard">Beard Sculpting - $35</option>
              <option value="luxury">Luxury Treatment - $120</option>
            </select>
            <input type="date" placeholder="Preferred Date" required />
            <textarea placeholder="Additional Notes (optional)" rows="4"></textarea>
            <button type="submit" className="btn btn--primary">
              <i className="fas fa-paper-plane"></i> Book Appointment
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;