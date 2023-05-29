import React from 'react';to
import {Link} from 'react-router-dom';

const Navbar = () => {

    return(
       <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
        <Link to="/MadMax"> MadMax </Link>
            <div className='ml-auto'>
                <ul className='navbar-nav'>
                    <li className='nav-list'> <Link to="/Home" className='nav-link'> Home </Link ></li>
                    <li className='nav-list'> <Link to="/About Us" className='nav-link'> About Us </Link ></li>
                    <li className='nav-list'> <Link to="/Contact Us" className='nav-link'> Contact Us </Link ></li>
                    <li className='nav-list'> <Link to="/Services" className='nav-link'> Services </Link ></li>
                </ul>
            </div>
       </nav>
    );
}
export default Navbar;