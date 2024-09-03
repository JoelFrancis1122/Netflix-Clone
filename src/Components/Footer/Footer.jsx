import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <a href="/">Home</a>
          <a href="/">Terms of Use</a>
          <a href="/">Privacy Policy</a>
          <a href="/">Help Center</a>
          <a href="/">Contact Us</a>
          <a href="/">Careers</a>
          <a href="/">Press</a>
          <a href="/">Investor Relations</a>
        </div>
       
        <div className="footer-info">
          <p>&copy; {new Date().getFullYear()} Netflix Clone. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
