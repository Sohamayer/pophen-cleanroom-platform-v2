import React, { useEffect, useState } from 'react';
import './Home.css'; // Make sure to create this file

function Home() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => { 
        setIsVisible(true);
    }, []);

    /* --- Add this state and scroll logic inside your Home component --- */
    const [aboutVisible, setAboutVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const section = document.getElementById('about-intro');
            if (section) {
                const top = section.getBoundingClientRect().top;
                const isVisible = top < window.innerHeight - 150;
                if (isVisible) setAboutVisible(true);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    /* --- Add this state and scroll logic inside your Home component --- */
    const [solutionsVisible, setSolutionsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const section = document.getElementById('solutions-grid');
            if (section) {
                const top = section.getBoundingClientRect().top;
                if (top < window.innerHeight - 100) setSolutionsVisible(true);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const products = [
        { title: "Cleanroom Wall Panels", desc: "High-durability sandwich panels with flush finishes.", img: "https://images.unsplash.com/photo-1581094271901-8022df4466f9?auto=format&fit=crop&q=80&w=500" },
        { title: "Ceiling Systems", desc: "Integrated grid systems for HEPA filters and lighting.", img: "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&q=80&w=500" },
        { title: "Cleanroom Doors", desc: "Airtight swing and sliding doors with interlocking logic.", img: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=500" },
        { title: "Cleanroom Windows", desc: "Double-glazed flush windows for maximum visibility.", img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=500" },
        { title: "Air Duct Systems", desc: "Precision HVAC ducting for controlled environments.", img: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=500" },
        { title: "Modular Cleanrooms", desc: "Rapid-deployment prefabricated cleanroom modules.", img: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=500" },
    ];

    /* --- Add this state and scroll logic inside your Home component --- */
    const [industriesVisible, setIndustriesVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const section = document.getElementById('industries-section');
            if (section) {
                const top = section.getBoundingClientRect().top;
                if (top < window.innerHeight - 100) setIndustriesVisible(true);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const industries = [
        { title: "Semiconductor", desc: "Ultra-pure environments for wafer fabrication and microchip assembly.", img: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?auto=format&fit=crop&q=80&w=500" },
        { title: "Pharmaceutical", desc: "GMP-compliant facilities ensuring sterile production and safety.", img: "https://images.unsplash.com/photo-1563213126-a4273aed2016?auto=format&fit=crop&q=80&w=500" },
        { title: "Biotechnology", desc: "Advanced labs for genetic research and life science innovation.", img: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&q=80&w=500" },
        { title: "Renewable Energy", desc: "Cleanroom solutions for solar cell and battery technology production.", img: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=800" },
        { title: "Microelectronics", desc: "Precision control for the assembly of high-density electronic components.", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=500" },
        { title: "High-Tech Mfg", desc: "Flexible cleanroom systems for evolving technical manufacturing needs.", img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=500" },
    ];

    /* --- Add this state and scroll logic inside your Home component --- */
    const [whyChooseVisible, setWhyChooseVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const section = document.getElementById('why-choose-us');
            if (section) {
                const top = section.getBoundingClientRect().top;
                if (top < window.innerHeight - 100) setWhyChooseVisible(true);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const features = [
        { 
            title: "Advanced Engineering", 
            desc: "Cutting-edge CAD designs and structural analysis for precision environments.", 
            icon: "https://cdn-icons-png.flaticon.com/512/2942/2942503.png" 
        },
        { 
            title: "High Quality Materials", 
            desc: "Using ISO-certified, corrosion-resistant, and anti-static architectural systems.", 
            icon: "https://cdn-icons-png.flaticon.com/512/3067/3067451.png" 
        },
        { 
            title: "Global Experience", 
            desc: "Successfully delivering cleanroom solutions across 20+ countries worldwide.", 
            icon: "https://cdn-icons-png.flaticon.com/512/814/814513.png" 
        },
        { 
            title: "Custom Solutions", 
            desc: "Tailored architectural designs to meet your specific industry requirements.", 
            icon: "https://cdn-icons-png.flaticon.com/512/3522/3522204.png" 
        }
    ];

    /* --- Add this state and scroll logic inside your Home component --- */
    const [statsVisible, setStatsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const section = document.getElementById('global-stats');
            if (section) {
                const top = section.getBoundingClientRect().top;
                if (top < window.innerHeight - 100) setStatsVisible(true);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Helper component for counting up numbers
    const AnimatedNumber = ({ value, duration = 2000, start }) => {
        const [count, setCount] = useState(0);
        useEffect(() => {
            if (start) {
                let startTimestamp = null;
                const step = (timestamp) => {
                    if (!startTimestamp) startTimestamp = timestamp;
                    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                    setCount(Math.floor(progress * value));
                    if (progress < 1) {
                        window.requestAnimationFrame(step);
                    }
                };
                window.requestAnimationFrame(step);
            }
        }, [value, duration, start]);
        return <span>{count}</span>;
    };

    const stats = [
        { label: "Countries Served", value: 15, suffix: "+" },
        { label: "Certifications", value: 250, suffix: "+" },
        { label: "Patents Held", value: 50, suffix: "+" },
        { label: "Sqm Installed", value: 15, suffix: "M+" },
    ];

    /* --- Add this state and scroll logic inside your Home component --- */
    const [ctaVisible, setCtaVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const section = document.getElementById('cta-section');
            if (section) {
                const top = section.getBoundingClientRect().top;
                if (top < window.innerHeight - 100) setCtaVisible(true);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="home-page">
            <section className={`hero-section ${isVisible ? 'fade-in' : ''}`}>
                <div className="hero-overlay"></div>
                <div className="hero-content">
                    <h1>Advanced Cleanroom Engineering Solutions</h1>
                    <p>
                        Providing high-performance cleanroom architectural systems for 
                        semiconductor, pharmaceutical, and high-tech manufacturing industries.
                    </p>
                    <div className="hero-btns">
                        <button className="btn-primary">Explore Products</button>
                        <button className="btn-secondary">Get a Quote</button>
                    </div>
                </div>
            </section>
            
            <section id="about-intro" className={`about-section ${aboutVisible ? 'reveal' : ''}`}>
                <div className="container">
                    <div className="about-grid">
                        <div className="about-text">
                            <span className="subtitle">ABOUT POPHEN</span>
                            <h2>Engineering Advanced Cleanroom Environments</h2>
                            <div className="divider"></div>
                            <p>
                                Pophen Environmental Technology provides advanced cleanroom architectural 
                                systems designed for modern industrial environments. Our solutions help 
                                maintain contamination control, air purity, and precision environmental 
                                conditions required in semiconductor manufacturing, pharmaceutical 
                                production, biotechnology laboratories, and high-tech factories.
                            </p>
                            <button className="btn-outline">Learn More</button>
                        </div>
                        <div className="about-image">
                            <div className="image-wrapper">
                                <img 
                                    src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800" 
                                    alt="Cleanroom Engineering" 
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="solutions-grid" className={`solutions-section ${solutionsVisible ? 'animate-in' : ''}`}>
                <div className="container">
                    <div className="section-header">
                        <span className="subtitle">OUR SPECIALIZATIONS</span>
                        <h2>Precision Cleanroom Solutions</h2>
                        <p>Innovative architectural components engineered for strict environmental compliance.</p>
                    </div>

                    <div className="products-grid">
                        {products.map((item, index) => (
                            <div className="product-card" key={index} style={{ transitionDelay: `${index * 0.1}s` }}>
                                <div className="card-image">
                                    <img src={item.img} alt={item.title} />
                                    <div className="card-overlay">
                                        <button className="view-btn">View Details</button>
                                    </div>
                                </div>
                                <div className="card-info">
                                    <h3>{item.title}</h3>
                                    <p>{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="industries-section" className={`industries-section ${industriesVisible ? 'animate-in' : ''}`}>
                <div className="container">
                    <div className="section-header centered light-text">
                        <span className="subtitle">SECTORS WE SERVE</span>
                        <h2>Industries We Empower</h2>
                        <div className="title-underline"></div>
                    </div>

                    <div className="industries-grid">
                        {industries.map((ind, index) => (
                            <div className="industry-card" key={index} style={{ transitionDelay: `${index * 0.15}s` }}>
                                <div className="industry-img-container">
                                    <img src={ind.img} alt={ind.title} />
                                    <div className="industry-overlay">
                                        <h3>{ind.title}</h3>
                                    </div>
                                </div>
                                <div className="industry-content">
                                    <p>{ind.desc}</p>
                                    <a href="#contact" className="industry-link">View Application →</a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="why-choose-us" className={`why-section ${whyChooseVisible ? 'animate-in' : ''}`}>
                <div className="container">
                    <div className="section-header centered">
                        <span className="subtitle">THE POPHEN ADVANTAGE</span>
                        <h2>Why Choose Our Solutions?</h2>
                        <div className="divider-center"></div>
                    </div>

                    <div className="features-grid">
                        {features.map((feat, index) => (
                            <div className="feature-card" key={index} style={{ transitionDelay: `${index * 0.1}s` }}>
                                <div className="icon-box">
                                    <img src={feat.icon} alt={feat.title} />
                                </div>
                                <h3>{feat.title}</h3>
                                <p>{feat.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="global-stats" className="stats-section">
                <div className="stats-parallax-bg"></div>
                <div className="stats-overlay"></div>
                
                <div className="container stats-container">
                    <div className="stats-grid">
                        {stats.map((stat, index) => (
                            <div key={index} className={`stat-item ${statsVisible ? 'fade-up' : ''}`} style={{ transitionDelay: `${index * 0.2}s` }}>
                                <h2 className="stat-number">
                                    <AnimatedNumber value={stat.value} start={statsVisible} />
                                    {stat.suffix}
                                </h2>
                                <div className="stat-divider"></div>
                                <p className="stat-label">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="cta-section" className={`cta-anchor-section ${ctaVisible ? 'active' : ''}`}>
                <div className="cta-content-box container">
                    <span className="cta-subtitle">READY TO START?</span>
                    <h2 className="cta-title">Build Your Next Cleanroom Facility With Us</h2>
                    <p className="cta-text">
                        Our engineering experts design and deliver high-performance cleanroom 
                        environments for advanced manufacturing industries.
                    </p>
                    <div className="cta-actions">
                        <a className="btn-cta" href='/contact'>
                            <span>Request a Quote</span>
                            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;