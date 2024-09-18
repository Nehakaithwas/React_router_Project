import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaSearch, FaUser, FaBars, FaTimes } from 'react-icons/fa';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const getNavLinkStyle = ({ isActive }) => ({
    color: isActive ? 'blue' : 'black'
  });

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <div className="header-container">
        <div className="logo">
          <NavLink to="/">MyBrand</NavLink>
        </div>
        <nav className={isMenuOpen ? 'nav-links active' : 'nav-links'}>
          <ul>
            <li><NavLink to="/" style={getNavLinkStyle}>Home</NavLink></li>
            <li><NavLink to="/about" style={getNavLinkStyle}>About</NavLink></li>
            <li><NavLink to="/contact" style={getNavLinkStyle}>Contact</NavLink></li>
            <li><NavLink to="/movies" style={getNavLinkStyle}>Movies</NavLink></li>
          </ul>
        </nav>
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <button>
            <FaSearch />
          </button>
        </div>
        <div className="user-profile">
          <NavLink to="/profile">
            <FaUser />
          </NavLink>
        </div>
        <button className="menu-toggle" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      <style jsx>{`
        header {
          background: #d92356;
          color: #fff;
          padding: 1rem;
          position: relative;
        }
        .header-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
        }
        .logo a {
          color: #fff;
          text-decoration: none;
          font-size: 1.5rem;
          font-weight: bold;
        }
        .nav-links {
          display: flex;
          list-style: none;
        }
        .nav-links ul {
          display: flex;
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .nav-links li {
          margin: 0 1rem;
        }
        .nav-links a {
          text-decoration: none;
        }
        .nav-links .active {
          color: #ebdb34;
        }
        .nav-links a:hover {
          text-decoration: underline;
        }
        .search-bar {
          display: flex;
          align-items: center;
        }
        .search-bar input {
          padding: 0.5rem;
          border: none;
          border-radius: 4px;
          margin-right: 0.5rem;
        }
        .search-bar button {
          background: #555;
          border: none;
          color: #fff;
          padding: 0.5rem;
          border-radius: 4px;
          cursor: pointer;
        }
        .user-profile a {
          color: #fff;
          font-size: 1.5rem;
          text-decoration: none;
          margin-left: 1rem;
        }
        .menu-toggle {
          display: none;
          background: #555;
          border: none;
          color: #fff;
          padding: 0.5rem;
          border-radius: 4px;
          cursor: pointer;
        }
        @media (max-width: 768px) {
          .nav-links {
            display: none;
            flex-direction: column;
            width: 100%;
            position: absolute;
            top: 60px;
            left: 0;
            background: #333;
            padding: 1rem;
            border-top: 1px solid #444;
          }
          .nav-links.active {
            display: flex;
          }
          .menu-toggle {
            display: block;
          }
        }
      `}</style>
    </header>
  );
};
