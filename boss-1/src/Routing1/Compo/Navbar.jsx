import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

    return(
        <>
            <nav className='navbar navbar-primary bg-success navbar-expand-lg'>
                <Link to="#" className='navbar-brand'>  MadMax </Link>
                    <div className='ml-auto'>
                        <ul className='navbar-nav'>
                            <li className='nav-list'> <Link to="/home" className='nav-link'> Home </Link></li>
                            <li className='nav-list'> <Link to="/about" className='nav-link'> About </Link></li>
                            <li className='nav-list'> <Link to="/contact" className='nav-link'> Contact </Link></li>
                            <li className='nav-list'> <Link  to="services" className='nav-link'> Services </Link></li>
                        </ul>
                    </div>
            </nav>
        </>
    );
}
export default Navbar;