import './CleanroomDoors.css';

function CleanroomDoors() {
    return(
        <>
            <section className="door-hero-wrapper">
                {/* Background with subtle zoom animation */}
                <div className="door-hero-bg">
                    <img 
                        src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1920" 
                        alt="Pharmaceutical Cleanroom Entrance" 
                        className="door-bg-img"
                    />
                    <div className="door-hero-overlay"></div>
                </div>

                <div className="door-hero-container">
                    <div className="door-content-card">
                        {/* Animated Badge */}
                        <div className="door-badge">
                            <span className="door-badge-dot"></span>
                            <span className="door-badge-text">Airtight Sealing • Hygienic Design • ISO Compatible</span>
                        </div>

                        {/* Main Title */}
                        <h1 className="door-main-title">
                            Cleanroom <span className="door-lime-text">Door Systems</span>
                        </h1>

                        {/* Subtitle */}
                        <p className="door-subtitle">
                            High-performance cleanroom doors engineered for contamination control, 
                            airtight sealing, and durability in controlled environments.
                        </p>

                        {/* CTA Button */}
                        <div className="door-action-row">
                            <a className="door-cta-primary" href='/contact'>
                                <span>Request Quote</span>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="door-btn-icon">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Technical Scroll Decor */}
                <div className="door-scroll-indicator">
                    <div className="door-mouse">
                        <div className="door-wheel"></div>
                    </div>
                    <span className="door-scroll-text">Precision Engineering</span>
                </div>
            </section>

            <section className="door-overview-section">
                <div className="door-overview-container">
                    
                    {/* Left Column: Image with Decorative Elements */}
                    <div className="door-overview-image-side">
                        <div className="door-image-wrapper">
                            <img 
                                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800" 
                                alt="Cleanroom Door Installation" 
                                className="door-overview-main-img"
                            />
                            {/* Floating Tech Indicator */}
                            <div className="door-tech-badge">
                                <div className="tech-badge-content">
                                    <span className="tech-value">0.02 Pa</span>
                                    <span className="tech-desc">Pressure Leakage Rating</span>
                                </div>
                            </div>
                            <div className="door-image-border"></div>
                        </div>
                    </div>

                    {/* Right Column: Text Content */}
                    <div className="door-overview-text-side">
                        <div className="door-text-header">
                            <span className="door-pre-title">Precision Installation</span>
                            <h2 className="door-overview-title">
                                Engineered for <span className="door-text-accent">Zero Contamination</span>
                            </h2>
                            <div className="door-accent-line"></div>
                        </div>

                        <div className="door-text-body">
                            <p className="door-para">
                                Our cleanroom door systems are the critical barrier in maintaining ISO-classified environments. 
                                Each unit is manufactured using precision-grade <strong>304 or 316L Stainless Steel</strong>, 
                                ensuring a completely flush surface that prevents particle accumulation and allows for 
                                rigorous sterilization protocols.
                            </p>
                            <p className="door-para">
                                Featuring advanced <strong>pneumatic sealing gaskets</strong> and interlocking logic, 
                                these doors manage pressure differentials automatically. Whether you require manual 
                                swing doors or automated sliding systems, our solutions integrate seamlessly into 
                                modular wall panels without visible fixings.
                            </p>
                            <p className="door-para highlight-para">
                                Designed for heavy-duty pharmaceutical and semiconductor usage, our doors undergo 
                                stress-testing for over 1 million cycles, guaranteeing long-term airtight integrity 
                                and operational safety in the most demanding sterile environments.
                            </p>
                        </div>

                        <div className="door-features-mini">
                            <div className="mini-feat">
                                <div className="feat-icon-box">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="#d9f99d" strokeWidth="2"><path d="M20 6L9 17l-5-5"/></svg>
                                </div>
                                <span>Anti-Microbial Coating</span>
                            </div>
                            <div className="mini-feat">
                                <div className="feat-icon-box">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="#d9f99d" strokeWidth="2"><path d="M20 6L9 17l-5-5"/></svg>
                                </div>
                                <span>Flush Glass Integration</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="door-types-section">
                <div className="door-types-container">
                    <div className="door-types-header">
                        <h2 className="types-title">Specialized <span className="lime-highlight">Door Solutions</span></h2>
                        <p className="types-subtitle">Precision-engineered access systems for every cleanroom classification.</p>
                    </div>

                    <div className="door-types-grid">
                        {/* Card 1: Hinged */}
                        <div className="door-type-card">
                            <div className="card-image-box">
                                <img src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=600" alt="Hinged Cleanroom Door" />
                                <div className="card-hover-overlay"></div>
                            </div>
                            <div className="card-content">
                                <h3 className="card-title">Hinged Cleanroom Door</h3>
                                <p className="card-desc">Single or double hinged doors designed for standard cleanroom access while maintaining airtight sealing.</p>
                                <div className="card-footer-line"></div>
                            </div>
                        </div>

                        {/* Card 2: Sliding */}
                        <div className="door-type-card">
                            <div className="card-image-box">
                                <img src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=600" alt="Sliding Cleanroom Door" />
                                <div className="card-hover-overlay"></div>
                            </div>
                            <div className="card-content">
                                <h3 className="card-title">Sliding Cleanroom Door</h3>
                                <p className="card-desc">Automatic or manual sliding doors designed for high-traffic cleanroom environments with space-saving requirements.</p>
                                <div className="card-footer-line"></div>
                            </div>
                        </div>

                        {/* Card 3: Hermetic */}
                        <div className="door-type-card">
                            <div className="card-image-box">
                                <img src="https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&q=80&w=600" alt="Hermetic Sealed Door" />
                                <div className="card-hover-overlay"></div>
                            </div>
                            <div className="card-content">
                                <h3 className="card-title">Hermetic Sealed Door</h3>
                                <p className="card-desc">Advanced airtight doors designed for environments requiring strict pressure and contamination control.</p>
                                <div className="card-footer-line"></div>
                            </div>
                        </div>

                        {/* Card 4: Emergency */}
                        <div className="door-type-card">
                            <div className="card-image-box">
                                <img src="https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&q=80&w=600" alt="Emergency Exit Door" />
                                <div className="card-hover-overlay"></div>
                            </div>
                            <div className="card-content">
                                <h3 className="card-title">Emergency Exit Door</h3>
                                <p className="card-desc">Specialized safety doors designed to allow rapid exit while maintaining strict cleanroom leakage standards.</p>
                                <div className="card-footer-line"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="door-features-section">
                <div className="door-features-container">
                    
                    {/* Section Heading */}
                    <div className="features-header">
                        <span className="features-label">Core Capabilities</span>
                        <h2 className="features-main-title">Standard <span className="text-lime-accent">Features</span></h2>
                        <p className="features-intro">Our door systems are built to meet the most stringent international standards for controlled environments.</p>
                    </div>

                    {/* 6 Feature Grid */}
                    <div className="features-grid">
                        
                        {/* Feature 1 */}
                        <div className="feature-item-card">
                            <div className="feature-icon-wrapper">
                                <svg viewBox="0 0 24 24" className="tech-icon"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="#d9f99d" fill="none" strokeWidth="1.5"/></svg>
                            </div>
                            <h3 className="feature-card-title">Airtight Sealing Technology</h3>
                            <p className="feature-card-text">Double-layered EPDM gaskets ensure zero leakage under positive or negative pressure differentials.</p>
                            <div className="feature-hover-glow"></div>
                        </div>

                        {/* Feature 2 */}
                        <div className="feature-item-card">
                            <div className="feature-icon-wrapper">
                                <svg viewBox="0 0 24 24" className="tech-icon"><path d="M20 7h-9m9 5H9m11 5H12M4 7h1m-1 5h1m-1 5h1" stroke="#d9f99d" fill="none" strokeWidth="1.5" strokeLinecap="round"/></svg>
                            </div>
                            <h3 className="feature-card-title">Smooth Hygienic Surfaces</h3>
                            <p className="feature-card-text">Completely flush finish with no visible screws or dead corners to prevent microbial buildup.</p>
                            <div className="feature-hover-glow"></div>
                        </div>

                        {/* Feature 3 */}
                        <div className="feature-item-card">
                            <div className="feature-icon-wrapper">
                                <svg viewBox="0 0 24 24" className="tech-icon"><rect x="3" y="3" width="18" height="18" rx="2" stroke="#d9f99d" fill="none" strokeWidth="1.5"/><path d="M9 3v18M15 3v18M3 9h18M3 15h18" stroke="#d9f99d" fill="none" strokeWidth="1.5"/></svg>
                            </div>
                            <h3 className="feature-card-title">Corrosion Resistant Materials</h3>
                            <p className="feature-card-text">Constructed from high-grade 304/316L stainless steel to withstand aggressive VHP cleaning.</p>
                            <div className="feature-hover-glow"></div>
                        </div>

                        {/* Feature 4 */}
                        <div className="feature-item-card">
                            <div className="feature-icon-wrapper">
                                <svg viewBox="0 0 24 24" className="tech-icon"><path d="M15 3H6a2 2 0 00-2 2v14a2 2 0 002 2h12a2 2 0 002-2V8l-5-5z" stroke="#d9f99d" fill="none" strokeWidth="1.5"/><path d="M14 3v5h5M10 13h4m-2-2v4" stroke="#d9f99d" fill="none" strokeWidth="1.5"/></svg>
                            </div>
                            <h3 className="feature-card-title">Integrated Observation Windows</h3>
                            <p className="feature-card-text">Double-glazed toughened glass windows flush-mounted with silica gel desiccant for clear visibility.</p>
                            <div className="feature-hover-glow"></div>
                        </div>

                        {/* Feature 5 */}
                        <div className="feature-item-card">
                            <div className="feature-icon-wrapper">
                                <svg viewBox="0 0 24 24" className="tech-icon"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="#d9f99d" fill="none" strokeWidth="1.5"/></svg>
                            </div>
                            <h3 className="feature-card-title">Easy Cleaning & Maintenance</h3>
                            <p className="feature-card-text">Modular components designed for quick accessibility and deep-clean chemical resistance.</p>
                            <div className="feature-hover-glow"></div>
                        </div>

                        {/* Feature 6 */}
                        <div className="feature-item-card">
                            <div className="feature-icon-wrapper">
                                <svg viewBox="0 0 24 24" className="tech-icon"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="#d9f99d" fill="none" strokeWidth="1.5"/></svg>
                            </div>
                            <h3 className="feature-card-title">ISO Cleanroom Compatible</h3>
                            <p className="feature-card-text">Fully certified for use in Class 100 to Class 100,000 (ISO 5 to ISO 8) environments.</p>
                            <div className="feature-hover-glow"></div>
                        </div>
                    </div>

                    {/* Feature Visual Support */}
                    <div className="feature-visual-banner">
                        <img src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=1200" alt="Cleanroom Technical View" className="feature-full-img" />
                        <div className="banner-overlay-text">High-Grade 316L Surface Finish</div>
                    </div>
                </div>
            </section>

            <section className="door-specs-section">
                <div className="door-specs-container">
                    
                    {/* Left Side: Technical Visualization */}
                    <div className="door-specs-visual">
                        <div className="specs-image-frame">
                            <img 
                                src="https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80&w=900" 
                                alt="Engineering Blueprint of Cleanroom Door Structure" 
                                className="specs-blueprint-img"
                            />
                            <div className="blueprint-overlay"></div>
                            <div className="tech-corner-decor"></div>
                        </div>
                        <div className="visual-caption">
                            <span className="serial-no">FIG. 04-A</span>
                            <p>Structural Cross-Section & Component Analysis</p>
                        </div>
                    </div>

                    {/* Right Side: Data Table */}
                    <div className="door-specs-data">
                        <header className="specs-header">
                            <h2 className="specs-title">Technical <span className="specs-lime-text">Specifications</span></h2>
                            <div className="specs-divider"></div>
                        </header>

                        <div className="specs-table">
                            <div className="specs-row">
                                <div className="specs-label">Door Material</div>
                                <div className="specs-value">Aluminum / Stainless Steel / Sandwich Panel</div>
                            </div>
                            <div className="specs-row">
                                <div className="specs-label">Door Type</div>
                                <div className="specs-value">Hinged / Sliding / Hermetic</div>
                            </div>
                            <div className="specs-row">
                                <div className="specs-label">Surface Finish</div>
                                <div className="specs-value">Powder Coated / Stainless Steel</div>
                            </div>
                            <div className="specs-row">
                                <div className="specs-label">Glass Window</div>
                                <div className="specs-value">Double Glazed Tempered Glass</div>
                            </div>
                            <div className="specs-row">
                                <div className="specs-label">Sealing Type</div>
                                <div className="specs-value">Airtight Rubber Gasket</div>
                            </div>
                            <div className="specs-row last-row">
                                <div className="specs-label">Compatibility</div>
                                <div className="specs-value highlight-value">ISO Class 1 – ISO Class 9</div>
                            </div>
                        </div>

                        <button className="specs-download-btn">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="download-icon">
                                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v4M7 10l5 5 5-5M12 15V3" />
                            </svg>
                            Full Tech Specs PDF
                        </button>
                    </div>
                </div>
            </section>

            <section className="door-industries-section">
                <div className="door-industries-container">
                    {/* Section Header */}
                    <div className="industries-header">
                        <div className="header-badge">Target Sectors</div>
                        <h2 className="industries-title">
                            Industries We <span className="text-lime">Serve</span>
                        </h2>
                        <p className="industries-subtitle">
                            Providing specialized contamination control solutions tailored to the rigorous 
                            demands of high-tech manufacturing and healthcare.
                        </p>
                    </div>

                    {/* 4-Card Responsive Grid */}
                    <div className="industries-grid">
                        {/* Card 1: Semiconductor */}
                        <div className="industry-card" style={{ '--i': 1 }}>
                            <div className="industry-image-box">
                                <img 
                                    src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=600&h=600" 
                                    alt="Semiconductor Manufacturing" 
                                />
                                <div className="industry-overlay"></div>
                                <div className="industry-icon-tag">01</div>
                            </div>
                            <div className="industry-info">
                                <h3 className="industry-name">Semiconductor <br/>Manufacturing</h3>
                                <p className="industry-text">Maintains contamination-free environments for chip fabrication facilities and nanotech production.</p>
                                <div className="industry-link">
                                    <span>ISO Class 1-5 Compatible</span>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                                </div>
                            </div>
                        </div>

                        {/* Card 3: Biotechnology */}
                        <div className="industry-card" style={{ '--i': 3 }}>
                            <div className="industry-image-box">
                                <img 
                                    src="https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=600&h=600" 
                                    alt="Biotechnology Laboratories" 
                                />
                                <div className="industry-overlay"></div>
                                <div className="industry-icon-tag">03</div>
                            </div>
                            <div className="industry-info">
                                <h3 className="industry-name">Biotechnology <br/>Laboratories</h3>
                                <p className="industry-text">Ensures controlled laboratory environments for sensitive biological research and clinical testing.</p>
                                <div className="industry-link">
                                    <span>Airtight Sealing</span>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                                </div>
                            </div>
                        </div>

                        {/* Card 4: Medical Device */}
                        <div className="industry-card" style={{ '--i': 4 }}>
                            <div className="industry-image-box">
                                <img 
                                    src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=600&h=600" 
                                    alt="Medical Device Manufacturing" 
                                />
                                <div className="industry-overlay"></div>
                                <div className="industry-icon-tag">04</div>
                            </div>
                            <div className="industry-info">
                                <h3 className="industry-name">Medical Device <br/>Manufacturing</h3>
                                <p className="industry-text">Maintains strict contamination control for high-precision medical equipment and implant production.</p>
                                <div className="industry-link">
                                    <span>Zero-Particle Tech</span>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="clean-cta-section">
                {/* Animated Background Layer */}
                <div className="clean-cta-bg">
                    <img 
                        src="https://images.unsplash.com/photo-1558444479-c848267a1a6b?auto=format&fit=crop&q=80&w=1920" 
                        alt="Advanced Cleanroom Facility" 
                        className="clean-cta-img"
                    />
                    <div className="clean-cta-overlay"></div>
                </div>

                <div className="clean-cta-container">
                    <div className="clean-cta-content">
                        {/* Animated Decorative Line */}
                        <div className="clean-cta-line"></div>
                        
                        <h2 className="clean-cta-heading">
                            Build Reliable <span className="clean-text-highlight">Cleanroom Access</span> Systems
                        </h2>
                        
                        <p className="clean-cta-text">
                            Our engineering team provides customized cleanroom door systems designed to meet 
                            strict contamination control standards. Achieve ISO-certified precision with 
                            our architectural-grade solutions.
                        </p>

                        <div className="clean-cta-buttons">
                            <a className="clean-btn-primary" href='/contact'>
                                <span className="clean-btn-text">Request Quote</span>
                                <div className="clean-btn-glow"></div>
                            </a>
                            
                            <button className="clean-btn-secondary">
                                <svg className="clean-btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
                                </svg>
                                <span>Download Technical Catalog</span>
                            </button>
                        </div>
                    </div>
                </div>
                
                {/* Technical Data Decor */}
                <div className="clean-cta-decor">
                    <div className="decor-item">FACILITY_DESIGN_V.2026</div>
                    <div className="decor-item">ISO_8_COMPLIANT</div>
                </div>
            </section>
        </>
    );
};

export default CleanroomDoors;