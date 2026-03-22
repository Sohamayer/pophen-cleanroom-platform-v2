import React from 'react';
import './About.css';

function About() {
    /* --- Add this state and scroll logic inside your About component --- */
    const [overviewVisible, setOverviewVisible] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            const section = document.getElementById('company-overview');
            if (section) {
                const top = section.getBoundingClientRect().top;
                if (top < window.innerHeight - 150) setOverviewVisible(true);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    /* --- Add this state and scroll logic inside your About component --- */
    const [mvVisible, setMvVisible] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            const section = document.getElementById('mission-vision');
            if (section) {
                const top = section.getBoundingClientRect().top;
                if (top < window.innerHeight - 150) setMvVisible(true);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    /* --- 1. Add this Helper Component ABOVE your 'About' function --- */
    const StatCounter = ({ endValue, duration = 2000, start }) => {
        const [count, setCount] = React.useState(0);
        React.useEffect(() => {
            if (start) {
                let startTimestamp = null;
                const step = (timestamp) => {
                    if (!startTimestamp) startTimestamp = timestamp;
                    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                    setCount(Math.floor(progress * endValue));
                    if (progress < 1) window.requestAnimationFrame(step);
                };
                window.requestAnimationFrame(step);
            }
        }, [endValue, duration, start]);
        return <span>{count}</span>;
    };

    /* --- 2. Add this state/logic INSIDE your 'About' component --- */
    const [statsVisible, setStatsVisible] = React.useState(false);
    React.useEffect(() => {
        const handleScroll = () => {
            const section = document.getElementById('company-stats');
            if (section) {
                const top = section.getBoundingClientRect().top;
                if (top < window.innerHeight - 100) setStatsVisible(true);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    /* --- Add this state/logic inside your 'About' component --- */
    const [timelineVisible, setTimelineVisible] = React.useState(false);
    React.useEffect(() => {
        const handleScroll = () => {
            const section = document.getElementById('development-timeline');
            if (section) {
                const top = section.getBoundingClientRect().top;
                if (top < window.innerHeight - 150) setTimelineVisible(true);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    /* --- Add this state/logic inside your 'About' component --- */
    const [globalVisible, setGlobalVisible] = React.useState(false);
    React.useEffect(() => {
        const handleScroll = () => {
            const section = document.getElementById('global-presence');
            if (section) {
                const top = section.getBoundingClientRect().top;
                if (top < window.innerHeight - 150) setGlobalVisible(true);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    /* --- Add this state/logic inside your 'About' component --- */
    const [ctaVisible, setCtaVisible] = React.useState(false);
    React.useEffect(() => {
        const handleScroll = () => {
            const section = document.getElementById('about-cta');
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
            <section className="about-hero">
                <div className="about-hero-bg"></div>
                <div className="about-hero-overlay"></div>
                
                <div className="container about-hero-container">
                    <div className="about-hero-content">
                        <span className="about-badge">EXCELLENCE IN ENGINEERING</span>
                        <h1 className="about-hero-title">
                            About Pophen Environmental Technology
                        </h1>
                        <div className="about-hero-divider"></div>
                        <p className="about-hero-subtitle">
                            Delivering advanced cleanroom engineering solutions for semiconductor, 
                            pharmaceutical, and high-tech industries worldwide.
                        </p>
                    </div>
                </div>
            </section>

            <section id="company-overview" className={`overview-section ${overviewVisible ? 'reveal' : ''}`}>
                <div className="container overview-container">
                    <div className="overview-grid">
                        <div className="overview-text">
                            <span className="overview-subtitle">OUR LEGACY</span>
                            <h2 className="overview-title">Who We Are</h2>
                            <div className="overview-divider"></div>
                            <p>
                                Pophen Environmental Technology is a premier provider of high-performance 
                                cleanroom architectural systems. We specialize in the design and 
                                manufacturing of modular cleanroom components that meet the most 
                                stringent international standards for contamination control.
                            </p>
                            <p>
                                With decades of engineering expertise, we serve the world's most 
                                technologically demanding sectors, including semiconductor fabrication, 
                                biotechnology labs, and high-precision pharmaceutical manufacturing. 
                                Our mission is to empower innovation by providing stable, pure, and 
                                controllable environments.
                            </p>
                            <div className="overview-stats-small">
                                <div className="stat-box">
                                    <strong>20+</strong>
                                    <span>Years Experience</span>
                                </div>
                                <div className="stat-box">
                                    <strong>100%</strong>
                                    <span>ISO Compliant</span>
                                </div>
                            </div>
                        </div>
                        
                        <div className="overview-image-wrapper">
                            <div className="overview-image-inner">
                                <img 
                                    src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=800" 
                                    alt="High-tech Cleanroom Facility" 
                                />
                                <div className="image-accent-border"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="mission-vision" className={`mv-section ${mvVisible ? 'active' : ''}`}>
                <div className="container mv-container">
                    <div className="mv-grid">
                        {/* Mission Card */}
                        <div className="mv-card">
                            <div className="mv-icon-wrapper">
                                <img src="https://cdn-icons-png.flaticon.com/512/3159/3159066.png" alt="Mission Icon" />
                            </div>
                            <h3 className="mv-card-title">Our Mission</h3>
                            <div className="mv-card-divider"></div>
                            <p className="mv-card-text">
                                To engineer and deliver the world's most reliable cleanroom environments 
                                through innovative modular solutions, ensuring our clients achieve 
                                unmatched precision and safety in their high-tech manufacturing processes.
                            </p>
                        </div>

                        {/* Vision Card */}
                        <div className="mv-card">
                            <div className="mv-icon-wrapper">
                                <img src="https://cdn-icons-png.flaticon.com/512/1521/1521151.png" alt="Vision Icon" />
                            </div>
                            <h3 className="mv-card-title">Our Vision</h3>
                            <div className="mv-card-divider"></div>
                            <p className="mv-card-text">
                                To be the global benchmark for cleanroom technology, driving the 
                                future of semiconductor and pharmaceutical industries by setting 
                                new standards in air purity, modular flexibility, and environmental control.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="company-stats" className="stats-section-about">
                <div className="container">
                    <div className="stats-grid-about">
                        <div className={`stat-card ${statsVisible ? 'reveal' : ''}`}>
                            <div className="stat-icon"><img src="https://cdn-icons-png.flaticon.com/512/2942/2942503.png" alt="Global" /></div>
                            <h2 className="stat-number">
                                <StatCounter endValue={15} start={statsVisible} />+
                            </h2>
                            <p className="stat-label">Countries Served</p>
                        </div>

                        <div className={`stat-card ${statsVisible ? 'reveal' : ''}`} style={{transitionDelay: '0.1s'}}>
                            <div className="stat-icon"><img src="https://cdn-icons-png.flaticon.com/512/3135/3135768.png" alt="Certification" /></div>
                            <h2 className="stat-number">
                                <StatCounter endValue={250} start={statsVisible} />+
                            </h2>
                            <p className="stat-label">Certifications</p>
                        </div>

                        <div className={`stat-card ${statsVisible ? 'reveal' : ''}`} style={{transitionDelay: '0.2s'}}>
                            <div className="stat-icon"><img src="https://cdn-icons-png.flaticon.com/512/3067/3067451.png" alt="Patents" /></div>
                            <h2 className="stat-number">
                                <StatCounter endValue={50} start={statsVisible} />+
                            </h2>
                            <p className="stat-label">Patents Held</p>
                        </div>

                        <div className={`stat-card ${statsVisible ? 'reveal' : ''}`} style={{transitionDelay: '0.3s'}}>
                            <div className="stat-icon"><img src="https://cdn-icons-png.flaticon.com/512/2163/2163351.png" alt="Area" /></div>
                            <h2 className="stat-number">
                                <StatCounter endValue={15} start={statsVisible} />M+
                            </h2>
                            <p className="stat-label">Sqm Installed</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="development-timeline" className={`timeline-section ${timelineVisible ? 'active' : ''}`}>
                <div className="container">
                    <div className="timeline-header">
                        <span className="about-badge">OUR JOURNEY</span>
                        <h2 className="overview-title">Development Timeline</h2>
                        <div className="overview-divider"></div>
                    </div>

                    <div className="timeline-wrapper">
                        <div className="timeline-line"></div>
                        
                        {[
                            { year: "2010", title: "Foundation", desc: "Pophen Environmental Technology was founded." },
                            { year: "2014", title: "Global Expansion", desc: "Expanded international market operations." },
                            { year: "2016", title: "Achieved", desc: "Achieved CE certification and expanded global exports." },
                            { year: "2018", title: "Advancement", desc: "Established advanced cleanroom panel manufacturing facility." },
                            { year: "2020", title: "Major Growth", desc: "Registered brand internationally and expanded engineering capabilities." },
                            { year: "2024", title: "Continuous Growth & Advancement", desc: "Expanded international operations and advanced cleanroom solutions worldwide." },
                        ].map((item, index) => (
                            <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
                                <div className="timeline-dot"></div>
                                <div className="timeline-content">
                                    <span className="timeline-year">{item.year}</span>
                                    <h3 className="timeline-title">{item.title}</h3>
                                    <p className="timeline-text">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="global-presence" className={`global-section ${globalVisible ? 'reveal' : ''}`}>
                <div className="container global-container">
                    <div className="global-grid">
                        {/* Left Content */}
                        <div className="global-content">
                            <span className="overview-subtitle">INTERNATIONAL REACH</span>
                            <h2 className="overview-title">Global Presence</h2>
                            <div className="overview-divider"></div>
                            <p className="global-description">
                                Pophen Environmental Technology has established a robust international network, 
                                exporting advanced cleanroom solutions to over 15 countries across Asia, 
                                Europe, and the Americas.
                            </p>
                            
                            <ul className="global-regions-list">
                                <li>
                                    <span className="region-dot"></span>
                                    <div>
                                        <strong>Southeast Asia & East Asia</strong>
                                        <p>Major hubs in Vietnam, Malaysia, and South Korea.</p>
                                    </div>
                                </li>
                                <li>
                                    <span className="region-dot"></span>
                                    <div>
                                        <strong>Middle East & Europe</strong>
                                        <p>Supporting pharmaceutical growth in UAE and Germany.</p>
                                    </div>
                                </li>
                                <li>
                                    <span className="region-dot"></span>
                                    <div>
                                        <strong>North America</strong>
                                        <p>Specialized semiconductor projects in the USA and Mexico.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        {/* Right Map Image */}
                        <div className="global-map-wrapper">
                            <div className="map-overlay-glow"></div>
                            <img 
                                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1000" 
                                alt="World Map Distribution" 
                                className="global-map-image"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section id="about-cta" className={`about-cta-section ${ctaVisible ? 'active' : ''}`}>
                <div className="cta-background-overlay"></div>
                <div className="container cta-container">
                    <div className="cta-content">
                        <span className="cta-badge">READY TO START?</span>
                        <h2 className="cta-title">Build Your Next Cleanroom Facility With Pophen</h2>
                        <p className="cta-description">
                            Partner with our engineering experts to design and build advanced cleanroom 
                            environments for semiconductor, pharmaceutical, and high-tech industries.
                        </p>
                        <div className="cta-button-group">
                            <a className="cta-btn primary" href='/contact'>
                                Request a Quote
                                <span className="btn-arrow">→</span>
                            </a>
                            <a className="cta-btn secondary" href='/contact'>Contact Us</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About; 