
import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/movies">Movies</Link></li>
          </ul>
        </div>
        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p>Email: info@example.com</p>
          <p>Phone: (123) 456-7890</p>
          <p>Address: 123 Main Street, Anytown, USA</p>
        </div>
        <div className="footer-social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
      </div>
      <style jsx>{`
        footer {
          background: #333;
          color: #fff;
          padding: 2rem 0;
          text-align: center;
        }
        .footer-content {
          display: flex;
          justify-content: space-around;
          flex-wrap: wrap;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
        }
        .footer-links, .footer-contact, .footer-social {
          flex: 1;
          margin: 1rem;
        }
        .footer-links ul {
          list-style: none;
          padding: 0;
        }
        .footer-links ul li {
          margin: 0.5rem 0;
        }
        .footer-links a {
          color: #fff;
          text-decoration: none;
        }
        .footer-links a:hover {
          text-decoration: underline;
        }
        .footer-social .social-icons {
          display: flex;
          justify-content: center;
        }
        .footer-social .social-icons a {
          color: #fff;
          margin: 0 0.5rem;
          font-size: 1.5rem;
          text-decoration: none;
        }
        .footer-bottom {
          border-top: 1px solid #444;
          padding: 1rem 0;
        }
        .footer-bottom p {
          margin: 0;
        }
      `}</style>
    </footer>
  );
};


