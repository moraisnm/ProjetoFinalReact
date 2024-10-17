import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';

const Navbar: React.FC = () => {
    return (
        <header className={styles.navbar}>
            <Link to="/" className={styles.logo}>
                Logo
            </Link>
            <nav className={styles.nav}>
                <Link to="/products">Seating<i className="fas fa-chevron-down"></i></Link>
                <a href="#living room">Living Room<i className="fas fa-chevron-down"></i></a>
                <a href="#outdoor">Outdoor<i className="fas fa-chevron-down"></i></a>
                <a href="#bedroom">Bedroom<i className="fas fa-chevron-down"></i></a>
                <a href="#storage">Storage<i className="fas fa-chevron-down"></i></a>
            </nav>
        </header>
    );
};

export default Navbar;