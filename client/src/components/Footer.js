import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-flex">
        <Link smooth to="/#home">
          <h1 className="logo">Stracker</h1>
        </Link>
        <div className="footer-text">
          <p>Website created by Elmer Gonzalez, 2019™</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
