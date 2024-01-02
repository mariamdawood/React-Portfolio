// /src/components/Header/index.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <nav>
                <Link to="/about">Mariam Dawood</Link>
                <ul>
                    <li><Link to="/about">About Me</Link></li>
                    <li><Link to="/portfolio">Portfolio</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><a href="https://drive.google.com/u/0/uc?id=11EMWOMA5d7TBiZpVuEQOgtuaaTsARNkC&export=download" download>Resume</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;