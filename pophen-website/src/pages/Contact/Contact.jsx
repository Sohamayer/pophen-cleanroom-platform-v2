import React from 'react';
import './Contact.css';

function Contact() {
    /* --- Add this state inside your 'Contact' component --- */
    const [heroActive, setHeroActive] = React.useState(false);

    React.useEffect(() => {
        setHeroActive(true);
    }, []);

    /* --- Add this state/logic inside your 'Contact' component --- */
    const [infoVisible, setInfoVisible] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            const section = document.getElementById('contact-info-grid');
            if (section) {
                const top = section.getBoundingClientRect().top;
                if (top < window.innerHeight - 100) setInfoVisible(true);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    /* --- Add this state/logic inside your 'Contact' component --- */
    const [mapVisible, setMapVisible] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            const section = document.getElementById('office-location-section');
            if (section) {
                const top = section.getBoundingClientRect().top;
                if (top < window.innerHeight - 150) setMapVisible(true);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    /* --- Add this state inside your 'Contact' component --- */
    const [formActive, setFormActive] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            const section = document.getElementById('contact-form-section');
            if (section) {
                const top = section.getBoundingClientRect().top;
                if (top < window.innerHeight - 150) setFormActive(true);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    /* --- Add this state inside your 'Contact' component --- */
    const [inquiryVisible, setInquiryVisible] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            const section = document.getElementById('inquiry-types-section');
            if (section) {
                const top = section.getBoundingClientRect().top;
                if (top < window.innerHeight - 150) setInquiryVisible(true);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    /* --- Add this state inside your 'Contact' component logic --- */
    const [ctaVisible, setCtaVisible] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            const section = document.getElementById('innovate-cta-section');
            if (section) {
                const top = section.getBoundingClientRect().top;
                if (top < window.innerHeight - 150) setCtaVisible(true);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const [formData, setFormData] = React.useState({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {

            const res = await fetch("http://localhost:5000/send-contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            const data = await res.json();

            if (data.success) {
                alert("Message sent successfully!");
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    company: "",
                    message: ""
                });
            } else {
                alert("Email failed to send");
            }

        } catch (error) {
            console.error(error);
            alert("Server error");
        }
    };

    return (
        <>
            <section className={`contact-hero ${heroActive ? 'is-active' : ''}`}>
                <div className="contact-hero-bg">
                    <img 
                        src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=1600" 
                        alt="Pophen India Engineering Office" 
                        className="contact-bg-img"
                    />
                    <div className="contact-hero-overlay"></div>
                </div>
                
                <div className="contact-hero-content">
                    <div className="hero-container">
                        <span className="contact-label">GET IN TOUCH</span>
                        <h1 className="contact-main-title">
                            Contact <span className="blue-text">Pophen India</span>
                        </h1>
                        <div className="contact-hero-line"></div>
                        <p className="contact-subheading">
                            Partner with India's leading cleanroom architectural experts. 
                            Whether you're planning a new facility or upgrading existing infrastructure, 
                            our engineering team is ready to assist.
                        </p>
                        <div className="contact-hero-stats">
                            <div className="stat-item">
                                <span className="stat-value">24/7</span>
                                <span className="stat-label">Support</span>
                            </div>
                            <div className="stat-divider"></div>
                            <div className="stat-item">
                                <span className="stat-value">ISO</span>
                                <span className="stat-label">Certified</span>
                            </div>
                            <div className="stat-divider"></div>
                            <div className="stat-item">
                                <span className="stat-value">Pan</span>
                                <span className="stat-label">India</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Animated Scroll Indicator */}
                <div className="contact-scroll-indicator">
                    <div className="mouse">
                        <div className="wheel"></div>
                    </div>
                </div>
            </section>

            <section id="contact-info-grid" className={`contact-info-section ${infoVisible ? 'reveal' : ''}`}>
                <div className="container">
                    <div className="info-grid">
                        {/* Card 1: Address */}
                        <div className="info-card" style={{ transitionDelay: '0.1s' }}>
                            <div className="info-icon-wrapper">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                    <circle cx="12" cy="10" r="3" />
                                </svg>
                            </div>
                            <h3 className="info-card-title">Headquarters</h3>
                            <p className="info-card-text">
                                Plot No. 124, Industrial Estate, <br />
                                Phase IV, Gurugram, <br />
                                Haryana 122015, India
                            </p>
                            <a href="#" className="info-link">View on Maps</a>
                        </div>

                        {/* Card 2: Phone */}
                        <div className="info-card" style={{ transitionDelay: '0.2s' }}>
                            <div className="info-icon-wrapper">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                </svg>
                            </div>
                            <h3 className="info-card-title">Call Us</h3>
                            <p className="info-card-text">
                                Sales: +91 124 456 7890 <br />
                                Support: +91 124 456 7891 <br />
                                Toll Free: 1800-123-4567
                            </p>
                            <a href="tel:+911244567890" className="info-link">Call Now</a>
                        </div>

                        {/* Card 3: Email */}
                        <div className="info-card" style={{ transitionDelay: '0.3s' }}>
                            <div className="info-icon-wrapper">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                    <polyline points="22,6 12,13 2,6" />
                                </svg>
                            </div>
                            <h3 className="info-card-title">Email Enquiries</h3>
                            <p className="info-card-text">
                                General: info@pophenindia.com <br />
                                Quotes: sales@pophenindia.com <br />
                                Careers: hr@pophenindia.com
                            </p>
                            <a href="mailto:info@pophenindia.com" className="info-link">Send Email</a>
                        </div>
                    </div>
                </div>
            </section>

            <section id="office-location-section" className={`office-location-section ${mapVisible ? 'is-active' : ''}`}>
                <div className="container location-flex-container">
                    
                    {/* Left Side: Content */}
                    <div className="location-content">
                        <span className="location-pretitle">VISIT OUR FACILITY</span>
                        <h2 className="location-title">Global Standards, <br /><span className="text-highlight">Indian Presence.</span></h2>
                        <div className="location-divider"></div>
                        <p className="location-description">
                            Our state-of-the-art manufacturing unit and design studio are located in the heart of the Gurugram industrial hub. We welcome partners and clients to experience our modular systems firsthand.
                        </p>
                        
                        <div className="facility-features">
                            <div className="feature-item">
                                <div className="feature-circle"></div>
                                <div>
                                    <strong>Design Studio</strong>
                                    <p>Where architectural blueprints come to life.</p>
                                </div>
                            </div>
                            <div className="feature-item">
                                <div className="feature-circle"></div>
                                <div>
                                    <strong>R&D Lab</strong>
                                    <p>Continuous testing for ISO compliance.</p>
                                </div>
                            </div>
                        </div>
                        
                        <button className="location-directions-btn">
                            Get Driving Directions
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="btn-icon">
                                <path d="M15 10l5 5-5 5M4 4v7a4 4 0 004 4h12" />
                            </svg>
                        </button>
                    </div>

                    {/* Right Side: Interactive Map */}
                    <div className="location-map-wrapper">
                        <div className="map-frame-container">
                            <iframe 
                                title="Pophen India Office Location"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112214.1554523326!2d76.94580556550772!3d28.488880654395627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19d582e38859%3A0x2cf5e38169af66b!2sGurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1709123456789!5m2!1sen!2sin" 
                                width="100%" 
                                height="100%" 
                                style={{ border: 0 }} 
                                allowFullScreen="" 
                                loading="lazy" 
                                referrerPolicy="no-referrer-when-downgrade"
                                className="google-map-iframe"
                            ></iframe>
                            {/* Visual Accent Overlay */}
                            <div className="map-accent-border"></div>
                        </div>
                        <div className="map-caption">
                            <span className="live-dot"></span>
                            POPHEN INDIA HQ | GURUGRAM
                        </div>
                    </div>
                </div>
            </section>

            <section id="contact-form-section" className={`contact-form-section ${formActive ? 'is-active' : ''}`}>
                <div className="container form-main-flex">
                    
                    {/* Left Side: Professional Imagery & Confidence Block */}
                    <div className="form-image-side">
                        <div className="form-image-container">
                            <img 
                                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800" 
                                alt="Engineering Precision" 
                                className="industrial-form-img"
                            />
                            <div className="image-overlay-text">
                                <h4>Precision Engineering</h4>
                                <p>Discuss your project with our lead architects today.</p>
                            </div>
                        </div>
                        <div className="trust-badges">
                            <div className="badge">
                                <span className="badge-icon">✓</span>
                                <span>ISO 9001:2015</span>
                            </div>
                            <div className="badge">
                                <span className="badge-icon">✓</span>
                                <span>Quality Assured</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: The Form */}
                    <div className="form-content-side">
                        <div className="form-header">
                            <h2 className="form-title">Send a <span className="blue-text">Message</span></h2>
                            <p>Fill out the form below and our team will get back to you within 24 hours.</p>
                        </div>

                        <form className="main-contact-form" onSubmit={handleSubmit}>
                            <div className="form-row">
                                <div className="input-group">
                                    <label>Full Name</label>
                                    <input type="text" name="name" value={formData.name} placeholder="John Doe" onChange={handleChange} required />
                                </div>
                                <div className="input-group">
                                    <label>Email Address</label>
                                    <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="john@company.com" required />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="input-group">
                                    <label>Phone Number</label>
                                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+91 00000 00000" />
                                </div>
                                <div className="input-group">
                                    <label>Company Name</label>
                                    <input type="text" name="company" value={formData.company} onChange={handleChange} placeholder="Enter Company Name" />
                                </div>
                            </div>

                            <div className="input-group">
                                <label>Message</label>
                                <textarea rows="5" name="message" value={formData.message} onChange={handleChange} placeholder="Tell us about your project requirements..."></textarea>
                            </div>

                            <button type="submit" className="form-submit-btn">
                                <span>Submit Enquiry</span>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="arrow-icon">
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                    <polyline points="12 5 19 12 12 19"></polyline>
                                </svg>
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            <section id="inquiry-types-section" className={`inquiry-types-section ${inquiryVisible ? 'reveal' : ''}`}>
                <div className="container">
                    <div className="section-header-centered">
                        <span className="section-subtitle">CHOOSE YOUR PATH</span>
                        <h2 className="section-title">Tailored <span className="blue-text">Solutions</span> for Every Need</h2>
                        <div className="title-underline"></div>
                    </div>

                    <div className="inquiry-grid">
                        {/* Card 1: Project Consultation */}
                        <div className="inquiry-card" style={{ transitionDelay: '0.1s' }}>
                            <div className="inquiry-icon-box">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                                </svg>
                            </div>
                            <h3 className="inquiry-card-title">Project Consultation</h3>
                            <p className="inquiry-card-text">
                                Discuss ISO compliance and modular design strategies for new cleanroom facilities.
                            </p>
                            <div className="inquiry-card-footer">
                                <span>Inquire Now</span>
                                <div className="footer-line"></div>
                            </div>
                        </div>

                        {/* Card 2: Technical Support */}
                        <div className="inquiry-card active-card" style={{ transitionDelay: '0.2s' }}>
                            <div className="inquiry-icon-box">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                                </svg>
                            </div>
                            <h3 className="inquiry-card-title">Technical Support</h3>
                            <p className="inquiry-card-text">
                                Ongoing maintenance, validation support, and technical assistance for existing setups.
                            </p>
                            <div className="inquiry-card-footer">
                                <span>Get Support</span>
                                <div className="footer-line"></div>
                            </div>
                        </div>

                        {/* Card 3: Partnerships */}
                        <div className="inquiry-card" style={{ transitionDelay: '0.3s' }}>
                            <div className="inquiry-icon-box">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                                    <circle cx="9" cy="7" r="4" />
                                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                </svg>
                            </div>
                            <h3 className="inquiry-card-title">Global Partnerships</h3>
                            <p className="inquiry-card-text">
                                Collaborate with us for large-scale industrial projects and international distributions.
                            </p>
                            <div className="inquiry-card-footer">
                                <span>Partner with Us</span>
                                <div className="footer-line"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <section id="innovate-cta-section" className={`industrial-cta ${ctaVisible ? 'reveal' : ''}`}>
                <div className="cta-background">
                    <img 
                        src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1600" 
                        alt="Semiconductor Cleanroom" 
                        className="cta-bg-image"
                    />
                    <div className="cta-overlay"></div>
                </div>
                
                <div className="container">
                    <div className="cta-content-card">
                        <div className="cta-line-accent"></div>
                        <span className="cta-pretitle">READY TO START YOUR PROJECT?</span>
                        <h2 className="cta-title">
                            Engineering the <span className="blue-text">Future of Precision</span> Environments
                        </h2>
                        <p className="cta-description">
                            Join the ranks of global leaders in pharmaceuticals and semiconductor manufacturing. 
                            Our team is ready to translate your technical requirements into ISO-certified reality.
                        </p>
                        
                        <div className="cta-button-group">
                            <a className="btn-primary-glow" href='/contact'>
                                Schedule Consultation
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="btn-icon">
                                    <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>
                            <button className="btn-secondary-outline">
                                Download Capability Statement
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact; 