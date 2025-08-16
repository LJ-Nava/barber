import React, { useState } from 'react';
import '../scss/components/_barberos.scss';

const Barberos = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const barberos = [
    {
      id: 1,
      name: "Carlos Mendez",
      specialty: "Master Barber & Founder",
      image: require('../assets/Barberos/BarberProfile7BK3.png'),
      experience: "15 Years",
      clientsSatisfied: "4,500+",
      joinedYear: "2011",
      rank: "Founder",
      companyTenure: "13 Years",
      rating: "4.9",
      specialty2: "Traditional Craftsmanship & Leadership",
      instagram: "@carlos_founder",
      whatsapp: "+1-555-0107",
      bio: "Founder and visionary behind our premium barbershop legacy. Established in 2011 with a passion for traditional craftsmanship and exceptional service.",
      masterCertifications: ["Master Barber Certification", "Business Leadership", "Traditional Techniques Master"],
      awards: ["Founder's Legacy 2011", "Master Craftsman 2020", "Lifetime Achievement"]
    },
    {
      id: 2,
      name: "Alexander Stone",
      specialty: "Lead Master Barber",
      image: require('../assets/Barberos/BarberProfile2BK3.png'),
      experience: "13 Years",
      clientsSatisfied: "3,800+",
      joinedYear: "2012",
      rank: "Lead Master",
      companyTenure: "12 Years",
      rating: "4.8",
      specialty2: "Luxury Treatments & Senior Mentorship",
      instagram: "@alex_stone_master",
      whatsapp: "+1-555-0102",
      bio: "Joined our founding team in 2012, bringing luxury grooming expertise and mentoring the next generation of master barbers.",
      masterCertifications: ["Advanced Styling", "Luxury Treatments", "Team Leadership"],
      awards: ["Master Craftsman 2022", "Excellence in Service", "Mentor of the Year"]
    },
    {
      id: 3,
      name: "Eduardo Lima",
      specialty: "Premium Experience Director",
      image: require('../assets/Barberos/BarberProfile9BK3.png'),
      experience: "11 Years",
      clientsSatisfied: "3,600+",
      joinedYear: "2013",
      rank: "Director",
      companyTenure: "11 Years",
      rating: "4.9",
      specialty2: "VIP Services & Client Experience",
      instagram: "@eduardo_director",
      whatsapp: "+1-555-0109",
      bio: "Curating world-class premium experiences since 2013. Leading our VIP services and ensuring every client receives exceptional treatment.",
      masterCertifications: ["VIP Service Excellence", "Client Relations", "Premium Styling"],
      awards: ["VIP Excellence 2022", "Service Innovation", "Client Choice Director"]
    },
    {
      id: 4,
      name: "Vincent Torres",
      specialty: "Executive Grooming Specialist",
      image: require('../assets/Barberos/BarberProfile5BK3.png'),
      experience: "10 Years",
      clientsSatisfied: "3,200+",
      joinedYear: "2014",
      rank: "Senior Specialist",
      companyTenure: "10 Years",
      rating: "4.9",
      specialty2: "Corporate Styling & Professional Image",
      instagram: "@vincent_executive",
      whatsapp: "+1-555-0105",
      bio: "Decade of expertise in executive grooming since 2014. Trusted by professionals for sophisticated styling and image consulting.",
      masterCertifications: ["Executive Styling", "Professional Image", "Corporate Consultation"],
      awards: ["Executive Excellence 2022", "Professional's Choice", "Corporate Stylist"]
    },
    {
      id: 5,
      name: "Marcus Rodriguez",
      specialty: "Master Fade Specialist",
      image: require('../assets/Barberos/BarberProfile1BK3.png'),
      experience: "8 Years",
      clientsSatisfied: "2,400+",
      joinedYear: "2016",
      rank: "Master Specialist",
      companyTenure: "8 Years",
      rating: "4.9",
      specialty2: "Modern Fades & Precision Cutting",
      instagram: "@marcus_fade_master",
      whatsapp: "+1-555-0101",
      bio: "Precision artistry since 2016. Renowned for creating the perfect fade and modern styling techniques that set industry standards.",
      masterCertifications: ["Advanced Fade Techniques", "Modern Styling", "Precision Cutting"],
      awards: ["Best Fade Artist 2023", "Client Choice Award", "Modern Style Master"]
    },
    {
      id: 6,
      name: "Gabriel Santos",
      specialty: "Creative Hair Artist",
      image: require('../assets/Barberos/BarberProfile6BK3.png'),
      experience: "7 Years",
      clientsSatisfied: "2,100+",
      joinedYear: "2017",
      rank: "Creative Specialist",
      companyTenure: "7 Years",
      rating: "4.8",
      specialty2: "Artistic Designs & Color Innovation",
      instagram: "@gabriel_creative_artist",
      whatsapp: "+1-555-0106",
      bio: "Bringing artistic vision to life since 2017. Where creativity meets craftsmanship in every unique design and color transformation.",
      masterCertifications: ["Creative Design", "Color Theory", "Artistic Techniques"],
      awards: ["Creative Excellence 2023", "Artistic Vision", "Color Innovation Award"]
    },
    {
      id: 7,
      name: "Diego Martinez",
      specialty: "Precision Cut Specialist",
      image: require('../assets/Barberos/BarberProfile3BK3.png'),
      experience: "6 Years",
      clientsSatisfied: "1,900+",
      joinedYear: "2018",
      rank: "Senior Barber",
      companyTenure: "6 Years",
      rating: "4.9",
      specialty2: "Scissor Mastery & Detail Work",
      instagram: "@diego_precision_master",
      whatsapp: "+1-555-0103",
      bio: "Meticulous perfectionist since 2018. Every cut is a masterpiece of precision, showcasing exceptional attention to detail and scissor work.",
      masterCertifications: ["Precision Cutting", "Scissor Techniques", "Detail Mastery"],
      awards: ["Rising Star 2021", "Precision Excellence", "Detail Champion"]
    },
    {
      id: 8,
      name: "Adrian Blake",
      specialty: "Style Innovation Specialist",
      image: require('../assets/Barberos/BarberProfile4BK3.png'),
      experience: "5 Years",
      clientsSatisfied: "1,600+",
      joinedYear: "2019",
      rank: "Style Specialist",
      companyTenure: "5 Years",
      rating: "4.8",
      specialty2: "Trendsetting & Modern Techniques",
      instagram: "@adrian_style_innovator",
      whatsapp: "+1-555-0104",
      bio: "Innovation pioneer since 2019. Bringing fresh perspectives to classic techniques, creating tomorrow's trends while honoring traditional craftsmanship.",
      masterCertifications: ["Style Innovation", "Trend Analysis", "Modern Techniques"],
      awards: ["Innovation Award 2023", "Style Pioneer", "Trendsetter Recognition"]
    },
    {
      id: 9,
      name: "Miguel Rivera",
      specialty: "Youth & Family Specialist",
      image: require('../assets/Barberos/BarberProfile8BK3.png'),
      experience: "4 Years",
      clientsSatisfied: "1,200+",
      joinedYear: "2020",
      rank: "Family Specialist",
      companyTenure: "4 Years",
      rating: "4.8",
      specialty2: "Kids, Teens & Family Styling",
      instagram: "@miguel_family_barber",
      whatsapp: "+1-555-0108",
      bio: "Connecting with families since 2020. Patient, friendly service specializing in kids and teens, making every family visit comfortable and enjoyable.",
      masterCertifications: ["Family Services", "Youth Psychology", "Patient Care"],
      awards: ["Youth Favorite 2023", "New Talent", "Family Choice Award"]
    }
  ];

  const itemsPerPage = 3;
  const totalPages = Math.ceil(barberos.length / itemsPerPage);
  
  const getCurrentBarberos = () => {
    const start = currentPage * itemsPerPage;
    return barberos.slice(start, start + itemsPerPage);
  };

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <section className="barberos" id="barberos">
      <div className="barberos__container">
        {/* Header */}
        <div className="barberos__header">
          <div className="barberos__badge">
            <i className="fas fa-users"></i>
            <span>Meet Our Team</span>
          </div>
          
          <h2 className="barberos__title">
            <span>Master Barbers</span>
            <span>Elite Craftsmen</span>
          </h2>
          
          <p className="barberos__subtitle">
            Since 2011, our award-winning team has been delivering exceptional barbering experiences. 
            Each master craftsman brings decades of combined expertise and unwavering dedication to the art.
          </p>
        </div>

        {/* Navigation */}
        <div className="barberos__navigation">
          <button 
            className="barberos__nav-btn barberos__nav-btn--prev" 
            onClick={prevPage}
            disabled={totalPages <= 1}
          >
            <i className="fas fa-chevron-left"></i>
            <span>Previous</span>
          </button>
          
          <div className="barberos__pagination">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                className={`barberos__page-dot ${currentPage === index ? 'active' : ''}`}
                onClick={() => setCurrentPage(index)}
              >
                <span>{index + 1}</span>
              </button>
            ))}
          </div>
          
          <button 
            className="barberos__nav-btn barberos__nav-btn--next" 
            onClick={nextPage}
            disabled={totalPages <= 1}
          >
            <span>Next</span>
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>

        {/* Barberos Grid */}
        <div className="barberos__grid">
          {getCurrentBarberos().map((barbero) => (
            <div key={barbero.id} className="barber-card">
              <div className="barber-card__image">
                <img src={barbero.image} alt={barbero.name} />
                <div className="barber-card__overlay">
                  <div className="barber-card__social">
                    <a href={`https://wa.me/${barbero.whatsapp.replace(/[^0-9]/g, '')}`} className="social-btn social-btn--whatsapp">
                      <i className="fab fa-whatsapp"></i>
                    </a>
                    <a href={`https://instagram.com/${barbero.instagram.replace('@', '')}`} className="social-btn social-btn--instagram">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
                <div className="barber-card__rating">
                  <i className="fas fa-star"></i>
                  <span>{barbero.rating}</span>
                </div>
              </div>
              
              <div className="barber-card__content">
                <div className="barber-card__header">
                  <h3 className="barber-card__name">{barbero.name}</h3>
                  <span className="barber-card__rank">{barbero.rank}</span>
                </div>
                <p className="barber-card__specialty">{barbero.specialty}</p>
                <p className="barber-card__specialty2">{barbero.specialty2}</p>
                <p className="barber-card__bio">{barbero.bio}</p>
                
                <div className="barber-card__stats">
                  <div className="stat">
                    <div className="stat__number">{barbero.experience}</div>
                    <div className="stat__label">Total Experience</div>
                  </div>
                  <div className="stat">
                    <div className="stat__number">{barbero.companyTenure}</div>
                    <div className="stat__label">With Company</div>
                  </div>
                  <div className="stat">
                    <div className="stat__number">{barbero.clientsSatisfied}</div>
                    <div className="stat__label">Happy Clients</div>
                  </div>
                </div>

                <div className="barber-card__certifications">
                  <h4 className="certifications-title">
                    <i className="fas fa-certificate"></i>
                    Master Certifications
                  </h4>
                  <div className="certification-list">
                    {barbero.masterCertifications.map((cert, index) => (
                      <span key={index} className="certification-badge">
                        <i className="fas fa-check-circle"></i>
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="barber-card__awards">
                  {barbero.awards.map((award, index) => (
                    <span key={index} className="award-badge">
                      <i className="fas fa-medal"></i>
                      {award}
                    </span>
                  ))}
                </div>

                <button className="barber-card__book">
                  <i className="fas fa-calendar-alt"></i>
                  <span>Book with {barbero.name.split(' ')[0]}</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Team Stats */}
        <div className="barberos__team-stats">
          <div className="team-stat">
            <div className="team-stat__number">2011</div>
            <div className="team-stat__label">Founded</div>
          </div>
          <div className="team-stat">
            <div className="team-stat__number">9</div>
            <div className="team-stat__label">Master Barbers</div>
          </div>
          <div className="team-stat">
            <div className="team-stat__number">25,000+</div>
            <div className="team-stat__label">Clients Served</div>
          </div>
          <div className="team-stat">
            <div className="team-stat__number">13</div>
            <div className="team-stat__label">Years of Excellence</div>
          </div>
          <div className="team-stat">
            <div className="team-stat__number">4.9</div>
            <div className="team-stat__label">Average Rating</div>
          </div>
          <div className="team-stat">
            <div className="team-stat__number">20+</div>
            <div className="team-stat__label">Awards Won</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Barberos;