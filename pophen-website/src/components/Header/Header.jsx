import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'; // Ensure react-router-dom is installed
import './Header.css';
import logo from '../../assets/pophen-logo.webp';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen); 
  const closeMenu = () => {
    setIsMobileMenuOpen(false);
    setIsDropdownOpen(false);
  };

  const productSublinks = [
    { name: 'Cleanroom Panels', path: '/cleanroompanels' },
    { name: 'Cleanroom Ceilings', path: '/cleanroomceilings' },
    { name: 'Cleanroom Doors', path: '/cleanroomdoors' },
    { name: 'Cleanroom Windows', path: '/cleanroomwindows' },
  ]; 

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <div className="logo-container">
          <NavLink to="/" className="logo" onClick={closeMenu}>
            <img src={logo} alt="Pophen Logo" className="logo-image" />
          </NavLink>
        </div>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <ul className="nav-links">
            <li><NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Home</NavLink></li>
            <li><NavLink to="/about" className="nav-link">About</NavLink></li>
            
            {/* Products Dropdown */}
            <li 
              className="nav-item-dropdown"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <NavLink to="/products" className="nav-link">
                Products 
                <span className={`dropdown-arrow ${isDropdownOpen ? 'rotated' : ''}`}>▼</span>
              </NavLink>
              <div className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`}>
                {productSublinks.map((sub, index) => (
                  <NavLink key={index} to={sub.path} className="dropdown-item">
                    {sub.name}
                  </NavLink>
                ))}
              </div>
            </li>

            <li><NavLink to="/contact" className="nav-link">Contact</NavLink></li>
          </ul>
        </nav>

        {/* Contact CTA */}
        <div className="header-cta">
          <NavLink to="/contact" className="cta-button">Get a Quote</NavLink>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="mobile-toggle" onClick={toggleMenu} aria-label="Toggle menu">
          <div className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`mobile-nav ${isMobileMenuOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-links">
          <li><NavLink to="/" className="mobile-nav-link" onClick={closeMenu}>Home</NavLink></li>
          <li><NavLink to="/about" className="mobile-nav-link" onClick={closeMenu}>About</NavLink></li>
          
          <li className="mobile-dropdown-section">
            <span className="mobile-nav-link disabled">Products</span>
            <div className="mobile-submenu">
              {productSublinks.map((sub, index) => (
                <NavLink key={index} to={sub.path} className="mobile-submenu-link" onClick={closeMenu}>
                  {sub.name}
                </NavLink>
              ))}
            </div>
          </li>

          <li><NavLink to="/projects" className="mobile-nav-link" onClick={closeMenu}>Projects</NavLink></li>
          <li><NavLink to="/contact" className="mobile-nav-link" onClick={closeMenu}>Contact</NavLink></li>
        </ul>
      </div>
    </header>
  ); 
};

export default Header;