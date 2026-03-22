import './CleanroomCeilings.css';

function CleanroomCeilings() {
    return(
        <>
            <section className="ceilings-hero-wrapper">
                {/* Background Image with Animation */}
                <div className="ceilings-hero-bg">
                    <img 
                        src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1920" 
                        alt="Advanced Cleanroom Ceiling Grid System" 
                        className="ceilings-bg-img"
                    />
                    <div className="ceilings-overlay"></div>
                </div>

                {/* Main Content */}
                <div className="ceilings-hero-container">
                    <div className="ceilings-content-box">
                        <div className="ceilings-badge-reveal">
                            <span className="ceilings-support-text">High Strength • Modular Design • ISO Cleanroom Compatible</span>
                        </div>
                        
                        <h1 className="ceilings-main-title">
                            Cleanroom <span className="lime-accent">Ceiling Grid</span> Systems
                        </h1>
                        
                        <p className="ceilings-subtitle">
                            Precision-engineered ceiling grid systems designed to support filtration units, 
                            lighting modules, and airflow management in controlled cleanroom environments.
                        </p>

                        <div className="ceilings-action-area">
                            <a className="ceilings-cta-btn" href='/contact'>
                                <span>Request Specifications</span>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="ceilings-btn-icon">
                                    <path d="M7 7l10 10M17 7H7v10" transform="rotate(45 12 12)" />
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Technical Decorative Element */}
                <div className="ceilings-scroll-indicator">
                    <div className="mouse-icon">
                        <div className="wheel"></div>
                    </div>
                </div>
            </section>

            <section className="ceilings-overview-section">
                <div className="ceilings-overview-container">
                    {/* Left Side: Technical Image */}
                    <div className="ceilings-overview-image-box">
                        <div className="image-frame-decorator"></div>
                        <img 
                            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800&h=1000" 
                            alt="Modular Cleanroom Ceiling Grid Installation" 
                            className="overview-main-img"
                        />
                        {/* Technical Data Overlay */}
                        <div className="overview-tech-card">
                            <div className="tech-card-inner">
                                <span className="tech-stat">ISO Class 1-9</span>
                                <span className="tech-label">Compliance Certified</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Text Content */}
                    <div className="ceilings-overview-content">
                        <div className="overview-label-wrapper">
                            <span className="overview-pre-heading">System Integration</span>
                            <div className="overview-line-anim"></div>
                        </div>
                        
                        <h2 className="overview-heading">
                            Advanced Ceiling Systems for <br />
                            <span className="text-dark-blue">Cleanroom Environments</span>
                        </h2>
                        
                        <div className="overview-body">
                            <p className="overview-para">
                                Cleanroom ceiling systems form the structural framework that supports filtration units, 
                                lighting fixtures, and airflow management equipment. <strong>Pophen</strong> cleanroom ceilings 
                                are designed to deliver superior structural stability while maintaining strict 
                                contamination control standards.
                            </p>
                            
                            <p className="overview-para">
                                Our modular ceiling grid systems allow easy integration of HEPA filters, FFU units, 
                                lighting panels, and air return modules. These systems provide excellent load-bearing 
                                capacity while enabling flexible cleanroom layout configurations.
                            </p>
                            
                            <p className="overview-para highlighted-para">
                                Manufactured using precision-engineered aluminum and steel components, our 
                                cleanroom ceilings ensure durability, corrosion resistance, and compatibility 
                                with ISO-classified cleanroom environments.
                            </p>
                        </div>

                        {/* List for extra scannability */}
                        <ul className="overview-spec-list">
                            <li><span>●</span> Precision Gasket Sealing</li>
                            <li><span>●</span> Heavy-Duty Loading Capacity</li>
                            <li><span>●</span> Anti-Corrosive Finish</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="ceiling-types-section">
                <div className="types-container">
                    <div className="types-header">
                        <span className="types-pretitle">Precision Engineering</span>
                        <h2 className="types-main-title">Ceiling System Configurations</h2>
                        <p className="types-intro">Select the structural framework that meets your facility's specific load-bearing and filtration requirements.</p>
                    </div>

                    <div className="types-grid">
                        {/* Card 1 */}
                        <div className="type-card">
                            <div className="card-image-wrapper">
                                <img src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=600&h=600" alt="Aluminum T-Grid" />
                                <div className="card-overlay"></div>
                            </div>
                            <div className="card-content">
                                <h3>Aluminum T-Grid Ceiling</h3>
                                <p>Lightweight aluminum ceiling grids designed for easy installation and compatibility with HEPA filtration systems.</p>
                                <div className="card-footer-line"></div>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="type-card">
                            <div className="card-image-wrapper">
                                <img src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=600&h=600" alt="Steel T-Grid" />
                                <div className="card-overlay"></div>
                            </div>
                            <div className="card-content">
                                <h3>Steel T-Grid Ceiling</h3>
                                <p>High-strength steel ceiling grids designed for heavy load applications and long-term structural stability.</p>
                                <div className="card-footer-line"></div>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="type-card">
                            <div className="card-image-wrapper">
                                <img src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=600&h=600" alt="Walkable Ceiling" />
                                <div className="card-overlay"></div>
                            </div>
                            <div className="card-content">
                                <h3>Walkable Ceiling System</h3>
                                <p>Reinforced ceiling panels designed to support maintenance personnel and equipment installation above cleanroom areas.</p>
                                <div className="card-footer-line"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="ceilings-features-section">
                <div className="features-bg-overlay">
                    <img 
                        src="https://images.unsplash.com/photo-1581092162384-8987c17b492a?auto=format&fit=crop&q=80&w=1200&h=675" 
                        alt="Technical Detail of Cleanroom Ceiling" 
                        className="features-bg-img"
                    />
                    <div className="features-gradient-cover"></div>
                </div>

                <div className="features-container">
                    <div className="features-text-side">
                        <span className="features-tag">Core Capabilities</span>
                        <h2 className="features-title">Engineered for <br /><span className="lime-text">Precision & Purity</span></h2>
                        <div className="features-accent-bar"></div>
                    </div>

                    <div className="features-grid">
                        {/* Feature 1 */}
                        <div className="feature-item">
                            <div className="feature-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M7 2h10l3 7h-16l3-7zM2 9h20v11a2 2 0 01-2 2H4a2 2 0 01-2-2V9z" /><path d="M12 13v5M9 15h6" /></svg>
                            </div>
                            <h3>High Load Bearing Capacity</h3>
                            <p>Structural integrity capable of supporting heavy FFU loads and maintenance traffic.</p>
                        </div>

                        {/* Feature 2 */}
                        <div className="feature-item">
                            <div className="feature-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 6h16M4 12h16M4 18h16M10 2v20M14 2v20" /></svg>
                            </div>
                            <h3>Integrated HEPA Filter Compatibility</h3>
                            <p>Universal mounting systems designed for seamless HEPA and ULPA filter installation.</p>
                        </div>

                        {/* Feature 3 */}
                        <div className="feature-item">
                            <div className="feature-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M9 3v18M15 3v18M3 9h18M3 15h18" /></svg>
                            </div>
                            <h3>Modular Installation System</h3>
                            <p>Standardized components for rapid deployment and future facility scalability.</p>
                        </div>

                        {/* Feature 4 */}
                        <div className="feature-item">
                            <div className="feature-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
                            </div>
                            <h3>Corrosion Resistant Materials</h3>
                            <p>Constructed from anodized aluminum and stainless steel to withstand harsh cleaning agents.</p>
                        </div>

                        {/* Feature 5 */}
                        <div className="feature-item">
                            <div className="feature-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" /></svg>
                            </div>
                            <h3>Easy Maintenance Access</h3>
                            <p>Quick-release modules allow for rapid filter changes and utility inspections.</p>
                        </div>

                        {/* Feature 6 */}
                        <div className="feature-item">
                            <div className="feature-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><path d="M22 4L12 14.01l-3-3" /></svg>
                            </div>
                            <h3>ISO Cleanroom Certified</h3>
                            <p>Fully compliant with international standards for Class 1 through Class 9 environments.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="tech-specs-section">
                <div className="tech-specs-container">
                    {/* Left Side: Table Content */}
                    <div className="tech-specs-content">
                        <div className="specs-header-block">
                            <span className="specs-subtitle">Data Sheet</span>
                            <h2 className="specs-main-title">Technical <span className="blue-accent">Specifications</span></h2>
                        </div>

                        <div className="specs-table">
                            <div className="spec-row">
                                <span className="spec-label">Grid Material</span>
                                <span className="spec-value">Aluminum / Galvanized Steel</span>
                            </div>
                            <div className="spec-row">
                                <span className="spec-label">Ceiling Type</span>
                                <span className="spec-value">T-Grid / Walkable / FFU Integrated</span>
                            </div>
                            <div className="spec-row">
                                <span className="spec-label">Load Capacity</span>
                                <span className="spec-value">Up to 150 kg/m²</span>
                            </div>
                            <div className="spec-row">
                                <span className="spec-label">Panel Size</span>
                                <span className="spec-value">600 × 600 mm / 1200 × 600 mm</span>
                            </div>
                            <div className="spec-row">
                                <span className="spec-label">Surface Finish</span>
                                <span className="spec-value">Powder Coated / Anodized</span>
                            </div>
                            <div className="spec-row">
                                <span className="spec-label">Cleanroom Compatibility</span>
                                <span className="spec-value">ISO Class 1 – ISO Class 9</span>
                            </div>
                        </div>

                        <div className="specs-footer">
                            <p>* Custom dimensions and load requirements available upon engineering review.</p>
                        </div>
                    </div>

                    {/* Right Side: Blueprint Image */}
                    <div className="tech-specs-visual">
                        <div className="blueprint-wrapper">
                            <img 
                                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1000&auto=format&fit=crop" 
                                alt="Engineering Architecture Diagram" 
                                className="blueprint-img"
                            />
                            <div className="blueprint-overlay"></div>
                            {/* Floating Tech Badge */}
                            <div className="floating-dimension-badge">
                                <span>Precision: ±0.5mm</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="industries-section">
                <div className="industries-container">
                    <div className="industries-header">
                        <span className="ind-tag">Global Application</span>
                        <h2 className="ind-title">Industries We <span className="lime-text">Empower</span></h2>
                        <p className="ind-desc">Our ceiling systems provide the critical infrastructure for the world's most sensitive manufacturing environments.</p>
                    </div>

                    <div className="industries-grid">
                        {/* Card 1 */}
                        <div className="ind-card">
                            <div className="ind-img-box">
                                <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800" alt="Semiconductor Manufacturing" />
                                <div className="ind-overlay"></div>
                            </div>
                            <div className="ind-content">
                                <div className="ind-icon-mini">01</div>
                                <h3>Semiconductor Manufacturing</h3>
                                <p>Supports precision airflow systems required for wafer fabrication cleanrooms.</p>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="ind-card">
                            <div className="ind-img-box">
                                <img src="https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=800" alt="Biotechnology Laboratories" />
                                <div className="ind-overlay"></div>
                            </div>
                            <div className="ind-content">
                                <div className="ind-icon-mini">03</div>
                                <h3>Biotechnology Laboratories</h3>
                                <p>Supports advanced research environments with controlled air filtration systems.</p>
                            </div>
                        </div>

                        {/* Card 4 */}
                        <div className="ind-card">
                            <div className="ind-img-box">
                                <img src="https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?auto=format&fit=crop&q=80&w=800" alt="Medical Device Manufacturing" />
                                <div className="ind-overlay"></div>
                            </div>
                            <div className="ind-content">
                                <div className="ind-icon-mini">04</div>
                                <h3>Medical Device Manufacturing</h3>
                                <p>Maintains strict contamination control for high precision medical device assembly.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="ceilings-cta-section">
                <div className="cta-background-container">
                    <img 
                        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1920" 
                        alt="Global Infrastructure" 
                        className="cta-parallax-bg"
                    />
                    <div className="cta-theme-overlay"></div>
                </div>

                <div className="cta-content-wrapper">
                    <div className="cta-glass-card">
                        <div className="cta-header-animate">
                            <span className="cta-top-label">Ready to Start Your Project?</span>
                            <h2 className="cta-heading">
                                Engineered Excellence for <br />
                                <span className="cta-highlight">Next-Generation</span> Facilities
                            </h2>
                            <div className="cta-divider"></div>
                        </div>

                        <p className="cta-description">
                            Our engineering team provides comprehensive support from initial CAD design 
                            to final ISO certification. Let’s build your high-performance environment together.
                        </p>

                        <div className="cta-button-group">
                            <a className="cta-btn-primary" href='/contact'>
                                <span>Consult an Engineer</span>
                                <svg viewBox="0 0 24 24" className="btn-svg"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" fill="none"/></svg>
                            </a>
                            <button className="cta-btn-secondary">
                                <span>Download Catalog</span>
                                <svg viewBox="0 0 24 24" className="btn-svg"><path d="M12 5v14M5 12l7 7 7-7" stroke="currentColor" strokeWidth="2" fill="none"/></svg>
                            </button>
                        </div>
                        
                        <div className="cta-trust-footer">
                            <div className="trust-item">
                                <span className="trust-number">24h</span>
                                <span className="trust-text">Response Time</span>
                            </div>
                            <div className="trust-sep"></div>
                            <div className="trust-item">
                                <span className="trust-number">Global</span>
                                <span className="trust-text">Shipping Available</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default CleanroomCeilings;