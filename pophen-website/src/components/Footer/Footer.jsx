import React from 'react';
import './Footer.css';
import logo from '../../assets/pophen-logo.webp';
import { MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-container">
          {/* Brand Column */}
          <div className="footer-col brand-col">
            <a href="/" className="logo footer-logo">
              <img src={logo} alt="Pophen Logo" className="logo-image" />
            </a>
            <p className="company-desc">
              Advanced cleanroom architectural solutions for semiconductor, pharmaceutical, and high-tech manufacturing industries across India, Singapore, and the Middle East.
            </p>
          </div>

          {/* Company Links */}
          <div className="footer-col">
            <h4 className="footer-heading">Company</h4>
            <ul className="footer-links">
              <li><a href="/about">About Us</a></li>
              <li><a href="/products">Our Products</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>

          {/* Products Links */}
          <div className="footer-col">
            <h4 className="footer-heading">Products</h4>
            <ul className="footer-links">
              <li><a href="/cleanroompanels">Cleanroom Panels</a></li>
              <li><a href="/cleanroomceilings">Cleanroom Ceilings</a></li>
              <li><a href="/cleanroomdoors">Cleanroom Doors</a></li>
              <li><a href="/cleanroomwindows">Cleanroom Windows</a></li> 
            </ul>
          </div> 

          {/* Contact Info */}
          <div className="footer-col contact-col">
            <h4 className="footer-heading">Contact Us</h4>
            <ul className="contact-list">
              <li>
                <MapPin className="contact-icon" size={20} />
                <span>Industrial Area Phase 1, India</span>
              </li>
              <li>
                <Phone className="contact-icon" size={20} />
                <a href="tel:+919876543210">+91 98765 43210</a>
              </li>
              <li>
                <Mail className="contact-icon" size={20} />
                <a href="mailto:info@pophen.in">info@pophen.in</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="footer-container bottom-container">
          <p className="copyright">
            &copy; 2026 Pophen India. All Rights Reserved.
          </p>
          <div className="footer-legal">
            <a href="/privacy">Privacy Policy</a>
            <span className="separator">|</span>
            <a href="/terms">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;