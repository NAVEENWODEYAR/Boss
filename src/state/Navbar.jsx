import React from 'react';

const Navbar = () => {

    return(
       <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
        <a href="#"> MadMax </a>
            <div className='ml-auto'>
                <ul className='navbar-nav'>
                    <li className='nav-list-active'> <a href="#" className='nav-link'> Home </a></li>
                    <li className='nav-list'> <a href="#" className='nav-link'> About Us </a></li>
                    <li className='nav-list'> <a href="#" className='nav-link'> Contact Us </a></li>
                    <li className='nav-list'> <a href="#" className='nav-link'> Services </a></li>
                </ul>
            </div>
       </nav>
    );
}
export default Navbar;