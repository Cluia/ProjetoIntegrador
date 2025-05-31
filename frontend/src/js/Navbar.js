// src/js/Navbar.js
import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import { FaBars, FaUserCircle, FaShoppingCart } from 'react-icons/fa';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeTimeout = useRef(null);

  const handleMouseEnter = () => {
    clearTimeout(closeTimeout.current);
    setIsMenuOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimeout.current = setTimeout(() => {
      setIsMenuOpen(false);
    }, 500); // delay maior para permitir o cursor alcançar o menu
  };

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <img src="/img/logo-3devs.png" alt="3Devs Studios" />
      </Link>

      <div className="nav-right">
        <Link to="/login" className="login-icon">
          <FaUserCircle size={24} />
        </Link>

        <Link to="/cart" className="cart-icon">
          <FaShoppingCart size={22} />
        </Link>

        <div
          className="menu-container"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="menu-icon">
            <FaBars size={22} />
          </div>

          <div
            className="dropdown-menu"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{ display: isMenuOpen ? 'flex' : 'none' }}
          >
            <Link to="/page1">Mouses</Link>
            <Link to="/page2">Teclados</Link>
            <Link to="/page3">Áudio</Link>
            <Link to="/page4">Monitores</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;