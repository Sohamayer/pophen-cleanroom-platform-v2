import './CleanroomPanels.css';

function CleanroomPanels() {
    return(
        <>
            <section className="panels-hero-section">
                {/* Background with Dark Overlay */}
                <div className="panels-hero-bg-wrapper">
                    <img 
                        src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1920" 
                        alt="High-tech Cleanroom Panel Manufacturing" 
                        className="panels-hero-img"
                    />
                    <div className="panels-hero-overlay"></div>
                </div>

                <div className="panels-hero-container">
                    <div className="panels-hero-content">
                        {/* Small Label Text */}
                        <div className="panels-label-animate">
                            <span className="panels-hero-label">Durable • Hygienic • ISO Cleanroom Compatible</span>
                        </div>

                        {/* Main Heading */}
                        <h1 className="panels-hero-title">
                            Modular <span className="blue-accent">Cleanroom Panel</span> Systems
                        </h1>

                        {/* Subtitle */}
                        <p className="panels-hero-subtitle">
                            High-performance modular wall panel systems engineered for contamination-controlled 
                            environments used in semiconductor, pharmaceutical, and high-precision manufacturing industries.
                        </p>

                        {/* CTA Button */}
                        <div className="panels-hero-actions">
                            <a className="panels-cta-btn" href='/contact'>
                                <span>Request Panel Specifications</span>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="cta-icon">
                                    <path d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                
                {/* Decorative Technical Element */}
                <div className="panels-hero-bottom-accent"></div>
            </section>

            <section className="product-intro-section">
                <div className="product-intro-container">
                    {/* Left Side: Image with Technical Frame */}
                    <div className="product-intro-image-box">
                        <div className="image-border-decoration"></div>
                        <img 
                            src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800&h=1000" 
                            alt="Cleanroom Panel Installation" 
                            className="intro-main-img"
                        />
                        {/* Precision Icon Overlay - No Cartoons */}
                        <div className="tech-badge">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                            </svg>
                            <span>ISO Certified</span>
                        </div>
                    </div>

                    {/* Right Side: Text Content */}
                    <div className="product-intro-content">
                        <div className="intro-text-wrapper">
                            <h2 className="intro-heading">
                                Advanced Cleanroom <br />
                                <span className="text-gradient-blue">Panel Engineering</span>
                            </h2>
                            
                            <div className="intro-divider"></div>
                            
                            <p className="intro-paragraph">
                                Cleanroom panels are the primary structural elements used to construct 
                                contamination-controlled environments. Pophen cleanroom panel systems 
                                are designed with high-strength materials, smooth surfaces, and 
                                precision sealing technologies to prevent particle accumulation and 
                                ensure easy cleaning.
                            </p>
                            
                            <p className="intro-paragraph secondary-para">
                                Our modular panel systems allow rapid installation, structural 
                                flexibility, and compatibility with cleanroom ceilings, doors, and 
                                filtration systems. These panels are widely used in semiconductor 
                                fabs, pharmaceutical manufacturing plants, biotechnology laboratories, 
                                and medical device production facilities.
                            </p>

                            <ul className="intro-feature-list">
                                <li>High Chemical Resistance</li>
                                <li>Flush Surface Integration</li>
                                <li>Superior Fire Rating</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="panels-grid-section">
                <div className="panels-grid-container">
                    <div className="grid-header">
                        <span className="grid-label">Technical Solutions</span>
                        <h2 className="grid-main-title">Specialized Panel Systems</h2>
                        <div className="grid-title-line"></div>
                    </div>

                    <div className="panels-product-grid">
                        {/* Card 1: Steel */}
                        <div className="panel-card">
                            <div className="card-image-wrapper">
                                <img src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=600&h=600" alt="Steel Cleanroom Panels" />
                                <div className="card-overlay-tech">
                                    <span>Galvanized & Coated</span>
                                </div>
                            </div>
                            <div className="card-body">
                                <h3 className="card-title">Steel Cleanroom Panels</h3>
                                <p className="card-description">Galvanized steel cleanroom panels with powder-coated surfaces designed for durability and corrosion resistance.</p>
                            </div>
                        </div>

                        {/* Card 2: Honeycomb */}
                        <div className="panel-card">
                            <div className="card-image-wrapper">
                                <img src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=600&h=600" alt="Aluminum Honeycomb Panels" />
                                <div className="card-overlay-tech">
                                    <span>Lightweight Core</span>
                                </div>
                            </div>
                            <div className="card-body">
                                <h3 className="card-title">Aluminum Honeycomb Panels</h3>
                                <p className="card-description">Lightweight aluminum honeycomb panels offering high structural stability and excellent vibration resistance.</p>
                            </div>
                        </div>

                        {/* Card 3: HPL */}
                        <div className="panel-card">
                            <div className="card-image-wrapper">
                                <img src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=600&h=600" alt="HPL Cleanroom Panels" />
                                <div className="card-overlay-tech">
                                    <span>Antibacterial Surface</span>
                                </div>
                            </div>
                            <div className="card-body">
                                <h3 className="card-title">HPL Cleanroom Panels</h3>
                                <p className="card-description">High-pressure laminate panels with antibacterial surfaces ideal for pharmaceutical and biotechnology facilities.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="panels-features-section">
                <div className="features-bg-overlay"></div>
                
                <div className="features-container">
                    <div className="features-header">
                        <h2 className="features-title">Core Technical <span className="blue-accent">Features</span></h2>
                        <p className="features-subtitle">Engineered for the most demanding controlled environments.</p>
                    </div>

                    <div className="features-grid">
                        {/* Feature 1 */}
                        <div className="feature-card">
                            <div className="feature-icon-box">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
                                    <polyline points="7.5 4.21 12 6.81 16.5 4.21" />
                                    <polyline points="7.5 19.79 7.5 14.6 3 12" />
                                    <polyline points="21 12 16.5 14.6 16.5 19.79" />
                                    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                                    <line x1="12" y1="22.08" x2="12" y2="12" />
                                </svg>
                            </div>
                            <h3>High Structural Strength</h3>
                            <p>Advanced interlocking frames and core materials provide superior load-bearing capacity.</p>
                        </div>

                        {/* Feature 2 */}
                        <div className="feature-card">
                            <div className="feature-icon-box">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                </svg>
                            </div>
                            <h3>Smooth Hygienic Surfaces</h3>
                            <p>Ultra-smooth finishes prevent particle adhesion and facilitate rapid sterilization.</p>
                        </div>

                        {/* Feature 3 */}
                        <div className="feature-card">
                            <div className="feature-icon-box">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path d="M8.5 14.5A2.5 2.5 0 0011 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.5 4 6.5 2 2 3 3.5 3 5.5a6 6 0 11-12 0c0-1.5.5-3 1.5-4.5" />
                                </svg>
                            </div>
                            <h3>Fire Resistant Materials</h3>
                            <p>Non-combustible cores ensuring safety compliance for high-risk industrial facilities.</p>
                        </div>

                        {/* Feature 4 */}
                        <div className="feature-card">
                            <div className="feature-icon-box">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                                    <line x1="9" y1="3" x2="9" y2="21" />
                                    <line x1="15" y1="3" x2="15" y2="21" />
                                    <line x1="3" y1="9" x2="21" y2="9" />
                                    <line x1="3" y1="15" x2="21" y2="15" />
                                </svg>
                            </div>
                            <h3>Easy Modular Installation</h3>
                            <p>Precision-engineered components allow for rapid assembly and future reconfiguration.</p>
                        </div>

                        {/* Feature 5 */}
                        <div className="feature-card">
                            <div className="feature-icon-box">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path d="M10 2l6 16h-6l-6-16z" />
                                    <path d="M19 10l-2 5" />
                                    <path d="M5 10l2 5" />
                                </svg>
                            </div>
                            <h3>Chemical Resistant Coatings</h3>
                            <p>Surface treatments resistant to aggressive disinfectants and industrial chemicals.</p>
                        </div>

                        {/* Feature 6 */}
                        <div className="feature-card">
                            <div className="feature-icon-box">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <circle cx="12" cy="12" r="10" />
                                    <line x1="12" y1="8" x2="12" y2="12" />
                                    <line x1="12" y1="16" x2="12.01" y2="16" />
                                </svg>
                            </div>
                            <h3>ISO Cleanroom Compatibility</h3>
                            <p>Fully compliant with international standards for Class 1 through Class 9 environments.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="panels-industries-section">
                <div className="industries-container">
                    <div className="industries-header">
                        <div className="accent-tag">Market Applications</div>
                        <h2 className="industries-main-title">Industries We <span className="blue-accent">Support</span></h2>
                        <p className="industries-subtitle">Providing critical infrastructure for high-precision sectors worldwide.</p>
                    </div>

                    <div className="industries-grid">
                        {/* Industry 1 */}
                        <div className="industry-card">
                            <div className="industry-image">
                                <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=600&h=600" alt="Semiconductor Manufacturing" />
                                <div className="industry-number">01</div>
                            </div>
                            <div className="industry-info">
                                <h3>Semiconductor Manufacturing</h3>
                                <p>Ultra-clean panel systems used in wafer fabrication environments requiring sub-micron particle control.</p>
                                <div className="industry-link">View Case Study →</div>
                            </div>
                        </div>

                        {/* Industry 2 */}
                        <div className="industry-card">
                            <div className="industry-image">
                                <img src="https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=600&h=600" alt="Pharmaceutical Production" />
                                <div className="industry-number">02</div>
                            </div>
                            <div className="industry-info">
                                <h3>Pharmaceutical Production</h3>
                                <p>Sterile wall systems designed for GMP-compliant manufacturing facilities and vaccine production.</p>
                                <div className="industry-link">View Case Study →</div>
                            </div>
                        </div>

                        {/* Industry 4 */}
                        <div className="industry-card">
                            <div className="industry-image">
                                <img src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&q=80&w=600&h=600" alt="Medical Device Manufacturing" />
                                <div className="industry-number">04</div>
                            </div>
                            <div className="industry-info">
                                <h3>Medical Device Manufacturing</h3>
                                <p>Precision manufacturing environments requiring strict contamination control for surgical equipment.</p>
                                <div className="industry-link">View Case Study →</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="panels-cta-final-section">
                <div className="cta-final-container">
                    <div className="cta-final-card">
                        {/* Background Image with Dark Overlay */}
                        <div className="cta-final-image-wrapper">
                            <img 
                                src="https://images.unsplash.com/photo-1581092162384-8987c17b492a?auto=format&fit=crop&q=80&w=1920" 
                                alt="Semiconductor Cleanroom Facility" 
                                className="cta-final-bg-img"
                            />
                            <div className="cta-final-overlay"></div>
                            
                            {/* Animated Technical Corner Decals */}
                            <div className="tech-corner top-left"></div>
                            <div className="tech-corner bottom-right"></div>
                        </div>

                        <div className="cta-final-content">
                            <div className="cta-text-reveal">
                                <span className="cta-pre-title">Ready to Upgrade Your Facility?</span>
                                <h2 className="cta-main-heading">
                                    Precision Engineering for <br />
                                    <span className="lime-text">Zero-Contamination</span> Success
                                </h2>
                                <p className="cta-description">
                                    Our engineers are ready to assist with your architectural plans and ISO compliance requirements. 
                                    Let’s build your next-generation cleanroom environment together.
                                </p>
                            </div>

                            <div className="cta-button-group">
                                <a className="btn-primary-lime" href='/contact'>
                                    <span>Start Your Project</span>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="btn-icon">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </a>
                                
                                <button className="btn-secondary-outline">
                                    <span>Download Catalog</span>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="btn-icon">
                                        <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default CleanroomPanels;