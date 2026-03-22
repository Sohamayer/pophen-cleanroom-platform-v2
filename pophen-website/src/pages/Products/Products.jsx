import React from 'react';
import './Products.css';

function Products() {
    /* --- Add this state/logic inside your 'Products' component --- */
    const [heroLoaded, setHeroLoaded] = React.useState(false);

    React.useEffect(() => {
        setHeroLoaded(true);
    }, []);

    /* --- Add this state/logic inside your 'Products' component --- */
    const [introVisible, setIntroVisible] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            const section = document.getElementById('product-intro');
            if (section) {
                const top = section.getBoundingClientRect().top;
                if (top < window.innerHeight - 150) setIntroVisible(true);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    /* --- Add this state/logic inside your 'Products' component --- */
    const [gridVisible, setGridVisible] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            const section = document.getElementById('product-grid-section');
            if (section) {
                const top = section.getBoundingClientRect().top;
                if (top < window.innerHeight - 100) setGridVisible(true);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    /* --- Add this state/logic inside your 'Products' component --- */
    const [industriesVisible, setIndustriesVisible] = React.useState(false);

    React.useEffect(() => {
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

    /* --- Add this state/logic inside your 'Products' component --- */
    const [ctaVisible, setCtaVisible] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            const section = document.getElementById('product-cta');
            if (section) {
                const top = section.getBoundingClientRect().top;
                if (top < window.innerHeight - 100) setCtaVisible(true);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <> 
            <section className={`product-hero-section ${heroLoaded ? 'is-active' : ''}`}>
                {/* The Background Image Layer */}
                <div className="hero-bg-container">
                    <img 
                        src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1600" 
                        alt="Cleanroom Architecture" 
                        className="hero-bg-image"
                    />
                    <div className="hero-bg-overlay"></div>
                </div>

                <div className="container hero-content-wrapper">
                    <div className="hero-text-block">
                        <span className="hero-pretitle">PRECISION ENVIRONMENTS</span>
                        <h1 className="hero-main-title">
                            Cleanroom <br />
                            <span className="text-highlight">Architectural Systems</span>
                        </h1>
                        <p className="hero-description">
                            High-performance modular cleanroom systems engineered for semiconductor, 
                            pharmaceutical, biotechnology, and high-precision manufacturing industries.
                        </p>
                        <div className="hero-btn-container">
                            <button className="hero-primary-btn">
                                Explore Products
                                <span className="btn-icon">↓</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Subtle animated element to make it feel "Alive" */}
                <div className="hero-scroll-line"></div>
            </section>

            <section id="product-intro" className={`product-intro-section ${introVisible ? 'reveal' : ''}`}>
                <div className="container intro-container">
                    <div className="intro-grid">
                        
                        {/* Left Side: Image with Decorative Accents */}
                        <div className="intro-image-column">
                            <div className="image-wrapper">
                                <img 
                                    src="https://images.unsplash.com/photo-1565347878219-552c839f1447?auto=format&fit=crop&q=80&w=1000" 
                                    alt="Cleanroom Wall Panels" 
                                    className="main-intro-img"
                                />
                                <div className="image-border-accent"></div>
                                <div className="floating-badge">
                                    <span className="badge-number">01</span>
                                    <span className="badge-text">CORE SYSTEMS</span>
                                </div>
                            </div>
                        </div>

                        {/* Right Side: Content */}
                        <div className="intro-text-column">
                            <span className="intro-label">INNOVATION AT SCALE</span>
                            <h2 className="intro-title">Advanced Cleanroom <br/>Infrastructure Systems</h2>
                            <div className="intro-divider"></div>
                            <p className="intro-description">
                                Our architectural systems are designed to provide the highest level of structural integrity and contamination control. We integrate modular wall panels, walkable ceiling systems, and specialized door units into a seamless environment.
                            </p>
                            <p className="intro-description">
                                Each component is engineered for durability and compliance with ISO standards, ensuring your high-tech manufacturing processes remain stable and protected against environmental variables.
                            </p>
                            <ul className="intro-features-list">
                                <li><span className="feature-dot"></span> Modular Flexibility</li>
                                <li><span className="feature-dot"></span> ISO Class 1-9 Compliance</li>
                                <li><span className="feature-dot"></span> Superior Fire Resistance</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </section>

            <section id="product-grid-section" className={`product-grid-section ${gridVisible ? 'active' : ''}`}>
                <div className="container">
                    <div className="grid-header">
                        <span className="grid-label">OUR PRODUCT LINE</span>
                        <h2 className="grid-main-title">Engineering Excellence in Every Component</h2>
                    </div>

                    <div className="product-grid">
                        {[
                            {
                                title: "Wall Panel Systems",
                                desc: "High-pressure laminate and powder-coated galvanized steel panels with aluminum honeycomb cores.",
                                img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800"
                            },
                            {
                                title: "Ceiling Grid Systems",
                                desc: "Walkable and non-walkable ceiling systems designed for integrated HEPA filtration and lighting.",
                                /* Hand-picked: Industrial modular ceiling structure */
                                img: "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&q=80&w=800"
                            },
                            {
                                title: "Cleanroom Doors",
                                desc: "Specialized swing and sliding doors with airtight seals and interlock system compatibility.",
                                img: "https://images.unsplash.com/photo-1517059224940-d4af9eec41b7?auto=format&fit=crop&q=80&w=800"
                            },
                            {
                                title: "Pass Box Units",
                                desc: "Stainless steel transfer hatches with electronic interlocking to prevent cross-contamination.",
                                /* Hand-picked: Stainless steel cleanroom port */
                                img: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=800"
                            },
                            {
                                title: "FFU & Air Showers",
                                desc: "Advanced Fan Filter Units and decontamination air showers for personnel and material entry.",
                                img: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=800"
                            },
                            {
                                title: "Technical Flooring",
                                desc: "Anti-static PVC and epoxy flooring systems designed for easy cleaning and chemical resistance.",
                                /* Hand-picked: Industrial cleanroom flooring */
                                img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800"
                            }
                        ].map((product, index) => (
                            <div key={index} className="product-card" style={{ transitionDelay: `${index * 0.1}s` }}>
                                <div className="card-image-box">
                                    <img src={product.img} alt={product.title} />
                                    <div className="card-overlay"></div>
                                </div>
                                <div className="card-content">
                                    <h3 className="card-title">{product.title}</h3>
                                    <p className="card-text">{product.desc}</p>
                                    <button className="card-btn">
                                        View Details
                                        <span className="btn-line"></span>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="industries-section" className={`industries-section ${industriesVisible ? 'is-visible' : ''}`}>
                <div className="container">
                    <div className="industries-header">
                        <h2 className="industries-title">Industries We <span className="blue-accent">Serve</span></h2>
                        <p className="industries-subtitle">Our modular systems are engineered to meet the stringent environmental requirements of global high-tech sectors.</p>
                    </div>

                    <div className="industries-grid">
                        {[
                            {
                                name: "Semiconductor",
                                desc: "Nanofabrication environments requiring vibration-isolated structures and ultra-low particle counts.",
                                icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="2" width="20" height="20" rx="2"/><path d="M6 12h12M12 6v12M9 6v12M15 6v12M6 9h12M6 15h12"/></svg>
                            },
                            {
                                name: "Pharmaceutical",
                                desc: "Sterile environments for drug formulation and compounding that adhere to strict FDA/GMP guidelines.",
                                icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z"/><path d="m8.5 8.5 7 7"/></svg>
                            },
                            {
                                name: "Biotechnology",
                                desc: "Advanced biosafety labs and cell research facilities with specialized airtight containment solutions.",
                                icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4Z"/><path d="M12 12v10M12 22c4.418 0 8-1.79 8-4v-4m-16 0v4c0 2.21 3.582 4 8 4Z"/></svg>
                            },
                            {
                                name: "Aerospace",
                                desc: "Precision assembly environments for satellite components and optical instrumentation.",
                                icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09Z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2Z"/><path d="M9 12H4s.5-1 2-2c1.5-1 3-1 3-1l3 3Z"/></svg>
                            },
                            {
                                name: "Medical Devices",
                                desc: "Production facilities for high-precision surgical instruments and life-saving implantable devices.",
                                icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M19 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S16 3.34 16 5v6c0 1.66 1.34 3 3 3Z"/><path d="M5 22c1.66 0 3-1.34 3-3v-6c0-1.66-1.34-3-3-3S2 11.34 2 13v6c0 1.66 1.34 3 3 3Z"/><path d="M14 2h-4v20h4V2Z"/></svg>
                            },
                            {
                                name: "Battery Technology",
                                desc: "Specialized dry rooms for EV battery manufacturing with controlled dew point and humidity.",
                                icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="7" width="16" height="12" rx="2"/><path d="M22 11v2M6 11v2M10 11v2M14 11v2"/></svg>
                            }
                        ].map((industry, index) => (
                            <div key={index} className="industry-card" style={{ transitionDelay: `${index * 0.1}s` }}>
                                <div className="industry-icon-box">
                                    {industry.icon}
                                </div>
                                <h3 className="industry-card-name">{industry.name}</h3>
                                <p className="industry-card-desc">{industry.desc}</p>
                                <div className="industry-card-footer">
                                    <span className="learn-more">Compliance Ready</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="product-cta" className={`product-cta-section ${ctaVisible ? 'is-active' : ''}`}>
                <div className="cta-bg-container">
                    <img 
                        src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1600" 
                        alt="Engineers discussing cleanroom plans" 
                        className="cta-bg-image"
                    />
                    <div className="cta-overlay"></div>
                </div>

                <div className="container cta-content">
                    <div className="cta-text-wrapper">
                        <span className="cta-pretitle">PARTNER WITH EXPERTS</span>
                        <h2 className="cta-title">Need Custom <span className="text-highlight">Cleanroom Solutions?</span></h2>
                        <p className="cta-description">
                            Our engineering experts can design and manufacture customized cleanroom systems 
                            tailored specifically to your facility's unique architectural and environmental requirements.
                        </p>
                        
                        <div className="cta-button-group">
                            <button className="cta-btn primary">
                                Request a Quote
                                <svg className="btn-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M5 12h14M12 5l7 7-7 7"/>
                                </svg>
                            </button>
                            <button className="cta-btn secondary">
                                Contact Our Engineers
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Products;