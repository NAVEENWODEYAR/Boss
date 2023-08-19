import React,{Component} from 'react';

class Navbar extends Component 
{
    render ()
    {
        return(
            <>
                <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
                    <a href="#" className='navbar-brand'> MadMax Events </a>
                        <div className='ml-auto'>
                            <ul className='navbar-nav'>
                                <li className='nav-list'> <a className='nav-link'> Home </a></li>
                                <li className='nav-list'> <a className='nav-link'> Services </a></li>
                                <li className='nav-list'> <a className='nav-link'> About Us </a></li>
                                <li className='nav-list'> <a className='nav-link'> Contact Us </a></li>
                            </ul>
                        </div>

                </nav>
            </>
                
        )   
    }
}
export default Navbar;