import './CleanroomWindows.css';

function CleanroomWindows() {
    return(
        <>
            <section className="window-hero-wrapper">
                {/* Background layer with slow-motion zoom */}
                <div className="window-hero-bg">
                    <img 
                        src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1920" 
                        alt="Pharmaceutical Cleanroom Window Environment" 
                        className="window-bg-img"
                    />
                    <div className="window-hero-overlay"></div>
                    {/* Animated Tech Grid Overlay */}
                    <div className="window-hero-grid"></div>
                </div>

                <div className="window-hero-container">
                    <div className="window-content-box">
                        {/* Animated Badge */}
                        <div className="window-top-badge">
                            <span className="window-badge-line"></span>
                            <span className="window-badge-text">Precision Optical Clarity</span>
                        </div>

                        {/* Main Title with staggered reveal */}
                        <h1 className="window-main-title">
                            Cleanroom <span className="text-theme">Window Systems</span>
                        </h1>

                        {/* Subtitle */}
                        <p className="window-subtitle">
                            High-performance cleanroom observation windows designed for contamination control, 
                            visibility, and seamless integration with modular cleanroom wall systems.
                        </p>

                        {/* Highlights Bar */}
                        <div className="window-highlights">
                            <div className="highlight-item">
                                <svg className="highlight-icon" viewBox="0 0 24 24" fill="none" stroke="#d9f99d" strokeWidth="2"><path d="M20 6L9 17l-5-5"/></svg>
                                <span>Flush Mounted Design</span>
                            </div>
                            <div className="highlight-dot"></div>
                            <div className="highlight-item">
                                <svg className="highlight-icon" viewBox="0 0 24 24" fill="none" stroke="#d9f99d" strokeWidth="2"><path d="M20 6L9 17l-5-5"/></svg>
                                <span>Double Glazed Glass</span>
                            </div>
                            <div className="highlight-dot"></div>
                            <div className="highlight-item">
                                <svg className="highlight-icon" viewBox="0 0 24 24" fill="none" stroke="#d9f99d" strokeWidth="2"><path d="M20 6L9 17l-5-5"/></svg>
                                <span>ISO Compatible</span>
                            </div>
                        </div>

                        {/* CTA Button */}
                        <div className="window-cta-area">
                            <a className="window-btn-primary" href='/contact'>
                                <span className="btn-label">Request Quote</span>
                                <div className="btn-scanner"></div>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Aesthetic Element: Status Indicators */}
                <div className="window-status-bar">
                    <div className="status-node">
                        <div className="node-pulse"></div>
                        <span>System Active</span>
                    </div>
                    <div className="status-divider"></div>
                    <div className="status-label">STRUCTURAL INTEGRITY: 100%</div>
                </div>
            </section>

            <section className="window-overview-section">
                <div className="window-overview-container">
                    
                    {/* Left Side: Image with Tech Frame */}
                    <div className="overview-image-side">
                        <div className="tech-image-wrapper">
                            <img 
                                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800" 
                                alt="Cleanroom Window Installation" 
                                className="overview-main-img"
                            />
                            {/* Decorative Tech Elements */}
                            <div className="image-corner-tl"></div>
                            <div className="image-corner-br"></div>
                            <div className="image-scan-line"></div>
                            <div className="image-label">INSTALLATION_REF: 405-B</div>
                        </div>
                    </div>

                    {/* Right Side: Text Content */}
                    <div className="overview-text-side">
                        <div className="overview-header-group">
                            <span className="overview-pre-title">Engineering Excellence</span>
                            <h2 className="overview-heading">
                                Advanced Observation Windows for <span className="text-accent">Cleanroom Environments</span>
                            </h2>
                            <div className="overview-divider"></div>
                        </div>

                        <div className="overview-paragraphs">
                            <p className="overview-para fade-in-up">
                                Cleanroom windows provide safe visual access between controlled environments 
                                without compromising contamination control standards. These windows are 
                                designed to maintain airtight sealing while allowing monitoring and 
                                supervision of critical processes.
                            </p>
                            <p className="overview-para fade-in-up">
                                <strong className="text-bold">Pophen</strong> cleanroom windows are manufactured using high-quality 
                                tempered glass and aluminum framing systems to ensure durability, safety, 
                                and long-term performance in sterile environments.
                            </p>
                            <p className="overview-para fade-in-up">
                                The windows are designed to integrate seamlessly with modular cleanroom 
                                wall panels, providing flush installation and smooth surfaces that support 
                                easy cleaning and hygienic maintenance.
                            </p>
                        </div>

                        {/* Micro-Icon Highlights */}
                        <div className="overview-footer-stats">
                            <div className="stat-pill">
                                <div className="pill-dot"></div>
                                <span>ISO Class 5-8</span>
                            </div>
                            <div className="stat-pill">
                                <div className="pill-dot"></div>
                                <span>Airtight Seal</span>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </section>

            <section className="window-types-section">
                <div className="types-container">
                    <div className="types-header">
                        <h2 className="types-title">Specialized <span className="text-theme-dark">Window Configurations</span></h2>
                        <p className="types-subtitle">Precision-engineered glass solutions for every cleanroom classification.</p>
                    </div>

                    <div className="types-grid">

                        {/* Card 2 */}
                        <div className="type-card">
                            <div className="card-image-box">
                                <img src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=600" alt="Double Glazed Window" />
                                <div className="card-overlay-tag">THERMAL</div>
                            </div>
                            <div className="card-content">
                                <h3 className="card-title">Double Glazed Window</h3>
                                <p className="card-text">Two-layer glass structure designed for superior insulation and advanced contamination control.</p>
                                <div className="card-footer-link">View Specs <span className="arrow">→</span></div>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="type-card">
                            <div className="card-image-box">
                                <img src="https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&q=80&w=600" alt="Tempered Glass Window" />
                                <div className="card-overlay-tag">SAFETY</div>
                            </div>
                            <div className="card-content">
                                <h3 className="card-title">Tempered Glass Window</h3>
                                <p className="card-text">High-strength safety glass designed for maximum durability and extreme pressure resistance.</p>
                                <div className="card-footer-link">View Specs <span className="arrow">→</span></div>
                            </div>
                        </div>

                        {/* Card 4 */}
                        <div className="type-card">
                            <div className="card-image-box">
                                <img src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=600" alt="Observation Window System" />
                                <div className="card-overlay-tag">MONITORING</div>
                            </div>
                            <div className="card-content">
                                <h3 className="card-title">Observation System</h3>
                                <p className="card-text">Wide-format systems designed for real-time monitoring of operations inside critical facilities.</p>
                                <div className="card-footer-link">View Specs <span className="arrow">→</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="window-features-section">
                <div className="features-container">
                    <div className="features-top-content">
                        <div className="features-text">
                            <h2 className="features-main-heading">Core Engineering <span className="text-theme">Features</span></h2>
                            <p className="features-desc">Every window is built to exceed ISO standards for sterile environments.</p>
                        </div>
                        <div className="features-image-wrap">
                            <img 
                                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=1200" 
                                alt="Close up Cleanroom Window Detail" 
                                className="features-hero-img"
                            />
                            <div className="img-tech-overlay"></div>
                        </div>
                    </div>

                    <div className="features-grid-6">
                        {/* Feature 1 */}
                        <div className="feature-item-card">
                            <div className="feature-icon-box">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <rect x="3" y="3" width="18" height="18" rx="2" />
                                    <path d="M3 9h18M9 21V9" />
                                </svg>
                            </div>
                            <h3 className="feature-item-title">Flush Wall Installation</h3>
                            <p className="feature-item-text">Zero-edge mounting eliminates ledges where dust or microbes can accumulate.</p>
                        </div>

                        {/* Feature 2 */}
                        <div className="feature-item-card">
                            <div className="feature-icon-box">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                    <path d="M8 11l3 3 5-5" />
                                </svg>
                            </div>
                            <h3 className="feature-item-title">Double Glazed Safety Glass</h3>
                            <p className="feature-item-text">Dual-pane tempered glass provides acoustic insulation and impact protection.</p>
                        </div>

                        {/* Feature 3 */}
                        <div className="feature-item-card">
                            <div className="feature-icon-box">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <circle cx="12" cy="12" r="10" />
                                    <path d="M12 6v6l4 2" />
                                </svg>
                            </div>
                            <h3 className="feature-item-title">Smooth Hygienic Surfaces</h3>
                            <p className="feature-item-text">Non-porous materials treated with anti-static coatings to repel particles.</p>
                        </div>

                        {/* Feature 4 */}
                        <div className="feature-item-card">
                            <div className="feature-icon-box">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path d="M10 2l-6.2 6.2c-2.4 2.4-2.4 6.2 0 8.6L10 23" />
                                    <path d="M14 2l6.2 6.2c2.4 2.4 2.4 6.2 0 8.6L14 23" />
                                </svg>
                            </div>
                            <h3 className="feature-item-title">Chemical Resistance</h3>
                            <p className="feature-item-text">Frames and seals resistant to VHP (Vaporized Hydrogen Peroxide) sterilization.</p>
                        </div>

                        {/* Feature 5 */}
                        <div className="feature-item-card">
                            <div className="feature-icon-box">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                    <circle cx="12" cy="12" r="3" />
                                </svg>
                            </div>
                            <h3 className="feature-item-title">High Visibility</h3>
                            <p className="feature-item-text">Optically clear glass with minimal refraction for precise laboratory monitoring.</p>
                        </div>

                        {/* Feature 6 */}
                        <div className="feature-item-card">
                            <div className="feature-icon-box">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                    <path d="M22 4L12 14.01l-3-3" />
                                </svg>
                            </div>
                            <h3 className="feature-item-title">ISO Certified</h3>
                            <p className="feature-item-text">Fully compliant with international cleanroom standards for air leakage and safety.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="window-specs-section">
                <div className="specs-container">
                    <div className="specs-header">
                        <span className="specs-tag">Technical Data</span>
                        <h2 className="specs-title">Engineering <span className="text-theme-dark">Specifications</span></h2>
                        <div className="specs-line"></div>
                    </div>

                    <div className="specs-grid">
                        {/* Left Side: Technical Visualization */}
                        <div className="specs-visual-side">
                            <div className="blueprint-wrapper">
                                <img 
                                    src="https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&q=80&w=900" 
                                    alt="Window Engineering Blueprint" 
                                    className="blueprint-img"
                                />
                                <div className="blueprint-overlay">
                                    <div className="spec-callout pt-1">
                                        <div className="callout-dot"></div>
                                        <span className="callout-label">Double Glazed Seal</span>
                                    </div>
                                    <div className="spec-callout pt-2">
                                        <div className="callout-dot"></div>
                                        <span className="callout-label">Flush Aluminum Frame</span>
                                    </div>
                                </div>
                                {/* Animated scanning bar for 'alive' feel */}
                                <div className="blueprint-scanner"></div>
                            </div>
                        </div>

                        {/* Right Side: Data Table */}
                        <div className="specs-table-side">
                            <div className="specs-table">
                                <div className="table-row">
                                    <div className="table-label">Glass Type</div>
                                    <div className="table-value">Tempered Safety Glass</div>
                                </div>
                                <div className="table-row">
                                    <div className="table-label">Window Type</div>
                                    <div className="table-value">Flush Mounted / Double Glazed</div>
                                </div>
                                <div className="table-row">
                                    <div className="table-label">Frame Material</div>
                                    <div className="table-value">Aluminum / Stainless Steel</div>
                                </div>
                                <div className="table-row">
                                    <div className="table-label">Glass Thickness</div>
                                    <div className="table-value">5mm – 12mm</div>
                                </div>
                                <div className="table-row">
                                    <div className="table-label">Installation</div>
                                    <div className="table-value">Integrated with Wall Panel Systems</div>
                                </div>
                                <div className="table-row">
                                    <div className="table-label">Cleanroom Compatibility</div>
                                    <div className="table-value">ISO Class 1 – ISO Class 9</div>
                                </div>
                            </div>
                            
                            <div className="specs-footer">
                                <p>* Custom dimensions and specialized lead glass (X-Ray Protection) available upon request.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="cta-modern-wrapper">
                {/* Background Image with subtle parallax-style movement */}
                <div className="cta-bg-container">
                    <img 
                        src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1920&h=1080" 
                        alt="Futuristic Semiconductor Cleanroom" 
                        className="cta-bg-img"
                    />
                    <div className="cta-overlay-gradient"></div>
                    {/* Animated Tech Particles */}
                    <div className="cta-particle-layer"></div>
                </div>

                <div className="cta-inner-container">
                    <div className="cta-glass-card">
                        <div className="cta-accent-line"></div>
                        
                        <header className="cta-header">
                            <span className="cta-pre-title">Ready to Upgrade?</span>
                            <h2 className="cta-heading">
                                Design Reliable <span className="text-theme">Cleanroom Observation</span> Systems
                            </h2>
                            <div className="cta-divider">
                                <span className="divider-dot"></span>
                            </div>
                        </header>

                        <p className="cta-description">
                            Our engineering team provides customized cleanroom window systems designed for 
                            advanced manufacturing and sterile laboratory environments.
                        </p>

                        <div className="cta-button-group">
                            <a className="cta-btn-primary" href='/contact'>
                                <span className="cta-btn-text">Request Quote</span>
                                <svg className="cta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M5 12h14M12 5l7 7-7 7"/>
                                </svg>
                            </a>
                            
                            <button className="cta-btn-secondary">
                                <span className="cta-btn-text">Download Technical Catalog</span>
                                <svg className="cta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>
                                </svg>
                            </button>
                        </div>

                        {/* Live Status Indicator */}
                        <div className="cta-status-indicator">
                            <div className="status-ping"></div>
                            <span className="status-text">Engineering Support Available (UTC-5)</span>
                        </div>
                    </div>
                </div>
            </section> 
        </>
    );
};

export default CleanroomWindows;