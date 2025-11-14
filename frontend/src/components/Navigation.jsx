import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const isActive = (path) => {
        return location.pathname === path ? 'font-semibold bg-linear-to-b from-neonGreen to-lightWhite rounded-full p-2 border' : 'text-deepBlack';
    };

  return (
    <nav className='flex items-center justify-end p-2 sticky top-0'>
        <div>
                <ul className="hidden lg:flex py-4 px-20 gap-25 text-lg">
                    <li>
                        <Link 
                            to="/" 
                            className={`hover:font-semibold ${isActive('/')}`}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="/about" 
                            className={`hover:font-semibold ${isActive('/about')}`}
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="/contact" 
                            className={`hover:font-semibold ${isActive('/contact')}`}
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>

            <div className="md:hidden cursor-pointer p-3" onClick={toggleMenu}>
                <i className={`fa-solid ${isMenuOpen ? 'fa-xmark' : 'fa-bars'} text-2xl`}></i>
            </div>

            <div className={`absolute top-full left-0 w-full md:hidden transition-all duration-300 ease-in-out ${
                isMenuOpen ? 'opacity-100 visible shadow-lg' : 'opacity-0 invisible'
            }`}>
                <ul className="flex flex-col items-center py-4 space-y-4 text-lg">
                    <li>
                        <Link 
                            to="/" 
                            className={`hover:font-semibold  block ${isActive('/')}`}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="/about" 
                            className={`hover:font-semibold block ${isActive('/about')}`}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="/contact" 
                            className={`hover:font-semibold block ${isActive('/contact')}`}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
    </nav>
  )
}

export default Navigation