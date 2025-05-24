import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Header: React.FC = () => {
  return (
    <header className="bg-header text-white p-4 transition-all duration-300">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <Link to="/">
          <Logo size="lg" />
        </Link>

        <div className="mt-2 md:mt-0">
          <nav className="flex space-x-4 text-sm">
            <Link to="/" className="hover:underline transition-colors text-white">Yes/No Wheel</Link>
            <Link to="/privacy-policy" className="hover:underline transition-colors text-white">Privacy</Link>
            <Link to="/terms-of-service" className="hover:underline transition-colors text-white">Terms</Link>
            <a href="mailto:info@spinzthewheelz.com" className="hover:underline transition-colors text-white">Contact</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
